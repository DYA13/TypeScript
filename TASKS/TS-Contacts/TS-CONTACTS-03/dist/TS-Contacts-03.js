"use strict";
const persons = [
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
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
    if ("group" in user) {
        console.log(`Group: ${user.group}`);
    }
    if ("role" in user) {
        console.log(`Role: ${user.role}`);
    }
};
console.log("Users:");
persons.forEach(logPerson);
