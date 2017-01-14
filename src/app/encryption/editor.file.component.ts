import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild, Input, Output} from "@angular/core";
import {MenuItem} from "primeng/components/common/api";
import {EncryptionFile} from "./encryption.model";
import {EncryptionService} from "./encryption.service";
import 'rxjs/Rx';

@Component({
    selector: 'strumentit-file-editor',
    templateUrl: 'editor.file.component.html',
    styleUrls: ['editor.file.component.css']
})
export class EditorFileComponent implements OnInit {
    constructor(protected encryptionService: EncryptionService) {
    }

    items: MenuItem[];

    encryption: EncryptionFile = new EncryptionFile("","");

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

    //uploadedFiles: any[] = [];

    onUpload(event) {
        let fileList: FileList = event.target.files;
        console.log( event);
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);

            this.encryptionService.filetoBase64(formData).subscribe(
                result => this.result = result.body
            );
        }
    }

    decode() {
        this.encryptionService.base64tofile(this.encryption).subscribe(
            (response) => { // download file
              /*  var blob = new Blob([response.blob()], {type: 'application/pdf'});
                var filename = 'file.pdf';*/
                console.log(response);

                //var blob = new Blob([response], { type: this.encryption.mime });
               // var url= window.URL.createObjectURL(blob);

                var uri = 'data:'+this.encryption.mime+';base64,' + response.body.data;

                let a = window.document.createElement("a")
                a.href = uri //window.URL.createObjectURL(blob)
                a.download = response.fileName;
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)






//var file = "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";




      /*          var a = document.createElement("a");
                var dataURI = "data:" + this.encryption.mime +
                    ";base64," + file;
                a.href = dataURI;
                a['download'] = "pepe.jpg";
                var e = document.createEvent("MouseEvents");
// Use of deprecated function to satisfy TypeScript.
                e.initMouseEvent("click", true, false,
                    document.defaultView, 0, 0, 0, 0, 0,
                    false, false, false, false, 0, null);
                a.dispatchEvent(e);*/



                //window.open(url);


            }
        );


/*console.log(thefile);
        let url = window.URL.createObjectURL(thefile);
        window.open(url);


        console.log(this.result);*/
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