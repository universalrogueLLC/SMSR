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
