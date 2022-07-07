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

  get det(): number {
    //From StackOverflow, don't touch :D

    const determinant = (m) =>
      m.length == 1
        ? m[0][0]
        : m.length == 2
        ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
        : m[0].reduce(
            (r, e, i) =>
              r +
              (-1) ** (i + 2) *
                e *
                determinant(m.slice(1).map((c) => c.filter((_, j) => i != j))),
            0
          )

    if (this.isSquare === true) {
      return determinant(this.val)
    } else throw new Error("Cannot calculate determinant of non-square matrix")
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

  sub(m: Matrix): Matrix {
    if (ValidateSize(m, this) === true) {
      const fm = []
      for (let n = 0; n < this.area / this.val.length; n++) {
        fm.push(this.getRow(n).sub(m.getRow(n)).toArray)
      }
      return new Matrix(fm)
    } else throw new Error("The matrices are not that same size")
  }

  mulBy(m: Matrix): Matrix {
    const fm = []

    for (let n = 0; n < m.val.length; n++) {
      const hm = []
      for (let o = 0; o < this.area / this.val.length; o++) {
        hm.push(m.getRow(n).dot(this.getCol(o)))
      }
      fm.push(hm)
    }

    return new Matrix(fm)
  }

  setCol(v: Vector, c: number): Matrix {
    const fm = []

    for (let k = 0; k < this.val.length; k++) {
      const hm = []
      for (let o = 0; o < this.area / this.val.length; o++) {
        if (o === c) {
          hm.push(v.val[k])
        } else {
          hm.push(this.getValue(o, k))
        }
      }
      fm.push(hm)
    }

    return new Matrix(fm)
  }

  getSubmatrix(x: number, y: number): Matrix {
    const fm = []

    for (let n = 0; n < this.val.length; n++) {
      if (n !== y) {
        const hm = []
        for (let i = 0; i < this.area / this.val.length; i++) {
          if (i !== x) {
            hm.push(this.getValue(i, n))
          }
        }
        fm.push(hm)
      }
    }

    return new Matrix(fm)
  }
}
