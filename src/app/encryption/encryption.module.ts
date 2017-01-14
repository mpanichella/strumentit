import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileComponent }  from './encryption.file.component';
import {routing} from "./encryption.routing";
import {HttpModule} from "@angular/http";
import {ToolbarModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {EditorTextComponent} from "./editor.text.component";
import {EditorFileComponent} from "./editor.file.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        ToolbarModule,
        SplitButtonModule
    ],
    declarations: [
        FileComponent,
        EditorTextComponent,
        EditorFileComponent
    ]
})
export default class EncryptionModule {
}
