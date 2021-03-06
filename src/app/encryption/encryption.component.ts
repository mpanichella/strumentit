import { Component } from "@angular/core";

@Component({
    selector: 'app-converter',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['json']">Json to XML</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['xml']">Xml To Json</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `
})
export class ConverterComponent {

}