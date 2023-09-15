type animal = {
  name: string
  age: number
  breed: string
}

// Приведение типов с помощью as
const cat1: animal = {
  name: "Stacy",
  age: 16,
  breed: "siberian",
  voice: "meow"
} as animal
//cat.voice = ' ' будет ошибка

//нельзя использовать в реакте из зи JSX
const cat2 = <animal>{
  name: "Stacy",
  age: 16,
  breed: "siberian",
  voice: "meow"
}

//Как преобразовывать один тип обьекта в другой?

type pet = {
  name: string
  home: string
  owner: {
    firstname: string
  }
}

const myCat: pet = {
  ...cat1,
  home: "street Bruxton",
  owner: {
    firstname: "Max"
  }
} as pet

console.log(myCat)

const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
  name: animal.name,
  home,
  owner: {
    firstname: nameOwner
  }
})

const myCat3: pet = animalToPet(cat1, "street Bruxton", "Max")

console.log(myCat3)

// const n = 10
// const s: string = n.toString()
// const s2: string = String(n)

// const str = "ts"
// const num1: number = Number(str)
// const num2: number = parseInt(str)

// const is1: boolean = Boolean(str)
// const is2: boolean = !!str
