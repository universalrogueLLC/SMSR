import { Injectable, Inject, forwardRef } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { ISMSREntity, Project, User, EntryType, StatusReport } from "./entities";
import { SearchCriteria, SearchResult } from "./types";

@Injectable()
export class AppService {

    projectBase: string = "/api/Projects";
    userBase: string = "/api/Users";
    entryTypeBase: string = "/api/EntryTypes";
    statusReportBase: string = "/api/StatusReports";

    constructor( @Inject(forwardRef(() => HttpClient)) private httpClient: HttpClient) { }

    // Users

    getMe(): Observable<User> {
        let url = `${this.userBase}/0`;
        return this.httpClient.get<User>(url);
    }

    getUsers(): Observable<User[]> {
        return this.getEntities<User>(this.userBase);
    }

    saveUser(user: User): Observable<any> {
        return this.saveEntity(user, this.userBase);
    }

    addUser(user: User): Observable<User> {
        return this.addEntity<User>(user, this.userBase);
    }

    // Projects

    getProjects(): Observable<Project[]> {
        return this.getEntities<Project>(this.projectBase);
    }

    saveProject(project: Project): Observable<any> {
        return this.saveEntity(project, this.projectBase);
    }

    addProject(project: Project): Observable<Project> {
        return this.addEntity<Project>(project, this.projectBase);
    }

    // EntryTypes

    getEntryTypes(): Observable<EntryType[]> {
        return this.getEntities<EntryType>(this.entryTypeBase);
    }

    saveEntryType(entryType: EntryType): Observable<any> {
        return this.saveEntity(entryType, this.entryTypeBase);
    }

    addEntryType(entryType: EntryType): Observable<EntryType> {
        return this.addEntity<EntryType>(entryType, this.entryTypeBase);
    }

    // StatusReports

    searchStatusReports(criteria: SearchCriteria): Observable<SearchResult[]> {
        let url = `${this.statusReportBase}/search`;
        return this.httpClient.post<SearchResult[]>(url, criteria);
    }

    getStatusReport(id: number): Observable<StatusReport> {
        return this.getEntity<StatusReport>(id, this.statusReportBase);
    }

    saveStatusReport(statusReport: StatusReport): Observable<any> {
        return this.saveEntity(statusReport, this.statusReportBase);
    }

    addStatusReport(statusReport: StatusReport): Observable<StatusReport> {
        return this.addEntity<StatusReport>(statusReport, this.statusReportBase);
    }

    deleteStatusReport(id: number): Observable<any> {
        return this.deleteEntity(id, this.statusReportBase);
    }

    // Generic

    getEntity<T>(id: number, baseUrl: string): Observable<T> {
        let url = `${baseUrl}/${id}`;
        return this.httpClient.get<T>(url);
    }

    getEntities<T>(baseUrl: string): Observable<T[]> {
        return this.httpClient.get<T[]>(baseUrl);
    }

    saveEntity(entity: ISMSREntity, baseUrl: string): Observable<any> {
        let url = `${baseUrl}/${entity.Id}`;
        return this.httpClient.put(url, entity);
    }

    addEntity<T>(entity: T, baseUrl: string): Observable<T> {
        let url = `${baseUrl}`;
        return this.httpClient.post<T>(url, entity);
    }

    deleteEntity(id: number, baseUrl: string): Observable<any> {
        let url = `${baseUrl}/${id}`;
        return this.httpClient.delete(url);
    }
}