import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";
import { User } from "../entities";
import { AppAction } from "../types";

@Component({
    selector: 'app-shell',
    templateUrl: 'App_Source/app/shell/shell.component.html'
})
export class ShellComponent implements OnInit {

    me: User;

    actions: AppAction[] = new Array<AppAction>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.me = user;
            this.actions = this.appService.getAppActions(this.me);
        });
    }
}
