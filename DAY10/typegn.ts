// types.ts

export enum Role {
    Admin = "Admin",
    User = "User",
    Manager = "Manager"
}

export enum Permission {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}

export interface Employee {
    empId: number;
    empName: string;
    department: string;
    salary: number;

    location: {
        city: string;
        state: string;
        country: string;
        pincode: string;
    };

    technologies: Object;
}

export type AdminUser = Employee & {
    permissions: Permission[];
};

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};