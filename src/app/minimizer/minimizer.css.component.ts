import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { MinimizerService } from "./minimizer.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-minimize.css',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [MinimizerService]
})
export class CssComponent extends EditorComponent implements OnInit {
    constructor(protected minimizerService: MinimizerService) {
        super(minimizerService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'CSS Minimizer',
            minimizer: 'css'
        };
    }
}