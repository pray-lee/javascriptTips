/**
    迭代一个空数组
 */

 // JavaScript 中直接创建的数组是松散的，以至于会有很多坑。试着用数组的构造方法创建一个数组:
const arr = new Array(4)
console.log(arr) // [,,,]

// 如何解决这个问题?
const arr1 = Array.apply(null, new Array(4))
console.log(arr1) // [undefined, undefined, undefined, undefined]
const copyArr1 = arr1.map((elem, index) => index)
console.log(copyArr1, 'copyArr1') // [undefined, undefined, undefined, undefined]

/**
 * 给方法传递一个空参数
 *
 * 如果你想调用一个方法，并不填其中的一个参数时，JavaScript 就会报错。
 * method('parameter1', ,'parameter2')
 * Uncaught SyntaxError: Unexpected token
 * 常用的解决方案是传递null 或者 undefined
 * method('parameter1', null, 'parameter2')
 * method('parameter1', undefined, 'parameter2')
 *
 *
 * 解决方案：
 * method(...['parameter1', ,'parameter2'])
 */

/**
 * 数组去重
 */
const arr2 = [...new Set([1,2,3,3])]
console.log(arr2, 'arr2')

