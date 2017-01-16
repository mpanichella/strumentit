import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Converter } from "./converter.model";
import {AppSettings} from "../appSettings"

@Injectable()
export class ConverterService {
     constructor(private http: Http) {}

    base64tofile(converter: Converter) {
        const body = JSON.stringify(converter)

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(`${AppSettings.API_ENDPOINT}/converter/base64tofile`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const converter = new Converter(result.body);
                return converter;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}