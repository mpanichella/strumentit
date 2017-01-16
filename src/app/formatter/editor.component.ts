import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input, Output} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";
import {Formatter} from "./formatter.model";
import {FormatterService} from "./formatter.service";

@Component({
    selector: 'strumentit-editor',
    templateUrl: './assets/app/formatter/editor.component.html',
    styleUrls: ['./assets/app/formatter/editor.component.css']
})
export class EditorComponent implements OnInit {
    constructor(protected formatService: FormatterService) {
    }

    items: MenuItem[];

    formatter: Formatter = new Formatter("");

    config;

    @Input()
    options;

    @Output('instance')
    instance;

    @ViewChild('inputTarget')
    elementRef: ElementRef;

    result: string;

    onChange(){
        //alert('cambio');
    }
    ngAfterViewInit() {
        this.config = this.config || {};
    }

    ngOnInit() {

        switch (this.options.formatter) {
            case 'json':
                this.config = {
                    lineNumbers: true,
                    mode: {
                        name: 'javascript',
                        json: true
                    }
                };

                break;
            case 'xml':

                this.config= {
                    mode: 'application/xml',
                    lineNumbers: true,
                    lineWrapping: true
                }
                break;
            case 'html':
                this.config= {
                    mode: {
                        name: 'htmlmixed',
                        htmlMode:true
                    },
                    lineNumbers: true,
                    lineWrapping: true
                }
                break;
            case 'css':
                this.config= {
                    mode: "text/css",
                    lineNumbers: true,
                    lineWrapping: true
                }
                break;
        }


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

    format() {
        switch (this.options.formatter) {
            case 'json':
                this.formatService.formatJson(this.formatter).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'xml':
                this.formatService.formatXml(this.formatter).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'html':
                this.formatService.formatHtml(this.formatter).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'css':
                this.formatService.formatCss(this.formatter).subscribe(
                    result => this.result = result.data
                );
                break;
        }
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