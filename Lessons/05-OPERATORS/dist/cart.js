"use strict";
//const key: KeyOfGoods = "count"
const filter = (arr, key, value) => {
    return arr.filter((item) => item[key] === value);
};
const categories = ["notebook", "e-book", "smartphone", "monitor"];
class Cart {
    constructor() {
        this.goods = [];
    }
    add(item) {
        this.goods.push(item);
    }
    get(title) {
        var _a;
        return (_a = this.goods.find((item) => item.title === title)) !== null && _a !== void 0 ? _a : null;
    }
    get TotalPrice() {
        return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
    }
}
class TechCart extends Cart {
}
const techCart = new TechCart();
techCart.add({
    title: "Monitor",
    price: 30000,
    count: 1,
    description: "Benq BL 456756",
    type: "monitor"
});
techCart.add({
    title: "Macbook",
    price: 70000,
    count: 5,
    description: "ASUS",
    type: "e-book"
});
const res = filter(techCart.goods, "type", "e-book");
console.log(res);
const goods = {
    title: "Monitor",
    price: 30000,
    count: 1,
    description: "Benq BL 456756",
    type: "monitor"
};
const goods2 = {
    title: "Macbook",
    price: 70000,
    count: 5,
    description: "ASUS",
    type: "e-book"
};
const keys = "type";
