enum StatusStudent {
  enrolee = "enrolee",
  student = "student",
  graduate = "graduate",
  bachelor = "bachelor"
}
class Student {
  id: string =
    Math.random().toString(32).substring(2, 6) +
    Date.now().toString().substring(9)
  status: StatusStudent = StatusStudent.enrolee
  createAt: Date = new Date()
  updateAt?: Date
  name: string
  course?: string
  age?: number
  _module: number = 0 // восклицательный знак- не обращать внимание на это свойство. Второй способ решения проблемы поставить false  на "strictPropertyInitialization",можно  также поставить восклицательный знак как решение проблемы инициализации , в случае ,если не инициализировано

  // перегрузка
  constructor(name: string)
  constructor(name: string, course: string)
  constructor(name: string, age: number)
  constructor(name: string, course: string, age: number)

  constructor(name: string, courseOrAge?: string | number, age?: number) {
    this.name = name
    if (typeof courseOrAge === "string") {
      this.course = courseOrAge
      this.changeStatus(StatusStudent.student)
    }
    if (typeof courseOrAge === "number") {
      this.age = courseOrAge
    }
    if (age) {
      this.age = age
    }
  }

  set module(module: number) {
    this._module = module
    this.updateAt = new Date()
  }
  changeStatus(status: StatusStudent): void {
    this.status = status
    this.updateAt = new Date()
  }
  changeInfo(course: string): void
  changeInfo(module: number): void
  changeInfo(course: string, module: number): void
  changeInfo(courseOrModule: string | number, module?: number): void {
    if (typeof courseOrModule === "string") {
      this.course = courseOrModule
    }
    if (typeof courseOrModule === "number") {
      this.module = courseOrModule
    }
    if (module) {
      this.module = module
    }
    this.updateAt = new Date()
  }
}
const student1: Student = new Student("Petr")
student1.changeInfo("JS", 4)
console.log("student1", student1)

const student2: Student = new Student("Dmitriy", "Frontend")
student2.changeInfo("Web")
console.log("student2", student2)

const student3: Student = new Student("Artur", 18)
student3.changeInfo(2)
console.log("student3", student3)

const student4: Student = new Student("Gennadiy", "JS", 18)
student4.changeInfo(3)
console.log("student4", student4)

//const student: Student = new Student("Dmitriy", "Frontend")
//console.log("student", student)
// setTimeout(() => {
//   student.module = 1
//   student.status = StatusStudent.student
//   console.log("student", student)
// }, 2000)

// setTimeout(() => {
//   student.module = 2
//   console.log("student", student)
// }, 5000)

// setTimeout(() => {
//   student.module = 3
//   student.status = StatusStudent.graduate
//   console.log("student", student)
// }, 7500)
