import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsComponent }  from './minimizer.js.component';
import { XmlComponent }  from './minimizer.xml.component';
import {routing} from "./minimizer.routing";
import {CodemirrorModule} from 'ng2-codemirror';
import {HttpModule} from "@angular/http";
import {ToolbarModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {EditorComponent} from "./editor.component";
import {HtmlComponent} from "./minimizer.html.component";
import {CssComponent} from "./minimizer.css.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CodemirrorModule,
        routing,
        HttpModule,
        ToolbarModule,
        SplitButtonModule
    ],
    declarations: [
        JsComponent,
        XmlComponent,
        HtmlComponent,
        CssComponent,
        EditorComponent
    ]
})
export default class MinimizerModule {
}
