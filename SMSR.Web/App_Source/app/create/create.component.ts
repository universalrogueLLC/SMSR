import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { AppService } from "../appService.service";

import { Project, User, StatusReport } from "../entities";

@Component({
    selector: 'app-create',
    templateUrl: 'App_Source/app/create/create.component.html'
})
export class CreateComponent implements OnInit {

    me: User;

    selectedProjectId: string = "";
    projects: Project[] = new Array<Project>();

    reportDateModel: NgbDateStruct;

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getMe().subscribe((user) => {
            this.me = user;
        });

        this.appService.getProjects().subscribe((projects) => {
            for (let i = 0; i < projects.length; i++) {
                let project = projects[i];
                if (project.IsActive) {
                    this.projects.push(project);
                }
            }

            for (let i = 0; i < this.projects.length; i++) {
                if (this.selectedProjectId == "") {
                    this.selectedProjectId = this.projects[i].Id.toString();
                }
            }
        });
    }

    create(): void {
        let reportDate: string = this.appService.formatDatePickerModelAsString(this.reportDateModel);
        let statusReport = new StatusReport();
        statusReport.ProjectId = +this.selectedProjectId;
        statusReport.ReportDate = reportDate;
        statusReport.UserId = this.me.Id;

        this.appService.addStatusReport(statusReport).subscribe((result) => {
            let id = result.Id;
            document.location.href = `/#/edit/${id}`;
        });
    }
}
