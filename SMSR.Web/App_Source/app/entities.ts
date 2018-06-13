export class Project {
    Id: number;
    Name: string;
    IsActive: boolean;
}

export class User {
    Id: number;
    DN: string;
    Name: string;
    IsAuthor: boolean;
    IsAdmin: boolean;
    IsActive: boolean;
}

export class EntryType {
    Id: number;
    Name: string;
    IsActive: boolean;
}
