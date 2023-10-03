function main() {
  interface User {
    name: string
    age: number
    group?: string
  }

  interface Admin {
    name: string
    age: number
    role: string
  }

  type Person = User | Admin

  const persons: Person[] = [
    {
      name: "Ivan Petrov",
      age: 27,
      group: "SEO-specialist"
    },
    {
      name: "Marat Alyautdinov",
      age: 20,
      group: "Musician"
    },
    {
      name: "Inna Ivanova",
      age: 23,
      group: "Friends"
    },
    {
      name: "Administrator",
      age: 35,
      role: "Administrator"
    },
    {
      name: "Anna Sovelyeva",
      age: 25,
      group: "Family"
    },
    {
      name: "Petr Davidov",
      age: 31,
      group: "Colleague"
    }
  ]

  const logPerson = (user: Person) => {
    console.log(`${user.name}, ${user.age}`)

    if ("group" in user) {
      console.log(`Group: ${user.group}`)
    }

    if ("role" in user) {
      console.log(`Role: ${user.role}`)
    }
  }

  console.log("Users:")
  const users: User[] = persons.filter((person) => "group" in person) as User[]
  users.forEach(logPerson)

  console.log("Admins:")
  const admins: Admin[] = persons.filter(
    (person) => "role" in person
  ) as Admin[]
  admins.forEach(logPerson)
}

main()
