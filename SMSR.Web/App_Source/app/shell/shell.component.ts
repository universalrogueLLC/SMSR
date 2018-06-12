import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";
import { User } from "../entities";

@Component({
    selector: 'app-shell',
    templateUrl: 'App_Source/app/shell/shell.component.html'
})
export class ShellComponent implements OnInit {

    me: User;

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.me = user;
        });
    }
}
