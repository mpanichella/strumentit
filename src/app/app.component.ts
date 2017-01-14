import {Component} from '@angular/core';

import {MenuModule, MenuItem} from 'primeng/primeng';

import '../../node_modules/primeng/resources/primeng.css';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Formatter', icon: 'fa-check',
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
                label: 'Converter', icon: 'fa-soccer-ball-o',
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
                label: 'Encryption', icon: 'fa-soccer-ball-o',
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