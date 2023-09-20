class Student {
  name: string
  course: string
  _module: number

  constructor(name: string, course: string) {
    this.name = name
    this.course = course
  }
  get info(): string {
    return `${this.name} is studying on the course ${this.course}`
  }
  set module(module: number) {
    this._module = module
  }
}

const student: Student = new Student("Dmitriy", "Frontend")
console.log("student", student)

console.log(student.info)
