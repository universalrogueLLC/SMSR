import { Injectable, Inject, forwardRef } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { Project, User, EntryType } from "./entities";

@Injectable()
export class AppService {

    projectBase: string = "/api/Projects";

    constructor( @Inject(forwardRef(() => HttpClient)) private httpClient: HttpClient) { }

    getMe(): Observable<User> {
        let url = "/api/Users/0";
        return this.httpClient.get<User>(url);
    }

    getProjects(): Observable<Project[]> {
        let url = `${this.projectBase}`;
        return this.httpClient.get<Project[]>(url);
    }

    saveProject(project: Project): Observable<any> {
        let url = `${this.projectBase}/${project.Id}`;
        return this.httpClient.put(url, project);
    }

    addProject(project: Project): Observable<Project> {
        let url = `${this.projectBase}`;
        return this.httpClient.post<Project>(url, project);
    }
}