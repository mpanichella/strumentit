import { Routes,RouterModule  } from "@angular/router";
import { JsonComponent } from "./formatter.json.component";
import { XmlComponent } from "./formatter.xml.component";
import {HtmlComponent} from "./formatter.html.component";
import {CssComponent} from "./formatter.css.component";

const routes: Routes = [
    {
        path: 'formatter',
        children: [
            { path: 'json', component: JsonComponent },
            { path: 'xml', component: XmlComponent },
            { path: 'html', component: HtmlComponent },
            { path: 'css', component: CssComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);

