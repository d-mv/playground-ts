/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Type } from './functions'

declare global {
  interface Array<T> extends Array<T> {
    show: () => void
  }
}

Array.prototype.show = function () {
  console.log('inside', this)
  // return this
}

// {}.prototype.show = function () {
// console.log('inside', this)
// return this
// }

console.log([2].show())

export {}
