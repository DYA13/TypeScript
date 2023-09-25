"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
const FixedDiscountSelling_1 = __importDefault(require("./FixedDiscountSelling"));
const BulkDiscountSelling_1 = __importDefault(require("./BulkDiscountSelling"));
const products = [
    new Product_1.default("Product A", 100),
    new Product_1.default("Product B", 200),
    new Product_1.default("Product", 150),
    new Product_1.default("Product D", 120)
];
const sellings = [
    new FixedDiscountSelling_1.default(products[0], 3),
    new FixedDiscountSelling_1.default(products[1], 4),
    new BulkDiscountSelling_1.default(products[2], 5, 3),
    new BulkDiscountSelling_1.default(products[3], 5, 3)
];
// Сортируем объекты по убыванию стоимости
sellings.sort(AbstractSelling_1.default.compare);
console.log("Sorted items:");
for (const selling of sellings) {
    console.log(`${selling.getPrice().toFixed(2)} - ${selling.getProductName()}`);
}
