/**
 * 理论上，Javascript通过值传递，它既不是值传递也不是引用传递，具体取决于他的真实场景
 */

// eg1
let me = {
    'partOf': 'A Team'
}

function myTeam(me) {
    me = {
        'belongsTo': 'A Group'
    }
}
myTeam(me)
console.log(me)

/**
 * 在上面的实例里myTeam被调用的时候，JavaScript 传递me对象的引用值，因为它是一个对象。而且调用本身建立了同一个对象的两个独立的引用，（虽然在这里的的命名都是相同的，比如me, 这有些无调行，而且给我们一个这是单个引用的印象）因此，引用变量本身是独立的。
 * 当我们定义了一个新的对象，我们完全改变了myTeam函数内的引用值，这对此函数作用域外的原始对象是没有任何影响的，外作用域的引用仍保留在原始对象上
 */

// eg2
let me1 = {
    'partOf': 'A Team'
}
function myGroup(me) {
   me.partOf = 'A Group'
}
myGroup(me1)
console.log(me1)

/**
 当myGroup调用时，我们将对象me1传给函数。但是与实例1的情况不同，我们没有指派me1变量到任何新对象，有效的说明了myGroup函数作用域内的对象引用值依旧是原始对象的引用值，而且我们在作用域内修改对象的参数值同样有效的修改了原始对象的参数*

 所以后面的例子是否说明javascript是引用传递呢？不，并没有。请记住，如果是对象的话，JavaScript将引用按值传递。这种混乱往往发生在我们没有完全理解什么通过引用传递的情况下。这就是确切的原因，有些人更愿意称它为call-by-sharing
 */
