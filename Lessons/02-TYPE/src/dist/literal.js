"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("./locale");
//function with literal types
const translate = (lang, text) => {
    // text translate
    return text;
};
translate(locale_1.Locale.EN, "text");
translate(locale_1.Locale.RU, "text");
console.log("moderator" /* TypeUser["moderator"] */);
const res = {
    message: "Good Luck!",
    statusCode: "success" /* statusCode.SUCCESS */
};
if (res.statusCode === "process" /* statusCode.PROCESS */) {
    //preloader
}
if (res.statusCode === "success" /* statusCode.SUCCESS */) {
    //render
}
if (res.statusCode === "failed" /* statusCode.FAILED */) {
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
