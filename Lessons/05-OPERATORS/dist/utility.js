"use strict";
{
    const title = ["book", "pen", "pencil"];
    const listGoods = {
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
    };
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
    const getGoods = () => fetch("https://api.com").then((response) => response.json());
}
