interface User {
  type: "user"
  name: string
  age: number
  group: string
}

interface Admin {
  type: "admin"
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  {
    type: "admin",
    name: "Иван Петров",
    age: 27,
    role: "Administrator"
  },
  {
    type: "user",
    name: "Марат Aляуддинов",
    age: 20,
    group: "музыкант"
  },
  {
    type: "user",
    name: "Екатерина Попова",
    age: 24,
    group: "дизайнер сайтов"
  },
  {
    type: "admin",
    name: "Аркадий Паравозов",
    age: 55,
    role: "Системный администратор"
  },
  {
    type: "user",
    name: "Даня Поперечный",
    age: 28,
    group: "Комик"
  },
  {
    type: "admin",
    name: "Олег",
    age: 44,
    role: "Модератор"
  }
]
// Type Guards functions for isAdmin and isUser
const isAdmin = (person: Person): person is Admin => person.type === "admin"
const isUser = (person: Person): person is User => person.type === "user"

const logPerson = (person: Person) => {
  let information = ""

  if (isAdmin(person)) {
    information = person.role
  }

  if (isUser(person)) {
    information = person.group
  }

  console.log(` - ${person.name}, ${person.age}, ${information}`)
}

const filterUsers = (
  persons: Person[],
  criteria: Partial<User | Admin>
): (User | Admin)[] => {
  return persons.filter((person) => {
    if (isUser(person) && person.type === "user") {
      const user = person as User
      return checkCriteria(user, criteria)
    }

    if (isAdmin(person) && person.type === "admin") {
      const admin = person as Admin
      return checkCriteria(admin, criteria)
    }

    return false
  })
}

const checkCriteria = <T extends User | Admin>(
  entity: T,
  criteria: Partial<T>
): boolean => {
  return Object.keys(criteria).every((fieldName) => {
    const field = fieldName as keyof T
    return entity[field] === criteria[field]
  })
}

console.log("Users of age 24:")

filterUsers(persons, {
  age: 24
}).forEach(logPerson)
