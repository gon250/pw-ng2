import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
//import { PageNotFoundComponent } from './shared/components/page-not-found/index';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: "home", pathMatch: "full" }
            //,{ path: '**', component: PageNotFoundComponent }
        ], { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule { }