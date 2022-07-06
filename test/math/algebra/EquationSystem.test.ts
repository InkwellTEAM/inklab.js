import { EquationSystem } from "../../../src"

describe("Solving system of equations", () => {
  test("Solving system of equations - 1", () => {
    expect(
      EquationSystem(
        [
          [2, 1],
          [5, 1],
        ],
        [4, 7]
      )
    ).toEqual([1, 2])
  })

  test("Solving system of equations - 2", () => {
    expect(
      EquationSystem(
        [
          [2, 3],
          [5, -3],
        ],
        [8, -1]
      )
    ).toEqual([1, 2])
  })

  test("Solving system of equations - 3", () => {
    expect(
      EquationSystem(
        [
          [2, 5],
          [1, -2],
        ],
        [19, -4]
      )
    ).toEqual([2, 3])
  })

  test("Solving system of equations - 4", () => {
    expect(
      EquationSystem(
        [
          [2, -3],
          [4, 1],
        ],
        [6, 5]
      )
    ).toEqual([3 / 2, -1])
  })

  test("Solving system of equations - 5", () => {
    expect(
      EquationSystem(
        [
          [2, 1, 5],
          [5, 1, 2],
          [4, 7, 1],
        ],
        [4, 7, 8]
      )
    ).toEqual([27 / 22, 9 / 22, 5 / 22])
  })
})
