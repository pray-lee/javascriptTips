console.log(Math.max(1,2,3,4))
console.log(Math.min(1,2,3,4))


// 这些函数对于数字组成的数组是不能用的。但是有一些类似的方法

const numbers = [1, 2, 3, 4]
console.log(Math.max.apply(null, numbers))
console.log(Math.min.apply(null, numbers))

// es2015实现类似Math.max.apply的效果

const numbers1 = [1, 2, 3, 4]
console.log(Math.max(...numbers1))
console.log(Math.min(...numbers1))

