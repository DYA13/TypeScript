"use strict";
const persons = [
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
];
// Type Guards functions for isAdmin and isUser
const isAdmin = (person) => person.type === "admin";
const isUser = (person) => person.type === "user";
const logPerson = (person) => {
    let information = "";
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
const filterUsers = (persons, criteria) => {
    return persons.filter((person) => {
        if (isUser(person) && person.type === "user") {
            const user = person;
            return checkCriteria(user, criteria);
        }
        if (isAdmin(person) && person.type === "admin") {
            const admin = person;
            return checkCriteria(admin, criteria);
        }
        return false;
    });
};
const checkCriteria = (entity, criteria) => {
    return Object.keys(criteria).every((fieldName) => {
        const field = fieldName;
        return entity[field] === criteria[field];
    });
};
console.log("Users of age 24:");
filterUsers(persons, {
    age: 24
}).forEach(logPerson);
