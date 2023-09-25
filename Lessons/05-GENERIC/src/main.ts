const log = <T>(val: T): T => {
  console.log(val)
  return val
}
log<string>("строка")
log(5)
// если используем function or function declaration ( не стрелочные и не  function expression ), то структура меняется
function log2<T>(val: T): T {
  console.log(val)
  return val
}

log2<string>("строка")
log2<boolean>(!5)
