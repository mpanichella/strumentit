import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { MinimizerService } from "./minimizer.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-minimize.xml',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [MinimizerService]
})
export class XmlComponent extends EditorComponent implements OnInit {
    constructor(protected minimizerService: MinimizerService) {
        super(minimizerService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'XML Minimizer',
            minimizer: 'xml'
        };
    }
}