"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("./locale");
//function with literal types
const translate = (lang, text) => {
    // text translate
    return text;
};
translate(locale_1.LOCALE_EN, "text");
translate(locale_1.LOCALE_RU, "text");
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
