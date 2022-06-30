import { Pythagoras } from "./../geometry/Pythagoras"
import { Trunc } from "./../utils/Trunc"
import { Round } from "./../utils/Round"

export interface ComplexNum {
  re: number
  im: number
  r: number
  theta: number
}

export class Complex {
  re: number
  im: number
  r: number
  theta: number

  constructor(comp: number[], mode?: "c" | "p") {
    if (mode === "c" || mode === undefined) {
      this.re = Round(comp[0], 15) || 0
      this.im = Round(comp[1], 15) || 0
      this.r = Pythagoras([comp[0], comp[1]])
      this.theta = Trunc(Math.atan(comp[1] / comp[0]), 15)
    } else if (mode === "p") {
      this.re = Round(comp[0] * Math.cos(comp[1]), 15)
      this.im = Round(comp[0] * Math.sin(comp[1]), 15)
      this.r = Trunc(comp[0], 15) || 0
      this.theta = Trunc(comp[1], 15) || 0
    } else throw new Error("Invalid mode")
  }

  add(comp: ComplexNum): ComplexNum {
    return new Complex([this.re + comp.re, this.im + comp.im])
  }

  sub(comp: ComplexNum): ComplexNum {
    return new Complex([this.re - comp.re, this.im - comp.im])
  }

  mulBy(comp: ComplexNum): ComplexNum {
    return new Complex([
      this.re * comp.re - this.im * comp.im,
      this.re * comp.im + this.im * comp.re,
    ])
  }
}
