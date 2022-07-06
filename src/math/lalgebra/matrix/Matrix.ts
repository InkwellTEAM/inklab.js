import { Vector, ValidateSize } from "./../../../../src"

export class Matrix {
  val: Array<Array<number>>

  constructor(v: Array<Array<number>>) {
    this.val = v
  }

  get area(): number {
    return this.val.reduce((a, b) => a + b.length, 0)
  }

  get isSquare(): boolean {
    return Math.sqrt(this.area) === this.val.length ? true : false
  }

  get toArray(): Array<Array<number>> {
    return this.val
  }

  getValue(x: number, y: number): number {
    return this.val[y][x]
  }

  getRow(n: number): Vector {
    return new Vector(this.val[n])
  }

  getCol(n: number): Vector {
    const v = []
    for (let l = 0; l < this.val.length; l++) {
      v.push(this.getValue(n, l))
    }
    return new Vector(v)
  }

  add(m: Matrix): Matrix {
    if (ValidateSize(m, this) === true) {
      const fm = []
      for (let n = 0; n < this.area / this.val.length; n++) {
        fm.push(this.getRow(n).add(m.getRow(n)).toArray)
      }
      return new Matrix(fm)
    } else throw new Error("The matrices are not that same size")
  }
}
