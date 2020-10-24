/**
 * 从后向前获取数组元素
 */

const arr = [1, 2, 3, 4]
console.log(arr.slice(-1))
console.log(arr.slice(-2))
console.log(arr.slice(-3))
console.log(arr.slice(-4))


/**
 * 短路条件句
 */
const condition = true
function dosomething() {}
// 如果没用短路语句
if(condition)
    dosomething()
// 实用短路语句
condition && dosomething()

