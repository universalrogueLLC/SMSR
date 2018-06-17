import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { AppService } from "../appService.service";
    
import { Project } from "../entities";
import { GenerateMSRCriteria, MSRSection } from "../types";

@Component({
    selector: 'app-generateMSR',
    templateUrl: 'App_Source/app/generateMSR/generateMSR.component.html'
})
export class GenerateMSRComponent implements OnInit {

    criteria: GenerateMSRCriteria = new GenerateMSRCriteria();
    beginDateModel: NgbDateStruct;
    endDateModel: NgbDateStruct;

    projects: Project[] = new Array<Project>();

    generationResults: MSRSection[] = new Array<MSRSection>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getProjects().subscribe((projects) => {
            this.projects = projects;
        });
    }

    generate(): void {
        this.criteria.beginDate = this.appService.formatDatePickerModelAsString(this.beginDateModel);
        this.criteria.endDate = this.appService.formatDatePickerModelAsString(this.endDateModel);
        this.appService.generateMSR(this.criteria).subscribe((result) => {
            this.generationResults = result;
        });
    }
}
