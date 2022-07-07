export class Polynomial {
  coefs: number[]

  constructor(c: number[]) {
    this.coefs = c
  }

  get derivative(): Polynomial {
    const co = this.coefs.splice(1)

    for (let i = 0; i < co.length; i++) {
      co[i] *= i + 1
    }

    return new Polynomial(co)
  }

  evaluate(x: number): number {
    let res = 0

    for (let i = 0; i < this.coefs.length; i++) {
      res += x ** i * this.coefs[i]
    }

    return res
  }

  add(p: Polynomial): Polynomial {
    const fp = []

    const len =
      this.coefs.length > p.coefs.length ? this.coefs.length : p.coefs.length

    for (let i = 0; i < len; i++) {
      fp.push((this.coefs[i] || 0) + (p.coefs[i] || 0))
    }

    return new Polynomial(fp)
  }

  sub(p: Polynomial): Polynomial {
    const fp = []

    const len =
      this.coefs.length > p.coefs.length ? this.coefs.length : p.coefs.length

    for (let i = 0; i < len; i++) {
      fp.push((this.coefs[i] || 0) - (p.coefs[i] || 0))
    }

    return new Polynomial(fp)
  }
}
