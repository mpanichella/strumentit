import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { EncryptionFile,EncryptionText } from "./encryption.model";
import {AppSettings} from "../appSettings"

@Injectable()
export class EncryptionService {
     constructor(private http: Http) {}

    filetoBase64(formData: FormData) {
        let headers = new Headers();

        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`${AppSettings.API_ENDPOINT}/encryption/filetobase64`, formData, options)
            .map((response: Response) => {
                const result = response.json();

                return result;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }


    base64tofile(encryption: EncryptionFile) {

        const body = JSON.stringify(encryption)

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(`${AppSettings.API_ENDPOINT}/encryption/base64tofile`, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

/*    base64tofile(encryption: EncryptionFile) {

        const body = JSON.stringify(encryption)

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(`${AppSettings.API_ENDPOINT}/encryption/base64tofile`, body, {headers: headers})
            .map((response: Response) => {
                return response.arrayBuffer();
            })
            .catch((error: Response) => Observable.throw(error));
    }*/

}