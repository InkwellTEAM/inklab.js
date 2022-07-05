import { Pythagoras } from "./../../../../src"

export class Vector {
  val: number[]
  constructor(vals: number[]) {
    this.val = vals
  }

  get dims(): number {
    return this.val.length
  }

  get magnitude(): number {
    return Pythagoras(this.val)
  }

  add(v: Vector) {
    const vec = []

    const len = this.dims > v.dims ? this.dims : v.dims

    for (let n = 0; n < len; n++) {
      vec.push((this.val[n] || 0) + (v.val[n] || 0))
    }

    return new Vector(vec) as Vector
  }

  sub(v: Vector) {
    const vec = []

    const len = this.dims > v.dims ? this.dims : v.dims

    for (let n = 0; n < len; n++) {
      vec.push((this.val[n] || 0) - (v.val[n] || 0))
    }

    return new Vector(vec) as Vector
  }

  dot(v: Vector): number {
    const vec = []

    const len = this.dims > v.dims ? this.dims : v.dims

    for (let n = 0; n < len; n++) {
      vec.push((this.val[n] || 0) * (v.val[n] || 0))
    }

    return vec.reduce((ps, a) => ps + a, 0)
  }
}
