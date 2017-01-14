import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input, Output} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";
import {EncryptionText} from "./encryption.model";
import {EncryptionService} from "./encryption.service";

@Component({
    selector: 'strumentit-text-editor',
    templateUrl: './editor.text.component.html',
    styleUrls: ['./editor.text.component.css']
})
export class EditorTextComponent implements OnInit {
    constructor(protected encryptionService: EncryptionService) {
    }

    items: MenuItem[];

    encryption: EncryptionText = new EncryptionText("");

    @Input()
    options;

    result: string;

    ngOnInit() {
        this.items = [
            {
                label: 'To Clipboard', icon: 'fa-clipboard', command: () => {
                this.exportToClipboard();
            }
            },
            {
                label: 'To Txt', icon: 'fa-file-text-o', command: () => {
                this.exportToTxt();
            }
            }
        ];
    }

    encode() {
       /* switch (this.options.encryption) {
            case 'json':
                this.encryptionService.base64tofile(this.encryption).subscribe(
                    result => this.result = result.data
                );
                break;
        }*/
    }

    clean() {
        this.result="";
    }

    exportToClipboard() {
        let selBox = document.createElement('textarea');

        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.result;

        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();

        document.execCommand('copy');
        document.body.removeChild(selBox);

    }

    exportToTxt() {
        alert('exportToTxt')
    }

    delete() {
        alert('delete')
    }
}