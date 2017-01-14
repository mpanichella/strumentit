import { Routes } from "@angular/router";
/*import { JsonComponent } from "./json.component";
import { XmlComponent } from "./xml.component";*/

export const CONVERTER_ROUTES: Routes = [
    { path: '', redirectTo: 'json', pathMatch: 'full' }
    /*{ path: 'json', component: JsonComponent},
    { path: 'xml', component: XmlComponent}*/
];