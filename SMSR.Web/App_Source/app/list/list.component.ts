import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";

import { Project, User, StatusReport } from "../entities";
import { SearchCriteria, SearchResult, DatePickerModel } from "../types";

@Component({
    selector: 'app-list',
    templateUrl: 'App_Source/app/list/list.component.html'
})
export class ListComponent implements OnInit {
    criteria: SearchCriteria = new SearchCriteria();

    users: User[] = new Array<User>();

    projects: Project[] = new Array<Project>();

    searchResults: SearchResult[] = new Array<SearchResult>();

    beginDateModel: DatePickerModel;
    endDateModel: DatePickerModel;

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
        this.criteria.beginDate = this.appService.formatDatePickerModelAsString(this.beginDateModel);
        this.criteria.endDate = this.appService.formatDatePickerModelAsString(this.endDateModel);
        this.appService.searchStatusReports(this.criteria).subscribe((results) => {
            this.searchResults = results;
        });
    }

    resetCriteria(): void {
        this.criteria = new SearchCriteria();
        this.beginDateModel = new DatePickerModel();
        this.endDateModel = new DatePickerModel();
    }
}
