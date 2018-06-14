import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";

import { Project, User, StatusReport } from "../entities";
import { SearchCriteria } from "../types";

@Component({
    selector: 'app-list',
    templateUrl: 'App_Source/app/list/list.component.html'
})
export class ListComponent implements OnInit {
    criteria: SearchCriteria = new SearchCriteria();

    users: User[] = new Array<User>();

    projects: Project[] = new Array<Project>();

    searchResults: StatusReport[] = new Array<StatusReport>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getProjects().subscribe((projects) => {
            this.projects = projects;
        });

        this.appService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }

    search(): void {
        this.appService.searchStatusReports(this.criteria).subscribe((results) => {
            this.searchResults = results;
        });
    }

    resetCriteria(): void {
        this.criteria = new SearchCriteria();
    }
}
