import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent }  from './app.component';
import { routing } from "./app.routing";
import { SidebarModule } from 'ng-sidebar';
/*
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
*/

import { ConverterComponent }  from './converter/converter.component';
import { MinimizerComponent }  from './minimizer/minimizer.component';


/*import {MaterialModule, MdRippleModule} from "@angular/material";*/
import FormatterModule from "./formatter/formatter.module";
import {MegaMenuModule} from 'primeng/primeng';
import EncryptionModule from "./encryption/encryption.module";

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    routing,
                    ReactiveFormsModule,
                    SidebarModule,
                    FormatterModule,
                    EncryptionModule,
                    MegaMenuModule
                    ],
    declarations: [ AppComponent,
                    ConverterComponent,
                    MinimizerComponent
                    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }