//как такой код писать в tsx, в реакт используется тип файла tsx( typescript + jsx)
//ставим запятую <T,>
//чтобы избежать ошибки, что в одном scope  одинаковые имена, можно обернуть в скобки {}
{
  const log = <T,>(val: T): T => {
    console.log(val)
    return val
  }
  log<string>("строка")
  log(5)
  // меняем на function expression
  const log2 = function <T>(val: T): T {
    console.log(val)
    return val
  }

  log2<string>("строка")
  log2<boolean>(!5)
}
