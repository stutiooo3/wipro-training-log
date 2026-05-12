enum Role {
    Admin = "Admin",
    User = "User",
    Manager = "Manager"
}

enum Permission {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}

type Employee = {
    id: number;
    name: string;
    role: Role;
};

type AdminUser = Employee & {
    permissions: Permission[];
};

let employees: (Employee | AdminUser)[] = [];

function addEmployee(emp: Employee | AdminUser): void {
    employees.push(emp);
}

function showEmployee(index: number): void {
    console.log(employees[index]);
}

addEmployee({
    id: 1,
    name: "Stuti",
    role: Role.User
});

addEmployee({
    id: 2,
    name: "Rahul",
    role: Role.Manager
});

addEmployee({
    id: 3,
    name: "Aarav",
    role: Role.Admin,
    permissions: [Permission.Read, Permission.Write]
});

showEmployee(0);
showEmployee(1);
showEmployee(2);

const car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};

type CarKeys = keyof typeof car;

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getValue(car, "brand"));
console.log(getValue(car, "model"));
console.log(getValue(car, "year"));