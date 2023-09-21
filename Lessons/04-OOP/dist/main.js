"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrolee"] = "enrolee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
//Модификаторы: public, private, protected
// Статичные методы и свойства: # свойство не будет видно снаружи  в консоле
class Student {
    name;
    static school = "METHED"; // статичное свойство
    static count;
    id = Math.random().toString(32).substring(2, 6) +
        Date.now().toString().substring(9);
    status = StatusStudent.enrolee;
    createAt = new Date();
    updateAt;
    course;
    age;
    _module = 0; // восклицательный знак- не обращать внимание на это свойство. Второй способ решения проблемы поставить false  на "strictPropertyInitialization",можно  также поставить восклицательный знак как решение проблемы инициализации , в случае ,если не инициализировано
    constructor(name, courseOrAge, age) {
        this.name = name;
        if (typeof courseOrAge === "string") {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        if (typeof courseOrAge === "number") {
            this.age = courseOrAge;
        }
        if (age) {
            this.age = age;
        }
        Student.count++;
    }
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    set module(module) {
        this._module = module;
        this.changeUpdateDate();
    }
    changeStatus(status) {
        this.status = status;
        this.changeUpdateDate();
    }
    changeInfo(courseOrModule, module) {
        if (typeof courseOrModule === "string") {
            this.course = courseOrModule;
        }
        if (typeof courseOrModule === "number") {
            this.module = courseOrModule;
        }
        if (module) {
            this.module = module;
        }
        this.changeUpdateDate();
    }
    static createStudents(list, course) {
        return list.map((name) => new Student(name, course));
    }
    // статичный блок,запустится первый
    static {
        Student.count = 0;
    }
}
console.log(Student.school);
const students = Student.createStudents(["Ivan", "Alexey", "Rinat"], "React");
console.log("students:", students);
const student1 = new Student("Petr");
student1.changeInfo("JS", 4);
console.log("student1", student1);
const student2 = new Student("Dmitriy", "Frontend");
student2.changeInfo("Web");
console.log("student2", student2);
const student3 = new Student("Artur", 18);
student3.changeInfo(2);
console.log("student3", student3);
const student4 = new Student("Gennadiy", "JS", 18);
student4.changeInfo(3);
console.log("student4", student4);
const student = new Student("Dmitriy", "Frontend");
console.log("student", student);
setTimeout(() => {
    student.module = 1;
    student.status = StatusStudent.student;
    console.log("student", student);
}, 2000);
setTimeout(() => {
    student.module = 2;
    console.log("student", student);
}, 5000);
setTimeout(() => {
    student.module = 3;
    student.status = StatusStudent.graduate;
    console.log("student", student);
}, 7500);
console.log("count:", Student.count);
