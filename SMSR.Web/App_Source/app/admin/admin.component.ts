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

    newUser: User = new User();
    users: User[] = new Array<User>();

    newEntryType: EntryType = new EntryType();
    entryTypes: EntryType[] = new Array<EntryType>();

    constructor( @Inject(forwardRef(() => AppService)) private appService: AppService) { }

    ngOnInit(): void {
        this.appService.getProjects().subscribe((projects) => {
            this.projects = projects;
        });

        this.appService.getUsers().subscribe((users) => {
            this.users = users;
        });

        this.appService.getEntryTypes().subscribe((entryTypes) => {
            this.entryTypes = entryTypes;
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

    saveUser(index: number): void {
        let user = this.users[index];
        this.appService.saveUser(user).subscribe((result) => {
            alert("User saved");
        });
    }

    addUser(): void {
        this.appService.addUser(this.newUser).subscribe((result) => {
            this.users.push(result);
            this.newUser = new User();
            alert("User added");
        });
    }

    saveEntryType(index: number): void {
        let entryType = this.entryTypes[index];
        this.appService.saveEntryType(entryType).subscribe((result) => {
            alert("Entry Type saved");
        });
    }

    addEntryType(): void {
        this.appService.addEntryType(this.newEntryType).subscribe((result) => {
            this.entryTypes.push(result);
            this.newEntryType = new EntryType();
            alert("Entry Type added");
        });
    }
}
