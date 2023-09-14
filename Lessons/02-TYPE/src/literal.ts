import { Locale } from "./locale"

//function with literal types
const translate = (lang: Locale, text: string): string => {
  // text translate
  return text
}
translate(Locale.EN, "text")
translate(Locale.RU, "text")

//console.log(Locale)

const enum TypeUser {
  admin = "admin",
  moderator = "moderator",
  user = "user"
}

console.log(TypeUser["moderator"])

const enum statusCode {
  SUCCESS = "success",
  PROCESS = "process",
  FAILED = "failed"
}

const res = {
  message: "Good Luck!",
  statusCode: statusCode.SUCCESS
}

if (res.statusCode === statusCode.PROCESS) {
  //preloader
}
if (res.statusCode === statusCode.SUCCESS) {
  //render
}
if (res.statusCode === statusCode.FAILED) {
  //err
}

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
