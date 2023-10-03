{
  interface Goods {
    id: number
    title: string
    count?: number
    readonly price: number
  }
  //делает все поля не обязательными
  type partialGoods = Partial<Goods>

  //делает все поля обязательными
  type requiredGoods = Required<Goods>

  //делает все поля  только для чтения
  type readonlyGoods = Readonly<Goods>

  //делает все поля обязательные и  только для чтения
  type requiredReadonlyGoods = Partial<Readonly<Goods>>

  const title = ["book", "pen", "pencil"] as const
  type categoryTypes = (typeof title)[number]

  type recordGoods = Record<categoryTypes, Goods>

  const listGoods: recordGoods = {
    book: {
      id: 32423454,
      price: 5000,
      title: "book"
    },
    pen: {
      id: 764587634,
      title: "pen",
      count: 15,
      price: 19809
    },
    pencil: {
      id: 764587634,
      title: "pen",
      count: 15,
      price: 19809
    }
  }

  // тип omit,в данном случае исключает id
  type omitGoods = Omit<Goods, "id">
  // тип Pick
  type pickGoods = Pick<Goods, "title" | "price">

  //   const getGoods = (title: string, price: number, count: number): Goods => {
  //     return {
  //       id: Math.floor(Math.random() * 10e8),
  //       title,
  //       price,
  //       count
  //     }
  //   }
  type goods = ReturnType<typeof getGoods>

  type parameters = Parameters<typeof getGoods>

  //   const getGoods = ({ title, price, count }: Omit<Goods, "id">): Goods => {
  //     return {
  //       id: Math.floor(Math.random() * 10e8),
  //       title,
  //       price,
  //       count
  //     }
  //   }
  //   const goodsRes = getGoods({
  //     title: "battery",
  //     price: 200,
  //     count: 200
  //   })
  //   console.log(goodsRes)

  const getGoods = (): Promise<Goods[]> =>
    fetch("https://api.com").then((response: Response) => response.json())

  type P = ReturnType<typeof getGoods>

  type R = Awaited<ReturnType<typeof getGoods>>
}
