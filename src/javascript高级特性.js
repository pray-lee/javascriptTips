/**
 * defineProperty
 * */

var a = {}
Object.defineProperty(a, 'readonly', {
    value: 15,
    writable: false
})
a.readonly = 20
console.log(a.readonly) // 15
