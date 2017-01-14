import 'primeng/resources/themes/bootstrap/theme.css';
import 'primeng/resources/primeng.min.css';
import 'codemirror/lib/codemirror.css';
import 'font-awesome/css/font-awesome.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);