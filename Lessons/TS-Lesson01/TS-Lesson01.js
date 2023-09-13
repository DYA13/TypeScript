"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carResult = void 0;
var car = {
    brand: "BMW",
    model: "xDrive30e",
    country: "Germany",
    price: 50000,
    color: "white",
    rating: [
        ["performance", 8.0],
        ["comfort", 8.0],
        ["interior", 8.5],
        ["technology", 8.0],
        ["storage", 8.0],
        ["fuelEconomy", 6.5],
        ["value", 7.5],
        ["wildcard", 8.5]
    ]
};
var totalVerdict = function (car) {
    var sumRating = car.rating.reduce(function (acc, item) {
        console.log(acc, item[1]);
        return item[1] + acc;
    }, 0);
    var verdict = sumRating / car.rating.length;
    return verdict;
};
exports.carResult = totalVerdict(car);
