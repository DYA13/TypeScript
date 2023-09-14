//Redux(you might use these constants when dispatching actions or handling state related to language preferences.)
// export const LOCALE: {
//   readonly RU: "ru-RU"
//   readonly EN: "en-US"
// } = {
//   RU: "ru-RU",
//   EN: "en-US"
// }

// export type localeOMG = (typeof LOCALE)[keyof typeof LOCALE]

export enum Locale {
  RU = "ru-RU",
  EN = "en-US"
}
