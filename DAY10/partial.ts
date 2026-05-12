interface Employee {
    empId: number;
    empName: string;
    department: string;
    salary: number;
    location: {
        city: string;
        state: string;
        country: string;
        pincode: string;
    },
    technologies: Object;
}

const emp1: Employee = {
    empId: 101,
    empName: "Rahul",
    department: "IT",
    salary: 50000,
    location: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: "400001"
    },
    technologies: {
        frontend: {
            react: "Intermediate"
        }
    }
}

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
}

function deepMerge(target: any, source: any) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }

    return { ...target, ...source };
}

function updateEmployee(
    oldEmployee: Employee,
    updates: Partial<Omit<Employee, "empId">>
) {
    return { ...oldEmployee, ...updates };
}

const updatedEmp = updateEmployee(emp1, {
    salary: 65000,
    department: "Development"
});

console.log(updatedEmp);

const changes: DeepPartial<Employee> = {
    location: {
        country: "Canada"
    }
}

const finalEmp = deepMerge(emp1, {
    location: {
        country: "Canada",
        pincode: "500100"
    },
    technologies: {
        frontend: {
            react: "Advanced"
        }
    }
});

// console.log(finalEmp);

/* Partial<T> - makes all properties optional
Omit<T, K> - removes selected properties
DeepPartial<T> - makes nested properties optional
deepMerge() - updates nested objects
updateEmployee() - updates only selected fields except empId*/