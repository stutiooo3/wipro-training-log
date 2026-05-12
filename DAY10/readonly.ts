// const product = {
//     id: 101,
//     name: "Laptop",
//     price: 50000
// } as const;

// // product.name = "Mobile"
// console.log(product);

interface Course {
    readonly courseName: string;
    duration: number;
}

const course1: Readonly<Course> = {
    courseName: "TypeScript",
    duration: 30
}

const course2: Course = {
    courseName: "JavaScript",
    duration: 45
}

// course1.duration = 60;

console.log(course1);
console.log(course2);

const marks: ReadonlyArray<number> = [85, 90, 95];

console.log(marks[0]);

/* readonly - property value cannot be changed
Readonly<T> - makes all properties readonly
ReadonlyArray<T> - array elements cannot be modified
as const - makes object properties readonly and fixed values
Useful for immutable data protection*/