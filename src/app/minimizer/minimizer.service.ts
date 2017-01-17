import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Minimizer } from "./minimizer.model";
import {AppSettings} from "../appSettings"

@Injectable()
export class MinimizerService {
     constructor(private http: Http) {}


    minimizeJs(minimizer: Minimizer) {
        const body = JSON.stringify(minimizer)

        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(`${AppSettings.API_ENDPOINT}/minimizer/js`, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const minimizer = new Minimizer(result.body);
                return minimizer;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}