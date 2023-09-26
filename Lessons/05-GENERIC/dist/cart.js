"use strict";
const getCountGoods = (arr, title) => {
    var _a;
    const goods = arr.find((item) => item.title === title);
    return (_a = goods === null || goods === void 0 ? void 0 : goods.count) !== null && _a !== void 0 ? _a : 0;
};
const goods = [
    { title: "macbook", count: 10 },
    { title: "airpad", count: 15 },
    { title: "watch", count: 20 }
];
const countP = getCountGoods(goods, "airpad");
console.log("countP: ", countP);
const countN = getCountGoods(goods, "vacuum cleaner");
console.log("countN: ", countN);
