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
// Функция для определения, является ли пользователь администратором
const isAdmin = (user) => {
    return user.role !== undefined;
};
// Функция для определения, является ли пользователь обычным пользователем
const isUser = (user) => {
    return user.group !== undefined;
};
// Функция для определения типа пользователя
const getUserType = (user) => {
    if ("group" in user) {
        return "User";
    }
    else if ("role" in user) {
        return "Admin";
    }
    else {
        return "Unknown";
    }
};
// Функция для вывода информации о пользователе или администраторе
const logPerson = (user) => {
    const userType = getUserType(user);
    console.log(`Type: ${userType}`);
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
