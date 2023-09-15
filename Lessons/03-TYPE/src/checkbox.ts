//const checkbox = <HTMLInputElement>document.querySelector("checkbox")
//const checkbox = document.querySelector("checkbox") as HTMLInputElement // не безопасно

const checkbox = document.querySelector("checkbox")

// Функция Typeguard

const isHTMLInputElement = (
  element: HTMLElement | null
): element is HTMLInputElement => {
  if (element instanceof HTMLInputElement) {
    return true
  } else {
    return false
  }
}

// Функция Typeguard
const isNumber = (value: unknown): value is number => typeof value === "number"

const format = (value: string | number): string => {
  if (isNumber(value)) {
    return value.toFixed(2)
  } else {
    return parseFloat(value).toFixed(2)
  }
}

// Более короткий вариант
// const isHTMLInputElement =(
//     element: HTMLElement| null,
// ): element is HTMLInputElement=> element instanceof HTMLInputElement
