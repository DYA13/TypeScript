import { LOCALE_EN, LOCALE_RU } from "./locale"

//function with literal types
const translate = (lang: "ru-RU" | "en-US", text: string): string => {
  // text translate
  return text
}
translate(LOCALE_EN, "text")
translate(LOCALE_RU, "text")

// {
//   type httpMethod = "GET" | "POST"
//   const apiService = (url: string, method: httpMethod) => fetch(url, { method })

//   //const method = "POST"
//   let method: "POST" = "POST"

//   const obj: { method: "POST" } = {
//     method: "POST"
//   }
//   apiService("https://site.com", obj.method)
// }
