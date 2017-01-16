import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Formatter } from "./formatter.model";
import {AppSettings} from "../appSettings"

@Injectable()
export class FormatterService {
     constructor(private http: Http) {}

    formatJson(formatter: Formatter) {
        const body = JSON.stringify(formatter)

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(`${AppSettings.API_ENDPOINT}/formatter/json`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const formatter = new Formatter(result.body);
                return formatter;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    formatXml(formatter: Formatter) {
        const body = JSON.stringify(formatter)

        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${AppSettings.API_ENDPOINT}/formatter/xml`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const formatter = new Formatter(result.body);
                return formatter;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    formatHtml(formatter: Formatter) {
        const body = JSON.stringify(formatter)

        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${AppSettings.API_ENDPOINT}/formatter/html`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const formatter = new Formatter(result.body);
                return formatter;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    formatCss(formatter: Formatter) {
        const body = JSON.stringify(formatter)

        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${AppSettings.API_ENDPOINT}/formatter/css`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const formatter = new Formatter(result.body);
                return formatter;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}