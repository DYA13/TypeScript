//const arr: Array<string> = ["a", "b", "c"]

type filterArray = <T>(arr: T[], exclude: T[]) => T[]

const filterArr: filterArray = (arr, exclude) =>
  arr.filter((item) => !exclude.includes(item))

const result = filterArr<number>([1, 2, 3, 4, 5], [2, 4])
console.log("result", result)

interface HttpResponseError {
  success: false
  error: string
}

interface HttpResponseSuccess<T> {
  success: true
  data: T
}

type HttpResponse<T> = HttpResponseSuccess<T> | HttpResponseError

interface product {
  id: number
  title: string
  count: number
}
interface person {
  name: string
  post: string
}

const response: HttpResponse<product[]> = {
  success: true,
  data: [
    {
      id: 21,
      title: "Tomatoes",
      count: 30
    },

    {
      id: 12,
      title: "Potatos",
      count: 50
    }
  ]
}

const response2: HttpResponse<person[]> = {
  success: true,
  data: [
    {
      name: "Mark",
      post: "IT specialist"
    },
    {
      name: "Tom",
      post: "Dev"
    }
  ]
}

const response3: HttpResponse<string> = {
  success: true,
  data: "The order has been processed, the number of the order №23132"
}
