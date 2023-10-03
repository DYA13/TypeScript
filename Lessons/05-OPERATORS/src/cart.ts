interface Goods {
  title: string
  count: number
  price: number
}

type KeyOfGoods = keyof Goods
//const key: KeyOfGoods = "count"

const filter = <T, K extends keyof T>(arr: T[], key: K, value: T[K]) => {
  return arr.filter((item: T) => item[key] === value)
}
const categories = ["notebook", "e-book", "smartphone", "monitor"] as const

type categoryTypes = (typeof categories)[number]

abstract class Cart<T extends Goods> {
  public goods: T[] = []
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
  type: categoryTypes
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
  type: "e-book"
})
const res = filter(techCart.goods, "type", "e-book")
console.log(res)

const goods: TechCart["goods"][number] = {
  title: "Monitor",
  price: 30000,
  count: 1,
  description: "Benq BL 456756",
  type: "monitor"
}

const goods2: typeof goods = {
  title: "Macbook",
  price: 70000,
  count: 5,
  description: "ASUS",
  type: "e-book"
}

type keyOfGoods = keyof typeof goods

const keys: keyOfGoods = "type"
