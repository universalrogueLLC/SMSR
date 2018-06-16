﻿export class SearchCriteria {
    projectId: string;
    userId: string;
    beginDate: string;
    endDate: string;

    constructor() {
        this.projectId = "---";
        this.userId = "---";
        this.beginDate = "";
        this.endDate = "";
    }
}

export class SearchResult {
    Id: number;
    Author: string;
    Project: string;
    ReportDate: string;
}

export class DatePickerModel {
    year: number;
    month: number;
    day: number;
}

export class AppAction {
    route: string;
    label: string;
}