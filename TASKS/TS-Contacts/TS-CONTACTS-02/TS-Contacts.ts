type User = {
  name: string
  age: number
  group?: string
}

type Admin = {
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  {
    name: "Иван Петров",
    age: 27,
    group: "SEO-специалист"
  },
  {
    name: "Марат Aляуддинов",
    age: 20,
    group: "Музыкант"
  },
  {
    name: "Инна Иванова",
    age: 23,
    group: "Друзья"
  },
  {
    name: "Администратор",
    age: 35,
    role: "Администратор"
  },
  {
    name: "Анна Совельева",
    age: 25,
    group: "Семья"
  },
  {
    name: "Петр Давидов",
    age: 31,
    group: "Коллега"
  }
]

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`)

  if ("group" in user) {
    console.log(`Group: ${user.group}`)
  } else if ("role" in user) {
    console.log(`Role: ${user.role}`)
  }
}

console.log("Users:")
persons.forEach(logPerson)
