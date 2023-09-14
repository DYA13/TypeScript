"use strict";
//Redux(you might use these constants when dispatching actions or handling state related to language preferences.)
// export const LOCALE: {
//   readonly RU: "ru-RU"
//   readonly EN: "en-US"
// } = {
//   RU: "ru-RU",
//   EN: "en-US"
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
// export type localeOMG = (typeof LOCALE)[keyof typeof LOCALE]
var Locale;
(function (Locale) {
    Locale["RU"] = "ru-RU";
    Locale["EN"] = "en-US";
})(Locale || (exports.Locale = Locale = {}));
