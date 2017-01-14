import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { FormatterService } from "./formatter.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-formatter.json',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [FormatterService]
})
export class HtmlComponent extends EditorComponent implements OnInit {
    constructor(protected formatService: FormatterService) {
        super(formatService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'HTML Formatter',
            formatter: 'html'
        };
    }
}