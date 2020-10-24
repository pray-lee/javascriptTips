/**
    我们都知道 JavasSript 是弱类型的，并且当我们使用 == 作比较时，在一些情况下由于类型转换或者说“把两个操作数中的一个转换成另一个，然后在比较”，会出现意想不到的结果。
*/
console.log(0 == '');
console.log(null == undefined)
console.log([1] == true);

/**
因此 JavaScript 中给我们提供了全等操作符 ===, 它比不全等操作符更加严格并且不会发生类型转换。但是用 === 来进行比较并不是最好的解决方案。你可能会得到:
 */
console.log(NaN === NaN); // false

/**
    好消息是 ES6 中提供了新的 Object.is() 方法，它具有 === 的一些特点，而且更好、更精确，在一些特殊案例中表现的很好：
 */
console.log(Object.is(0, '')) // false
console.log(Object.is(null, undefined)); // false
console.log(Object.is([1], true)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is({}, {})) // false