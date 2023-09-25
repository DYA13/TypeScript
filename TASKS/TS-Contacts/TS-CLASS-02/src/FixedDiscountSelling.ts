import Product from "./Product"
import AbstractSelling from "./AbstractSelling"

//производный класс от AbstractSelling, в котором продажа товара осуществляется с точной скидкой от цены товара размер скидки 10$.
class FixedDiscountSelling extends AbstractSelling {
  constructor(product: Product, quantity: number) {
    super(product, quantity)
  }
  getPrice(): number {
    const basePrice = this.product.getPrice()
    const discount = 10
    return (basePrice - discount) * this.quantity
  }
}

export default FixedDiscountSelling
