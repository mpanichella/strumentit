import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { MinimizerService } from "./minimizer.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-minimize.js',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [MinimizerService]
})
export class JsComponent extends EditorComponent implements OnInit {
    constructor(protected minimizerService: MinimizerService) {
        super(minimizerService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'JavaScript Minimizer',
            minimizer: 'js'
        };
    }
}