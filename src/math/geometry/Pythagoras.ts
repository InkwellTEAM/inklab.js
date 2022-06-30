import { Trunc } from "./../utils/Trunc"

export function Pythagoras(dims: number[]) {
  return Trunc(Math.sqrt(dims.reduce((a, b) => a + b * b, 0)), 15)
}
