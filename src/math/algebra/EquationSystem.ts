import { Matrix, Vector } from "./../../../src"

export function EquationSystem(
  eqs: Array<Array<number>>,
  res: number[]
): number[] {
  const baseMat = new Matrix(eqs)
  const baseRes = new Vector(res)
  const results = []

  for (let i = 0; i < eqs.length; i++) {
    results.push(baseMat.setCol(baseRes, i).determinant / baseMat.determinant)
  }

  return results
}
