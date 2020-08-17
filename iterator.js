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