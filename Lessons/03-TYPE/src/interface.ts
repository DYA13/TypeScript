// type Animal = {
//   name: string
// }

// const cat: Animal = {
//   name: "Stacy"
// }

// console.log(cat)

//Перепишем на interface- альтернативное описание обьекта, интерфейс описывает только обьекты
// Для интерфейсов обязательны фигурные скобки

interface Animal {
  name: string
  age: number
}
interface Pet {
  name: string
  age: number
}

interface Genius {
  family: string
  breed: string
}
type Zoo = Animal | Pet

interface AnimalWithGenius extends Animal, Genius {
  id: number
}

const cat: AnimalWithGenius = {
  id: 24,
  family: "felidae",
  name: "Stacy",
  age: 15,
  breed: "siberian cat"
}

console.log(cat)
