import { Routes,RouterModule  } from "@angular/router";
import { FileComponent } from "./encryption.file.component";

const routes: Routes = [
    {
        path: 'encryption',
        children: [
            { path: 'file', component: FileComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);

