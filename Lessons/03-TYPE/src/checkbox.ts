//const checkbox = <HTMLInputElement>document.querySelector("checkbox")
//const checkbox = document.querySelector("checkbox") as HTMLInputElement // не безопасно

const checkbox = document.querySelector("checkbox")

const isHTMLInputElement = (
  element: HTMLElement | null
): element is HTMLInputElement => {
  if (element instanceof HTMLInputElement) {
    return true
  } else {
    return false
  }
}
