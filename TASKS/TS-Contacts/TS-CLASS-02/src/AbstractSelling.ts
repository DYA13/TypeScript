import Product from "./Product"

//Базовый класс AbstractSelling, описывающий продажу товара.
abstract class AbstractSelling {
  protected product: Product
  protected quantity: number

  constructor(product: Product, quantity: number) {
    this.product = product
    this.quantity = quantity
  }
  //getPrice() — стоимость покупки, абстрактный метод;
  abstract getPrice(): number

  //compare(AbstractSelling) — сравнивает покупки по убыванию стоимости.
  //Метод принимает один объект продукта и сравнивает его с ценой текущего товара
  static compare(a: AbstractSelling, b: AbstractSelling): number {
    return b.getPrice() - a.getPrice()
  }
}

export default AbstractSelling
