import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { AppService } from "../appService.service";

import { Project, User, EntryType } from "../entities";

@Component({
    selector: 'app-admin',
    templateUrl: 'App_Source/app/admin/admin.component.html'
})
export class AdminComponent implements OnInit {
    managing: string = "PROJECTS";

    newProject: Project = new Project();
    projects: Project[] = new Array<Project>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getProjects().subscribe((projects) => {
            this.projects = projects;
        });
    }

    saveProject(index: number): void {
        let project = this.projects[index];
        this.appService.saveProject(project).subscribe((result) => {
            alert("Project saved");
        });
    }

    addProject(): void {
        this.appService.addProject(this.newProject).subscribe((result) => {
            this.projects.push(result);
            this.newProject = new Project();
            alert("Project added");
        });
    }
}
