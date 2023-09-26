"use strict";
//const arr: Array<string> = ["a", "b", "c"]
const filterArr = (arr, exclude) => arr.filter((item) => !exclude.includes(item));
const result = filterArr([1, 2, 3, 4, 5], [2, 4]);
console.log("result", result);
const response = {
    success: true,
    data: [
        {
            id: 21,
            title: "Tomatoes",
            count: 30
        },
        {
            id: 12,
            title: "Potatos",
            count: 50
        }
    ]
};
const response2 = {
    success: true,
    data: [
        {
            name: "Mark",
            post: "IT specialist"
        },
        {
            name: "Tom",
            post: "Dev"
        }
    ]
};
const response3 = {
    success: true,
    data: "The order has been processed, the number of the order №23132"
};
