"use strict";
// можем передавать несколько generics
// const log = <T, B>(val: T, val2: B): T => {
//   console.log(val)
//   console.log(val2)
//   return val
// }
// log<string, number>("строка", 10)
// log(5, 15)
// если используем function or function declaration ( не стрелочные и не  function expression ), то структура меняется
// function log2<T>(val: T): T {
//   console.log(val)
//   return val
// }
// log2<string>("строка")
// log2<boolean>(!5)
// const log = <T>(val: T): T => {
//   console.log(val)
//   return val
// }
// log<string>("строка")
// log(5)
// const logFoo = (val: number | string): number | string => {
//   console.log(val)
//   return val
// }
// const c = logFoo(5)
// const d = logFoo("строка")
class HttpResponse5 {
    constructor(success, data, error) {
        this.success = success;
        if (data) {
            this.data = data;
        }
        if (error) {
            this.code = error;
        }
    }
}
const responseToken = new HttpResponse5(true, 4545665658);
const responseUser = new HttpResponse5(true, "Gennadiy");
