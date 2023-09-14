let count: number | void

count = 1

let obj: {} | null = null

obj = {
  name: "Max",
  age: 35
}

const logger = (id: string | number): void => {
  if (typeof id === "string") {
    console.log(id)
  }
  return undefined
}
const loggerObj = (obj: { a: number } | { b: number }) => {
  if ("a" in obj) {
    obj.a
  } else {
    obj.b
  }
}

const loggerError = (err: string): never => {
  throw new Error(err)
}
const hole: null = null
const vacuum: undefined = undefined
const vacuum2: void = undefined
