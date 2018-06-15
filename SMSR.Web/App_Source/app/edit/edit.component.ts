import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from "../appService.service";

import { Project, User, StatusReport, StatusReportEntry, EntryType } from "../entities";

@Component({
    selector: 'app-edit',
    templateUrl: 'App_Source/app/edit/edit.component.html'
})
export class EditComponent implements OnInit {
    me: User;

    canEdit: boolean = false;
    canDelete: boolean = false;

    entryTypes: EntryType[] = new Array<EntryType>();

    statusReport: StatusReport = new StatusReport();

    newEntry: StatusReportEntry = new StatusReportEntry();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService,
        @Inject(forwardRef(() => ActivatedRoute)) private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this.activatedRoute.snapshot.paramMap.get('id');

        this.appService.getEntryTypes().subscribe((entryTypes) => {
            this.entryTypes = entryTypes;
        });

        this.appService.getStatusReport(id).subscribe((statusReport) => {
            this.statusReport = statusReport;

            this.appService.getMe().subscribe((user) => {
                this.me = user;
                this.canEdit = this.me.Id == this.statusReport.UserId;
                this.canDelete = this.me.Id == this.statusReport.UserId;
                this.initNewEntry();
            });
        });
    }

    initNewEntry(): void {
        this.newEntry = new StatusReportEntry();
        this.newEntry.StatusReportId = this.statusReport.Id;
    }

    deleteStatusReport(): void {
        if (confirm("Are you sure you want to delete this status report?")) {
            this.appService.deleteStatusReport(this.statusReport.Id).subscribe((result) => {
                document.location.href = "/#/home";
            });
        }
    }

    addEntry(): void {
        this.appService.addStatusReportEntry(this.newEntry).subscribe((result) => {
            this.statusReport.Entries.push(result);
            this.initNewEntry();
            alert("Entry added");
        });
    }

    saveEntry(index: number): void {
        alert("not implemented");
    }

    deleteEntry(index: number): void {
        alert("not implemented");
    }
}
