export class Matrix {
  val: Array<Array<number>>

  constructor(v: Array<Array<number>>) {
    this.val = v
  }

  get area(): number {
    return this.val.reduce((a, b) => a + b.length, 0)
  }
}
