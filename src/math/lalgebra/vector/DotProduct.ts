import { Vector } from "./Vector"

export function DotProduct(v: Vector[]): number {
  const vec = []

  const bV = Math.max(...v.map((a) => a.dims))

  for (let n = 0; n < bV; n++) {
    vec.push(v.reduce((a, b) => a * (b.val[n] || 0), 1))
  }
  return vec.reduce((ps, a) => ps + a, 0)
}
