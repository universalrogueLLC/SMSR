import { Injectable, Inject, forwardRef } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { User } from "./entities";

@Injectable()
export class AppService {

    constructor( @Inject(forwardRef(() => HttpClient)) private httpClient: HttpClient) { }

    getMe(): Observable<User> {
        let url = "/api/Users/0";
        return this.httpClient.get<User>(url);
    }
}