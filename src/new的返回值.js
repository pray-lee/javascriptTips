function Thing(params) {
    this.one = 1 
    this.two = 2
}

const myThing = new Thing() 
console.log(myThing);
/**
    this 指向new产生的新对象
    如果Thing不是new调用，将不会生成新对象，而且this将会指向全局对象window,这意味着：
    1.突然有两个全局变量one, two
    2.myThing现在为undefined, 因为Thing没有返回任何东西
 */

// ------------------------------------------
function Thing1() {
    this.one = 1
    this.two = 2
    return 5
}

const myThing1 = new Thing1()
console.log(myThing1);

function Thing2() {
    this.one = 1
    this.two = 2
    return {
        three: 3,
        four: 4 
    }
}
const myThing2 = new Thing2()
console.log(myThing2)
/**
    我们了解到：
    当使用new关键字调用一个函数的时候，可以使用this关键字设置参数
    使用new关键字调用一个返回原始变量的函数将不会返回指定的值，而是返回函数的实例this
    然而返回一个非原始变量像object, array或者function 将会覆盖this实例，返回这个非原始变量
 */