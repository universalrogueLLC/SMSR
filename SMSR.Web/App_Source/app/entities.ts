export interface ISMSREntity {
    Id: number;
}

export class Project implements ISMSREntity {
    Id: number;
    Name: string;
    IsActive: boolean;
}

export class User implements ISMSREntity {
    Id: number;
    DN: string;
    Name: string;
    IsAuthor: boolean;
    IsAdmin: boolean;
    IsActive: boolean;
}

export class EntryType implements ISMSREntity {
    Id: number;
    Name: string;
    IsActive: boolean;
}

export class StatusReport implements ISMSREntity {
    Id: number;
    ReportDate: string;
    ProjectId: number;
    Project: Project;
    UserId: number;
    User: User;
    Entries: StatusReportEntry[];

    constructor() {
        this.Id = 0;
        this.Entries = new Array<StatusReportEntry>();
    }
}

export class StatusReportEntry implements ISMSREntity {
    Id: number;
    Value: string;
    Notes: string;
    EntryTypeId: number;
    EntryType: EntryType;
    StatusReportId: number;
}