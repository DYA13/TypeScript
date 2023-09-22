enum StatusStudent {
  enrolee = "enrolee",
  student = "student",
  graduate = "graduate",
  bachelor = "bachelor"
}

class Person {
  age?: number
  private id: string =
    Math.random().toString(32).substring(2, 6) +
    Date.now().toString().substring(9)
  private createAt: Date = new Date()
  protected updateAt?: Date
  constructor(name: string)
  constructor(name: string, age: number | undefined)
  constructor(public readonly name: string, age?: number | undefined) {
    if (typeof age === "number") {
      this.age = age
    }
  }
  getInfo(): string {
    if (this.age) {
      return `${this.name}, age ${this.age}`
    }
    return this.name
  }
}

//Модификаторы: public, private, protected
// Статичные методы и свойства: # свойство не будет видно снаружи  в консоле
class Student extends Person {
  static readonly school: string = "METHED" // статичное свойство
  static count: number

  status: StatusStudent = StatusStudent.enrolee

  course?: string
  _module: number = 0 // восклицательный знак- не обращать внимание на это свойство. Второй способ решения проблемы поставить false  на "strictPropertyInitialization",можно  также поставить восклицательный знак как решение проблемы инициализации , в случае ,если не инициализировано

  // перегрузка
  constructor(name: string)
  constructor(name: string, course: string)
  constructor(name: string, age: number)
  constructor(name: string, course: string, age: number)

  constructor(
    public readonly name: string,
    courseOrAge?: string | number,
    age?: number
  ) {
    let ageOrUndefined: number | undefined

    if (typeof courseOrAge === "number") {
      ageOrUndefined = courseOrAge
    }

    if (age) {
      ageOrUndefined = age
    }
    super(name, ageOrUndefined)

    if (typeof courseOrAge === "string") {
      this.course = courseOrAge
      this.changeStatus(StatusStudent.student)
    }
    Student.count++
  }
  private changeUpdateDate(): void {
    this.updateAt = new Date()
  }

  set module(module: number) {
    this._module = module
    this.changeUpdateDate()
  }
  changeStatus(status: StatusStudent): void {
    this.status = status
    this.changeUpdateDate()
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
    this.changeUpdateDate()
  }

  override getInfo(): string {
    const info = super.getInfo()
    if (this.course) {
      return ` ${info},is studying on course ${this.course}`
    }
    return info
  }
  static createStudents(list: string[], course: string): Student[] {
    return list.map((name) => new Student(name, course))
  }
  static createStudentFromPerson(person: Person): Student
  static createStudentFromPerson(person: Person, course: string): Student

  static createStudentFromPerson(person: Person, course?: string): Student {
    // реализация с тернарным оператором
    return person.age
      ? course
        ? new Student(person.name, course, person.age)
        : new Student(person.name, person.age)
      : course
      ? new Student(person.name, course)
      : new Student(person.name)

    // реализация с if
    // if (person.age) {
    //   if (course) {
    //     return new Student(person.name, course, person.age)
    //   }

    //   return new Student(person.name, person.age)
    // }
    // if (course) {
    //   return new Student(person.name, course)
    // }
    // return new Student(person.name)
  }

  // статичный блок,запустится первый
  static {
    Student.count = 0
  }
}
//console.log(Student.school)

const person1: Person = new Person("Petr", 41)
//person1.changeInfo("Web")
console.log("person", person1.getInfo())

const studentPetr: Student = Student.createStudentFromPerson(person1, "Design")
console.log("studentPetr: ", studentPetr)

// const student2: Student = new Student("Dmitriy", "Frontend", 34)
// student2.changeInfo("Web")
// console.log("student2", student2.getInfo())

// const students = Student.createStudents(["Ivan", "Alexey", "Rinat"], "React")
// console.log("students:", students)

// const student3: Student = new Student("Artur", 28)
// student3.changeInfo(2)
// console.log("student3", student3)

// const student4: Student = new Student("Gennadiy", "JS", 18)
// student4.changeInfo(3)
// console.log("student4", student4)

const student: Student = new Student("Dmitriy", "Frontend")
console.log("student", student)
setTimeout(() => {
  student.module = 1
  student.status = StatusStudent.student
  console.log("student", student)
}, 2000)

setTimeout(() => {
  student.module = 2
  console.log("student", student)
}, 5000)

setTimeout(() => {
  student.module = 3
  student.status = StatusStudent.graduate
  console.log("student", student)
}, 7500)

console.log("count:", Student.count)
