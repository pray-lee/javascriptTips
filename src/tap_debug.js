/**
    tap是一个可以用来快速调用、链式调用、匿名函数，还可以打印任何你想打印的东西的函数
 */
 function tap(x, fn = x => x) {
    console.log(fn(x))
    return x
 }

const result = tap(3, x => x + 2)
 console.log(result)