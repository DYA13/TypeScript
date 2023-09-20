"use strict";
class Student {
    name;
    course;
    _module;
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    get info() {
        return `${this.name} is studying on the course ${this.course}`;
    }
    set module(module) {
        this._module = module;
    }
}
const student = new Student("Dmitriy", "Frontend");
console.log("student", student);
console.log(student.info);
