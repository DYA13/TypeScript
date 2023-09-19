class Student {
  name: string
  course: string
  constructor(name: string, course: string) {
    this.name = name
    this.course = course
  }
}

const student: Student = new Student("Dmitriy", "Frontend")
console.log("student", student)
