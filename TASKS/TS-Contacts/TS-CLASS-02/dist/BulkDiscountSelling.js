"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
// BulkDiscountSelling производный класс от AbstractSelling, который дополнительно к полям,  product и количество товаров, принимает количество товаров для скидки.
//В getPrice, если количество единиц товара равно количеству товаров для скидки или больше то применяется скидка 10%.
class BulkDiscountSelling extends AbstractSelling_1.default {
    bulkQuantity;
    constructor(product, quantity, bulkQuantity) {
        super(product, quantity);
        this.bulkQuantity = bulkQuantity;
    }
    getPrice() {
        const basePrice = this.product.getPrice();
        const discountPercentage = 10; // 10% скидка
        if ((this.quantity = this.bulkQuantity)) {
            return basePrice * this.quantity * (1 - discountPercentage / 100);
        }
        else {
            return basePrice * this.quantity;
        }
    }
}
exports.default = BulkDiscountSelling;
