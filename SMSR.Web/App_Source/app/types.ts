export class SearchCriteria {
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

export class AppAction {
    route: string;
    label: string;
}

export class GenerateMSRCriteria {
    projectId: string;
    beginDate: string;
    endDate: string;
}

export class MSRSection {
    Name: string;
    Entries: string[];
}