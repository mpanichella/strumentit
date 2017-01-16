const del = require('del');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const colors  = require('colors');
const concat = require('gulp-concat');
const liveServer = require('gulp-live-server');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const sysBuilder = require('systemjs-builder');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');
const uglify = require('gulp-uglify');
const tsconfig = require('tsconfig-glob');
const sftp = require('gulp-sftp');
const replace = require('gulp-replace');
const GulpSSH = require('gulp-ssh')

const tscConfig = require('./tsconfig.json');

// Clean the js distribution directory
gulp.task('clean:dist:js', function () {
    return del('public/dist/*');
});

// Clean the css distribution directory
gulp.task('clean:dist:css', function () {
    return del('public/dist/css/*');
});

// Clean library directory
gulp.task('clean:lib', function () {
    return del('public/lib/**/*');
});

// Lint Typescript
gulp.task('lint:ts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose', { emitError: false }));
});

// Compile TypeScript to JS
gulp.task('compile:ts', function () {
    return gulp
        .src(tscConfig.filesGlob)
        .pipe(plumber({
            errorHandler: function (err) {
                console.error('>>> [tsc] Typescript compilation failed'.bold.green);
                this.emit('end');
            }}))
        .pipe(sourcemaps.init())
        .pipe(tsc(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/dist'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
    var builder = new sysBuilder('public', './system.config.js');
    return builder.buildStatic('app', 'public/dist/app.min.js')
        .then(function () {
            del(['public/lib/**/*', '!public/lib/vendors.min.js']);
            return del(['public/dist/**/*', '!public/dist/app.min.js']);
        })
        .catch(function(err) {
            console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
        });
});

// Minify JS bundle
gulp.task('minify:js', function() {
    return gulp
        .src('public/dist/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

// Concat and minify CSS
gulp.task('minify:css', function() {
    // concat and minify global css files
        gulp.src([
            'node_modules/primeng/resources/themes/bootstrap/theme.css',
            'node_modules/primeng/resources/primeng.css',
            'node_modules/codemirror/lib/codemirror.css',
            'node_modules/font-awesome/css/font-awesome.css'
        ])
        .pipe(concat('global.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/dist'));
    // minify component css files
    gulp
        .src('src/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/assets'));
});

// Copy dependencies
gulp.task('copy:libs', function() {
    gulp.src(['node_modules/rxjs/**/*'])
        .pipe(gulp.dest('public/lib/rxjs'));

    // concatenate non-angular2 libs, shims & systemjs-config
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/bootstrap.min.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-promise/dist/es6-promise.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        // 'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'system.config.js',
    ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lib'));

    // copy source maps
    gulp.src([
        'node_modules/es6-shim/es6-shim.map',
        'node_modules/reflect-metadata/Reflect.js.map',
        'node_modules/systemjs/dist/system-polyfills.js.map'
    ]).pipe(gulp.dest('public/lib'));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.*'
    ]).pipe(gulp.dest('public/lib/css'));

    gulp.src(['node_modules/primeng/**/*'])
        .pipe(gulp.dest('public/lib/primeng'));

    gulp.src(['node_modules/ng2-codemirror/**/*'])
        .pipe(gulp.dest('public/lib/ng2-codemirror'));

    gulp.src(['node_modules/codemirror/**/*'])
        .pipe(gulp.dest('public/lib/codemirror'));

    return  gulp.src(['node_modules/@angular/**/*'])
        .pipe(gulp.dest('public/lib/@angular'));
});

// UNUSED
// Copy static assets
gulp.task('copy:assets', function() {
    gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.*'])
        .pipe(gulp.dest('public/fonts'));

    gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('public/assets'));

    return gulp.src(['src/**/*.css'])
        .pipe(gulp.dest('public/assets'));
});

// Update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
    return tsconfig({
        configPath: '.',
        indent: 2
    });
});

// Watch src files for changes, then trigger recompilation
gulp.task('watch:src', function() {
    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('src/**/*.scss', ['styles']);
});

// Run Express, auto rebuild and restart on src changes
gulp.task('serve', ['watch:src'], function () {
    var server = liveServer.new('bin/www');
    server.start();

    gulp.watch('bin/www', server.start.bind(server));
});

gulp.task('lint', ['lint:ts']);

gulp.task('clean', ['clean:dist:js', 'clean:dist:css', 'clean:lib']);

gulp.task('copy', function(callback) {
    runSequence('clean:lib', 'copy:libs', callback);
});
gulp.task('scripts', function(callback) {
    runSequence(['lint:ts', 'clean:dist:js'], 'compile:ts', 'bundle:js', 'minify:js', callback);
});
gulp.task('styles', function(callback) {
    runSequence(['copy:assets', 'clean:dist:css'], ['minify:css'], callback);
});
gulp.task('build', function(callback) {
    runSequence('copy', 'scripts', 'styles', callback);
});

gulp.task('upload', function () {

  /*  var config = {
        host: '192.168.0.21',
        port: 22,
        username: 'node',
        privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
    }

    var gulpSSH = new GulpSSH({
        ignoreErrors: false,
        sshConfig: config
    })

    gulpSSH
        .shell(['pm2 stop www', 'pm2 start www'], {filePath: 'shell.log'})
        .pipe(gulp.dest('logs'))
*/
    gulp.src(['./public/**/*'])
    .pipe(replace('http://localhost:3000', 'http://www.strumentit.com'))
    .pipe(sftp({
        host: 'www.strumentit.com',
        user: 'strumentit',
        pass: 'Strumentit34518147*',
        remotePath: '/opt/bitnami/apps/strumentit/public'
    }));

    return gulp.src(
        [   './**/*',
            '!./src/**/*',
            '!./public/**/*',
            '!./gulpfile.js'
        ]
        )
        .pipe(sftp({
            host: 'www.strumentit.com',
            user: 'strumentit',
            pass: 'Strumentit34518147*',
            remotePath: '/opt/bitnami/apps/strumentit'
        }));
});

gulp.task('publish', function (callback) {
    runSequence('build', 'upload', callback);
});

gulp.task('default', function(callback) {
    runSequence('build', 'serve', callback);
});