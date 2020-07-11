/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Type } from './functions'

declare global {
  interface Array<T = any> extends Array<any> {
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

const t ={}
console.log([2].show())

export {}