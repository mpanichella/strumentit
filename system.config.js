// map tells the System loader where to look for things
var map = {
    'app':                                'dist',
    'rxjs':                               'lib/rxjs',
    '@angular':                           'lib/@angular',
    'primeng':                            'lib/primeng',
    'ng2-codemirror':                     'lib/ng2-codemirror',
    'codemirror':                         'lib/codemirror',
    'zone.js':                            'lib/zone.js/dist'
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'app':                                { main: 'main', defaultExtension: 'js' },
    'rxjs':                               { defaultExtension: 'js' },
    'zone.js':                            { main: 'zone', defaultExtension: 'js' },
    'codemirror':                         { main: 'lib/codemirror', defaultExtension: 'js' },
    'codemirror/mode':                    { main: 'mode/javascript/javascript', defaultExtension: 'js' }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

packages['primeng'] = { main: 'primeng.js', defaultExtension: 'js' };
packages['ng2-codemirror'] = { main: 'lib/Codemirror.js', defaultExtension: 'js' };

packages['codemirror_mode_xml'] = { main: 'mode/xml/xml.js', defaultExtension: 'js' };
packages['codemirror_mode_htmlmixed'] = { main: 'mode/htmlmixed/htmlmixed.js', defaultExtension: 'js' };
packages['codemirror_mode_css'] = { main: 'mode/css/css.js', defaultExtension: 'js' };

System.config({
    map: map,
    packages: packages
});