import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent }  from './app.component';
import { routing } from "./app.routing";


import { ConverterComponent }  from './converter/converter.component';

import {MegaMenuModule} from 'primeng/primeng';

import FormatterModule from "./formatter/formatter.module";
import EncryptionModule from "./encryption/encryption.module";
import MinimizerModule from "./minimizer/minimizer.module";


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    routing,
                    ReactiveFormsModule,
                    FormatterModule,
                    EncryptionModule,
                    MinimizerModule,
                    MegaMenuModule
                    ],
    declarations: [ AppComponent,
                    ConverterComponent
                    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }