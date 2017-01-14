import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonComponent }  from './formatter.json.component';
import { XmlComponent }  from './formatter.xml.component';
import {routing} from "./formatter.routing";
import {CodemirrorModule} from 'ng2-codemirror';
import {HttpModule} from "@angular/http";
import {ToolbarModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {EditorComponent} from "./editor.component";
import {HtmlComponent} from "./formatter.html.component";
import {CssComponent} from "./formatter.css.component";

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
        JsonComponent,
        XmlComponent,
        HtmlComponent,
        CssComponent,
        EditorComponent
    ]
})
export default class FormatterModule {
}
