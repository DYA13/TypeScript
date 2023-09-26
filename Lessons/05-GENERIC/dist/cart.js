"use strict";
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
    type: "macbook"
});
console.log(techCart.TotalPrice);
console.log(techCart.get("Macbook"));
// const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
//   const goods = arr.find((item) => item.title === title)
//   return goods?.count ?? 0
// }
// const goods: Goods[] = [
//   { title: "macbook", count: 10 },
//   { title: "airpad", count: 15 },
//   { title: "watch", count: 20 }
// ]
// const countP = getCountGoods(goods, "airpad")
// console.log("countP: ", countP)
// const countN = getCountGoods(goods, "vacuum cleaner")
// console.log("countN: ", countN)
