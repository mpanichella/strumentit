import {Component, OnInit, Input, ElementRef} from "@angular/core";
import { EncryptionService } from "./encryption.service";

import {EditorFileComponent} from "./editor.file.component";

@Component({
    selector: 'app-encryption.json',
    template: '<strumentit-file-editor [options]="options"></strumentit-file-editor>',
    providers: [EncryptionService]
})
export class FileComponent extends EditorFileComponent implements OnInit {
    constructor(protected encryptionService: EncryptionService) {
        super(encryptionService);
    }

    options;

    ngOnInit() {
        this.options = {
            title:'File Encryption',
            encryption: 'File'
        };
    }
}