import {Component} from '@angular/core';

import {MenuItem} from 'primeng/primeng';
//TODO: Revisar la hoja de estilo
//import '../../node_modules/primeng/resources/primeng.css';


@Component({
    selector: 'app',
    templateUrl: './assets/app/app.component.html',
    styleUrls: ['./assets/app/app.component.css']
})
export class AppComponent {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Formatter', icon: 'fa-indent',
                items: [
                    [
                        {
                            label: 'Development',
                            items: [{label: 'JSON', routerLink: ['formatter', 'json']},
                                {label: 'XML', routerLink: ['formatter', 'xml']},
                                {label: 'HTML', routerLink: ['formatter', 'html']},
                                {label: 'CSS', routerLink: ['formatter', 'css']}
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Minimizer', icon: 'fa-compress',
                items: [
                    [
                        {
                            label: 'Development',
                            items: [{label: 'JavaScript', routerLink: ['minimizer', 'js']},
                                {label: 'XML', routerLink: ['minimizer', 'xml']},
                                {label: 'HTML', routerLink: ['minimizer', 'html']},
                                {label: 'CSS', routerLink: ['minimizer', 'css']}
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Converter', icon: 'fa-exchange',
                items: [
                    [
                        {
                            label: 'Json',
                            items: [{label: 'To XML'}, {label: 'To Algo'}]
                        }
                    ],
                    [
                        {
                            label: 'XML',
                            items: [{label: 'To JSON'}, {label: 'To Algo'}]
                        }
                    ]
                ]
            },
            {
                label: 'Encryption', icon: 'fa-lock',
                items: [
                    [
                        {
                            label: 'Encode/Decode',
                            items: [{label: 'Base32'},
                                    {label: 'Base58'},
                                    {label: 'Base64'},
                                    {label: 'File', routerLink: ['encryption', 'file']}
                                    ]
                        }
                    ],
                    [
                        {
                            label: 'Encrypt',
                            items: [{label: 'XOR'},
                                    {label: 'AES'},
                                    {label: 'RC4'},
                                    {label: 'DES'},
                                    {label: '3DES'}
                            ]
                        }
                    ],
                    [
                        {
                            label: 'Decrypt',
                            items: [{label: 'XOR'},
                                    {label: 'AES'},
                                    {label: 'RC4'},
                                    {label: 'DES'},
                                    {label: '3DES'}
                            ]
                        }
                    ]
                ]
            }
        ];
    }


}