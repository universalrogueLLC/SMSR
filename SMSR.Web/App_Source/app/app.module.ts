import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ShellComponent } from "./shell/shell.component";
import { HomeComponent } from './home/home.component';
import { CreateEditComponent } from './createEdit/createEdit.component';
import { ListComponent } from './list/list.component';
import { GenerateMSRComponent } from './generateMSR/generateMSR.component';
import { AdminComponent } from './admin/admin.component';

let appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'createEdit/:id', component: CreateEditComponent },
    { path: 'list', component: ListComponent },
    { path: 'generateMSR', component: GenerateMSRComponent },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ShellComponent, HomeComponent, CreateEditComponent, ListComponent, GenerateMSRComponent, AdminComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule
    ],
    providers: [],
    bootstrap: [ShellComponent]
})
export class AppModule { }
