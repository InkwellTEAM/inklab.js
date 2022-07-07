import { Matrix, Vector } from "./../../../../src"

export function CrossProduct(vs: Array<Vector>): Vector {
  const preparedVs = []
  const len = Math.max(...vs.map((a) => a.val.length))

  vs.forEach((v) => {
    preparedVs.push(v.toDim(len).toArray)
  })

  if (vs.length === len - 1) {
    const v = []
    const vector = []

    v.push(Array.from({ length: len }, () => 1))

    preparedVs.forEach((vec) => v.push(vec))

    const m = new Matrix(v)

    for (let i = len; i > 0; i--) {
      vector.push(
        m.getSubmatrix(len - i, 0).det === 0
          ? 0
          : (-1) ** (len - i) * m.getSubmatrix(len - i, 0).det
      )
    }

    return new Vector(vector)
  } else
    throw new Error(
      "Cannot calculate cross product - to many or not enough vectors."
    )
}
