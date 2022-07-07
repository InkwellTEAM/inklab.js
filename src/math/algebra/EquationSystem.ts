import { Matrix, Vector } from "./../../../src"

export function EquationSystem(
  eqs: Array<Array<number>>,
  res: number[]
): number[] {
  const baseMat = new Matrix(eqs)
  const baseRes = new Vector(res)
  const results = []

  if (baseMat.det === 0) {
    throw new Error("System of equations has no or infinitely many solutions.")
  } else {
    //Cramer's rule
    for (let i = 0; i < eqs.length; i++) {
      results.push(baseMat.setCol(baseRes, i).det / baseMat.det)
    }

    return results
  }
}
