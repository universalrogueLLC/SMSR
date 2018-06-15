import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppService } from "../appService.service";

import { Project, User, StatusReport } from "../entities";
import { SearchCriteria } from "../types";

@Component({
    selector: 'app-list',
    templateUrl: 'App_Source/app/details/details.component.html'
})
export class DetailsComponent implements OnInit {

    me: User;

    canEdit: boolean = false;
    canDelete: boolean = false;
    statusReport: StatusReport = new StatusReport();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService,
        @Inject(forwardRef(() => ActivatedRoute)) private activatedRoute: ActivatedRoute,
        @Inject(forwardRef(() => Location)) private location: Location) { }

    ngOnInit(): void {
        let id = +this.activatedRoute.snapshot.paramMap.get('id');

        this.appService.getStatusReport(id).subscribe((statusReport) => {
            this.statusReport = statusReport;

            this.appService.getMe().subscribe((user) => {
                this.me = user;
                this.canEdit = this.me.Id == this.statusReport.UserId;
                this.canDelete = this.me.Id == this.statusReport.UserId;
            });
        });
    }

    editStatusReport(): void {
        let editUrl = `/#/edit/${this.statusReport.Id}`;
        document.location.href = editUrl;
    }

    deleteStatusReport(): void {
        if (confirm("Are you sure you want to delete this status report?")) {
            this.appService.deleteStatusReport(this.statusReport.Id).subscribe((result) => {
                document.location.href = "/#/home";
            });
        }
    }
}
