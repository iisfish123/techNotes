let f0 = Symbol('foo')
// console.log(f1) // Symbol(foo)
// console.log(f1.toString()) // Symbol(foo)

let s1 = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false 可以不加参数 

const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj)  // Symbol函数的参数，只能是字符串

// console.log(`your name is ${Symbol('foo')}`) // 报错，因为Symbol值不能与任何其他类型的值进行运算， 但是可以显示转成字符串
// console.log(`your name is ${Symbol('foo').toString()}`) //  your name is Symbol(foo)

let foo = Symbol('foo')
console.log(foo.description) // "foo" ES2019 新实例属性，返回Symbol的描述

let mySymbol = Symbol('foo') 
let a = {
  [mySymbol]:2 // 第一种写法
}
a[mySymbol] = '1' // 第二种写法
Object.defineProperty(a, mySymbol, {value: 1}) // 第三种写法

/** 
 * 主要特性如下：
 * 1.Symbol函数，参数是对当前Symbol值得描述
 * 
 * 2.Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
 * 基本上，它是一种类似于字符串的数据类型。
 * 
 * 3.Symbol函数的参数，只能是字符串。如果传入对象作为参数，则会先调用obj.toString()转为字符串
 * 
 * 4.Symbol值不能进行值运算，但是可以显示转为字符串
 * 
 * 5.Symbol().description ES2019新增实例属性，用于返回Symbol的描述
 * 
 * 6.作为属性名的三种写法
 * 
 * 7.消除魔术字符串 当我们多次使用，并且不需要关心字符串的具体值的时候，可以用Symbol值来代替
*/


/** 
 * const s1 = Symbol.for(‘foo’) 有登记机制，如果已有登记则返回这个Symbol值，否则就新建一个新的Symbol值
 * Symbol.keyFor(s1)) 如果已有登记的Symbol值，则返回其key值 "foo"
 * 
 * Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。
*/



