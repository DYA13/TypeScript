"use strict";
let count;
count = 1;
let obj = null;
obj = {
    name: "Max",
    age: 35
};
const logger = (id) => {
    if (typeof id === "string") {
        console.log(id);
    }
    return undefined;
};
const loggerObj = (obj) => {
    if ("a" in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
};
const loggerError = (err) => {
    throw new Error(err);
};
const hole = null;
const vacuum = undefined;
const vacuum2 = undefined;
