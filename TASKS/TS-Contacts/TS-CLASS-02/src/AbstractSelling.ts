import Product from "./Product"

abstract class AbstractSelling {
  protected product: Product
  protected quantity: number

  constructor(product: Product, quantity: number) {
    this.product = product
    this.quantity = quantity
  }

  abstract getPrice(): number

  static compare(a: AbstractSelling, b: AbstractSelling): number {
    return b.getPrice() - a.getPrice()
  }
}

export default AbstractSelling
