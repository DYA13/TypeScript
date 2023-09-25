"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Базовый класс AbstractSelling, описывающий продажу товара.
class AbstractSelling {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    //compare(AbstractSelling) — сравнивает покупки по убыванию стоимости.
    //Метод принимает один объект продукта и сравнивает его с ценой текущего товара
    static compare(a, b) {
        return b.getPrice() - a.getPrice();
    }
}
exports.default = AbstractSelling;
