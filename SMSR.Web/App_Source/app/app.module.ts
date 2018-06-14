﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppService } from "./appService.service";

import { ShellComponent } from "./shell/shell.component";
import { HomeComponent } from './home/home.component';
import { CreateEditComponent } from './createEdit/createEdit.component';
import { ListComponent } from './list/list.component';
import { GenerateMSRComponent } from './generateMSR/generateMSR.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from "./details/details.component";

let appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'createEdit/:id', component: CreateEditComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'list', component: ListComponent },
    { path: 'generateMSR', component: GenerateMSRComponent },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ShellComponent, HomeComponent, CreateEditComponent, DetailsComponent, ListComponent, GenerateMSRComponent, AdminComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true }),
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [AppService],
    bootstrap: [ShellComponent]
})
export class AppModule { }
