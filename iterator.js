arr = [1, 2, 3]
itr = arr[Symbol.iterator]()
brr = []
brr[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
// console.log(itr.next(), itr.next(), itr.next())
// for (let v of brr) {
//   console.log(v)
// }

class RangeIterator {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
  [Symbol.iterator]() {
    return this
  }
  next() {
    const value = this.start
    if (value < this.end) {
      this.start = value + 1
      return {
        value: value,
        done: false
      }
    }
    return {
      value: undefined,
      done: true
    }
  }
}
// for (var v of new RangeIterator(0, 3)) {
//   console.log(v)
// }


function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}

// 上面这个示例就是一个Generator函数，我们来分析其执行过程：

// 首先 Generator 函数调用时它会返回一个迭代器
// 当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6
// 当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8
// 当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42

/** 
 * 用自己方法描述iterator特性:
 * 
 * Iterator的作用主要是：
 * 1. 为数据提供统一便捷的访问接口
 * 2. 使得数据成员按照某种次序排序
 * 3. Iterator接口主要供给 for...of消费 
 * 
 * Iterator是什么？
 * 1. Iterator实际上是一个遍历器生成函数
 * 2. 遍历器生成函数返回一个对象，这个对象称为遍历器对象，主要是包含next() return() throw()三个方法
 * 3. 其中next()属性方法是必须具备的，该方法是返回一个对象，该对象包含{ value: xxx, done: boolean }
 * 
 * 
 * 
*/