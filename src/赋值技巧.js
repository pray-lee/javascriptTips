/**
    赋值是很常见的。有时候打字对于我们这些“懒惰的程序员”来说是很费时间的。 所以，我们可以使用一些小把戏来使我们的代码更清楚更简单。
 */

 // -------------++ 与 -- 操作符-----------------
let a = 2
let b = a++
console.log(a, b)
/**
 a++ 做了如下工作：
    1. 返回a的值
    2. a增加1
如果想让值先增加呢？
 */
 let c = 2
 let d = ++c
 console.log(c, d)

//  -------------if-else (三元运算符)----------------
let newValue
if(1)
    newValue = 2
else
    newValue = 3

// 三元
let newValue1 = 1 ? 2 : 3

// ---------------------检测Null, Undefined, 空----------------------------
let variable = '1'
if(variable !== null || variable !== undefined || variable !== '') {
    var variable2 = variable
}
// 简便写法
var variable2 = variable || ''
// p.s 如果variable是一个数字，则先检查是否为0

// -------------------对象数组表示法----------------------
// 不要用:        
var arr = new Array()
arr[0] = 'myString1'
arr[1] = 'myString2'
// 使用
var arr = ['myString1', 'myString2']















