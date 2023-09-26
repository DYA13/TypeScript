interface Goods {
  title: string
  count: number
}
const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
  const goods = arr.find((item) => item.title === title)
  return goods?.count ?? 0
}

const goods: Goods[] = [
  { title: "macbook", count: 10 },
  { title: "airpad", count: 15 },
  { title: "watch", count: 20 }
]

const countP = getCountGoods(goods, "airpad")
console.log("countP: ", countP)
const countN = getCountGoods(goods, "vacuum cleaner")
console.log("countN: ", countN)
