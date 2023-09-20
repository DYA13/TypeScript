"use strict";
class Student {
    name;
    course;
    _module = 1; // восклицательный знак- не обращать внимание на это свойство. Второй способ решения проблемы поставить false  на "strictPropertyInitialization",можно  также поставить восклицательный знак как решение проблемы инициализации , в случае ,если не инициализировано
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    get info() {
        return `${this.name} is studying on the course ${this.course}, on the module ${this._module}`;
    }
    set module(module) {
        this._module = module;
    }
}
const student = new Student("Dmitriy", "Frontend");
console.log("student", student);
console.log(student.info);
