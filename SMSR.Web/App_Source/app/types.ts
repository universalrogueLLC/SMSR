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