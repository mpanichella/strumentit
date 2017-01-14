import {Component, OnInit, Input} from "@angular/core";
import { FormatterService } from "./formatter.service";

import {EditorComponent} from "./editor.component";

@Component({
    selector: 'app-formatter.xml',
    template: '<strumentit-editor [options]="options"></strumentit-editor>',
    providers: [FormatterService]
})
export class XmlComponent extends EditorComponent implements OnInit {
    constructor(protected formatService: FormatterService) {
        super(formatService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'XML Formatter',
            formatter: 'xml'
        };
    }
}