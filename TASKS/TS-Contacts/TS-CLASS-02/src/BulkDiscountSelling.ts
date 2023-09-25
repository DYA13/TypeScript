import Product from "./Product"
import AbstractSelling from "./AbstractSelling"

// BulkDiscountSelling производный класс от AbstractSelling, который дополнительно к полям,  product и количество товаров, принимает количество товаров для скидки.
//В getPrice, если количество единиц товара равно количеству товаров для скидки или больше то применяется скидка 10%.
class BulkDiscountSelling extends AbstractSelling {
  private bulkQuantity: number

  constructor(product: Product, quantity: number, bulkQuantity: number) {
    super(product, quantity)
    this.bulkQuantity = bulkQuantity
  }
  getPrice(): number {
    const basePrice = this.product.getPrice()
    const discountPercentage = 10 // 10% скидка
    if ((this.quantity = this.bulkQuantity)) {
      return basePrice * this.quantity * (1 - discountPercentage / 100)
    } else {
      return basePrice * this.quantity
    }
  }
}

export default BulkDiscountSelling
