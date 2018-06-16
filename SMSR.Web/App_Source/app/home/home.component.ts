import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";
import { User } from "../entities";

import { AppAction } from "../types";

@Component({
    selector: 'app-home',
    templateUrl: 'App_Source/app/home/home.component.html'
})
export class HomeComponent implements OnInit {

    me: User;
    meLabel: string = "";

    actions: AppAction[] = new Array<AppAction>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.me = user;
            this.meLabel = (user.Id == 0) ? user.DN : user.Name;
            this.actions = this.appService.getAppActions(this.me);
        });
    }
}
