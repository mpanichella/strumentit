import { Routes,RouterModule  } from "@angular/router";
import { JsComponent } from "./minimizer.js.component";
import { XmlComponent } from "./minimizer.xml.component";
import {HtmlComponent} from "./minimizer.html.component";
import {CssComponent} from "./minimizer.css.component";

const routes: Routes = [
    {
        path: 'minimizer',
        children: [
            { path: 'js', component: JsComponent },
            { path: 'xml', component: XmlComponent },
            { path: 'html', component: HtmlComponent },
            { path: 'css', component: CssComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);

