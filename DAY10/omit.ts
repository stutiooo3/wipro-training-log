interface Student {
    rollNo: number;
    name: string;
    course: string;
    marks: number;
}

type StudentPreview = Omit<Student, "course" | "marks">

const student1: StudentPreview = {
    rollNo: 101,
    name: "Aditi"
}

// student1.course;
// student1.marks;

/* Omit is used to remove properties from an interface/type
StudentPreview contains only:
rollNo */
