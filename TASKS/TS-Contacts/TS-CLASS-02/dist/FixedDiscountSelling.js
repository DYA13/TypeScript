"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
//производный класс от AbstractSelling, в котором продажа товара осуществляется с точной скидкой от цены товара размер скидки 10$.
class FixedDiscountSelling extends AbstractSelling_1.default {
    constructor(product, quantity) {
        super(product, quantity);
    }
    getPrice() {
        const basePrice = this.product.getPrice();
        const discount = 10;
        return (basePrice - discount) * this.quantity;
    }
}
exports.default = FixedDiscountSelling;
