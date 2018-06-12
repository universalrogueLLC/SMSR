import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";

@Component({
    selector: 'app-shell',
    templateUrl: 'App_Source/app/shell/shell.component.html'
})
export class ShellComponent implements OnInit {

    meLabel: string = "";

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.meLabel = (user.Id == 0) ? user.DN : user.Name;
        });
    }
}
