import { Set, OrderedPair } from "./../../../src"

export function CartesianProduct(A: Set, B: Set): Set {
  const fs = []

  for (const i in A) {
    for (const l in B) {
      const pair = new OrderedPair(A.elements[i], B.elements[l])
      fs.push(pair)
    }
  }

  return new Set(fs)
}
