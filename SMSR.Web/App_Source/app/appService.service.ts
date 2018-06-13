import { Injectable, Inject, forwardRef } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { Project, User, EntryType } from "./entities";

@Injectable()
export class AppService {

    projectBase: string = "/api/Projects";
    userBase: string = "/api/Users";
    entryTypeBase: string = "/api/EntryTypes";

    constructor( @Inject(forwardRef(() => HttpClient)) private httpClient: HttpClient) { }

    // Users

    getMe(): Observable<User> {
        let url = `${this.userBase}/0`;
        return this.httpClient.get<User>(url);
    }

    getUsers(): Observable<User[]> {
        let url = `${this.userBase}`;
        return this.httpClient.get<User[]>(url);
    }

    saveUser(user: User): Observable<any> {
        let url = `${this.userBase}/${user.Id}`;
        return this.httpClient.put(url, user);
    }

    addUser(user: User): Observable<User> {
        let url = `${this.userBase}`;
        return this.httpClient.post<User>(url, user);
    }

    // Projects

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

    // EntryTypes

    getEntryTypes(): Observable<EntryType[]> {
        let url = `${this.entryTypeBase}`;
        return this.httpClient.get<EntryType[]>(url);
    }

    saveEntryType(entryType: EntryType): Observable<any> {
        let url = `${this.entryTypeBase}/${entryType.Id}`;
        return this.httpClient.put(url, entryType);
    }

    addEntryType(entryType: EntryType): Observable<EntryType> {
        let url = `${this.entryTypeBase}`;
        return this.httpClient.post<EntryType>(url, entryType);
    }
}