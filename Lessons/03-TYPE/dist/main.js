"use strict";
// Приведение типов с помощью as
const cat1 = {
    name: "Stacy",
    age: 16,
    breed: "siberian",
    voice: "meow"
};
//cat.voice = ' ' будет ошибка
//нельзя использовать в реакте из зи JSX
const cat2 = {
    name: "Stacy",
    age: 16,
    breed: "siberian",
    voice: "meow"
};
const myCat = {
    ...cat1,
    home: "street Bruxton",
    owner: {
        firstname: "Max"
    }
};
console.log(myCat);
const animalToPet = (animal, home, nameOwner) => ({
    name: animal.name,
    home,
    owner: {
        firstname: nameOwner
    }
});
const myCat3 = animalToPet(cat1, "street Bruxton", "Max");
console.log(myCat3);
// const n = 10
// const s: string = n.toString()
// const s2: string = String(n)
// const str = "ts"
// const num1: number = Number(str)
// const num2: number = parseInt(str)
// const is1: boolean = Boolean(str)
// const is2: boolean = !!str
