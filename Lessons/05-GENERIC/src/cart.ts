interface Goods {
  title: string
  count: number
  price: number
}

abstract class Cart<T extends Goods> {
  protected goods: T[] = []
  public add(item: T): void {
    this.goods.push(item)
  }
  public get(title: string): T | null {
    return this.goods.find((item) => item.title === title) ?? null
  }

  public get TotalPrice(): number {
    return this.goods.reduce((acc, item) => acc + item.price * item.count, 0)
  }
}
interface TechGoods {
  title: string
  count: number
  price: number
  type: string
  description: string
}

class TechCart extends Cart<TechGoods> {}

const techCart = new TechCart()

techCart.add({
  title: "Monitor",
  price: 30000,
  count: 1,
  description: "Benq BL 456756",
  type: "monitor"
})

techCart.add({
  title: "Macbook",
  price: 70000,
  count: 5,
  description: "ASUS",
  type: "macbook"
})

console.log(techCart.TotalPrice)
console.log(techCart.get("Macbook"))

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
