import Product from "./Product"
import AbstractSelling from "./AbstractSelling"
import FixedDiscountSelling from "./FixedDiscountSelling"
import BulkDiscountSelling from "./BulkDiscountSelling"

const products: Product[] = [
  new Product("Product A", 100),
  new Product("Product B", 200),
  new Product("Product", 150),
  new Product("Product D", 120)
]

const sellings: AbstractSelling[] = [
  new FixedDiscountSelling(products[0], 3),
  new FixedDiscountSelling(products[1], 4),
  new BulkDiscountSelling(products[2], 5, 3),
  new BulkDiscountSelling(products[3], 5, 3)
]
// Сортируем объекты по убыванию стоимости
sellings.sort(AbstractSelling.compare)

console.log("Sorted items:")
for (const selling of sellings) {
  console.log(`${selling.getPrice().toFixed(2)} - ${selling.getProductName()}`)
}
