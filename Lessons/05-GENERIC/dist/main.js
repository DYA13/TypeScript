"use strict";
const log = (val) => {
    console.log(val);
    return val;
};
log("строка");
log(5);
// если используем function or function declaration ( не стрелочные и не  function expression ), то структура меняется
function log2(val) {
    console.log(val);
    return val;
}
log2("строка");
log2(!5);
