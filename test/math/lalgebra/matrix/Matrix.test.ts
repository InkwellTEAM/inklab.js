import { Matrix } from "./../../../../src"

describe("Matrix area", () => {
  test("Matrix area - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.area).toBe(4)
  })

  test("Matrix area - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [5, 6],
      [3, 4],
    ])

    expect(m1.area).toBe(6)
  })

  test("Matrix area - 3", () => {
    const m1 = new Matrix([
      [1, 2, 7, 8],
      [3, 4, 9, 2],
    ])

    expect(m1.area).toBe(8)
  })

  test("Matrix area - 4", () => {
    const m1 = new Matrix([
      [1, 2, 4],
      [3, 4],
    ])

    expect(m1.area).toBe(5)
  })

  test("Matrix area - 5", () => {
    const m1 = new Matrix([[1, 2], [3, 4], [2, 4], [1]])

    expect(m1.area).toBe(7)
  })
})
