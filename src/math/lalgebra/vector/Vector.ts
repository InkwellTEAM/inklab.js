import { Pythagoras, Matrix } from "./../../../../src"

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

  get toArray(): number[] {
    return this.val
  }

  toDim(n: number): Vector {
    if (this.dims < n) {
      const fv = []

      for (let k = 0; k < n; k++) {
        fv.push(this.val[k])
      }

      return new Vector(fv)
    } else if (this.dims === n) {
      return this
    } else {
      const fv = []

      for (let k = 0; k < n; k++) {
        fv.push(this.val[k] || 0)
      }

      return new Vector(fv)
    }
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

  mulByMatrix(m: Matrix): Vector {
    const fv = []

    for (let k = 0; k < m.val.length; k++) {
      fv.push(m.getRow(k).dot(this.toDim(m.val.length)))
    }

    return new Vector(fv)
  }
}
