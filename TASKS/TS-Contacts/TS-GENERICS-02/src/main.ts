//Создать абстрактный класс Users, который сожержит список пользователей userList
abstract class Users {
  protected userList: {
    id: number
    firstname: string
    surname: string
    age: number
  }[] = []
  //add добавляет пользователя в список userList
  add(user: {
    id: number
    firstname: string
    surname: string
    age: number
  }): void {
    this.userList.push(user)
  }
  //remove удаляет по id из списка userList и возвращает булево значение true если пользователь был удален и false если пользователь не был найден
  remove(id: number): boolean {
    const index = this.userList.findIndex((user) => user.id === id)
    if (index !== -1) {
      this.userList.splice(index, 1)
      return true
    }
    return false
  }
  //get возвращает пользователя по id или null если пользователь не был найден
  get(
    id: number
  ): { id: number; firstname: string; surname: string; age: number } | null {
    const user = this.userList.find((u) => u.id === id)
    return user || null
  }
  // метод sorted который возвращает отсортированный список userList
  //Метод принимает один параметр, тип сортировки, по возрастанию или по убыванию, по умолчанию значение по возрастанию

  sorted(
    order: "по возрастанию" | "по убыванию"
  ): { id: number; firstname: string; surname: string; age: number }[] {
    const sortedList = [...this.userList]

    if (order === "по возрастанию") {
      sortedList.sort((a, b) => a.id - b.id)
    } else {
      sortedList.sort((a, b) => b.id - a.id)
    }
    return sortedList
  }
}
//создать два класса наследуя Users , Students и Employees
//у студентов обязательные поля  year: номер курса , specialty: специальность
class Students extends Users {
  year: number
  speciality: string

  constructor(
    id: number,
    firstname: string,
    surname: string,
    age: number,
    year: number,
    speciality: string
  ) {
    super()
    this.year = year
    this.speciality = speciality
    this.add({ id, firstname, surname, age })
  }
}
// у сотрудников post: должность
class Employees extends Users {
  post: string
  constructor(
    id: number,
    firstname: string,
    surname: string,
    age: number,
    post: string
  ) {
    super()
    this.post = post
    this.add({ id, firstname, surname, age })
  }
}
//добавьте 2 сотрудника и 5 студентов
const students = [
  new Students(1, "Ivan", "Ivanov", 20, 2, "Computer Science"),
  new Students(1, "Petr", "Petrov", 24, 5, "Math"),
  new Students(1, "Maria", "Sidorova", 33, 1, "History"),
  new Students(1, "Tatyana", "Smirnova", 56, 7, "Chemistry"),
  new Students(1, "Alexey", "Medvedev", 30, 9, "Phisics")
]

const employees = [
  new Employees(101, "Anna", "Zaitseva", 45, "Teacher"),
  new Employees(50, "Dmitriy", "Kozlov", 50, "Head of the department")
]

const sortedStudents = students[0].sorted("по возрастанию")
console.log("Sorted Students (По возрастанию):", sortedStudents)

const sortedEmployees = employees[0].sorted("по убыванию")
console.log("Sorted Employees (По убыванию):", sortedEmployees)
