arr = [1, 2, 3]
itr = arr[Symbol.iterator]()
console.log(itr.next(), itr.next(), itr.next())

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
for (var v of new RangeIterator(0, 3)) {
  console.log(v)
}