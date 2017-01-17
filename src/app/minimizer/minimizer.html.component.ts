import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { MinimizerService } from "./minimizer.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-minimize.html',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [MinimizerService]
})
export class HtmlComponent extends EditorComponent implements OnInit {
    constructor(protected minimizerService: MinimizerService) {
        super(minimizerService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'HTML Minimizer',
            minimizer: 'js'
        };
    }
}