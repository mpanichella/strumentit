import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input, Output} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";
import {Minimizer} from "./minimizer.model";
import {MinimizerService} from "./minimizer.service";

@Component({
    selector: 'strumentit-editor',
    templateUrl: './assets/app/minimizer/editor.component.html',
    styleUrls: ['./assets/app/minimizer/editor.component.css']
})
export class EditorComponent implements OnInit {
    constructor(protected minimizerService: MinimizerService) {
    }

    items: MenuItem[];

    minimizer: Minimizer = new Minimizer("");

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

    minimize() {
        switch (this.options.minimizer) {
            case 'js':
                this.minimizerService.minimizeJs(this.minimizer).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'xml':
                this.minimizerService.minimizeJs(this.minimizer).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'html':
                this.minimizerService.minimizeJs(this.minimizer).subscribe(
                    result => this.result = result.data
                );
                break;
            case 'css':
                this.minimizerService.minimizeJs(this.minimizer).subscribe(
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