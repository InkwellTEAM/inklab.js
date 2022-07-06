import { Matrix, Vector, ValidateSize } from "./../../../../src"

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

describe("Is square", () => {
  test("Is square - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.isSquare).toBe(true)
  })

  test("Is square - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])

    expect(m1.isSquare).toBe(false)
  })

  test("Is square - 3", () => {
    const m1 = new Matrix([[1, 2], [3]])

    expect(m1.isSquare).toBe(false)
  })

  test("Is square - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 6],
      [4, 4, 7],
    ])

    expect(m1.isSquare).toBe(true)
  })

  test("Is square - 5", () => {
    const m1 = new Matrix([])

    expect(m1.isSquare).toBe(true)
  })
})

describe("Get value", () => {
  test("Get value - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.getValue(0, 1)).toBe(3)
  })

  test("Get value - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])

    expect(m1.getValue(1, 2)).toBe(6)
  })

  test("Get value - 3", () => {
    const m1 = new Matrix([
      [1, 2235],
      [3, 4],
    ])

    expect(m1.getValue(1, 0)).toBe(2235)
  })

  test("Get value - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 8],
    ])

    expect(m1.getValue(2, 0)).toBe(5)
  })

  test("Get value - 5", () => {
    const m1 = new Matrix([[], []])

    expect(m1.getValue(0, 1)).toBe(undefined)
  })
})

describe("Get row", () => {
  test("Get row - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [2, 3],
    ])
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 3])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [2, 3],
      [3, 5],
    ])
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 3])
    const v3 = new Vector([3, 5])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
    expect(m1.getRow(2)).toEqual(v3)
  })

  test("Get row - 3", () => {
    const m1 = new Matrix([
      [1, 2, 3],
      [2, 3, 4],
    ])
    const v1 = new Vector([1, 2, 3])
    const v2 = new Vector([2, 3, 4])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 4", () => {
    const m1 = new Matrix([[], []])
    const v1 = new Vector([])
    const v2 = new Vector([])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 5", () => {
    const m1 = new Matrix([
      [1, 2, 5, 6, 7],
      [2, 3],
    ])
    const v1 = new Vector([1, 2, 5, 6, 7])
    const v2 = new Vector([2, 3])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })
})

describe("Get column", () => {
  test("Get column - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const v1 = new Vector([1, 3])
    const v2 = new Vector([2, 4])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 2", () => {
    const m1 = new Matrix([
      [1, 52],
      [32, 4],
    ])
    const v1 = new Vector([1, 32])
    const v2 = new Vector([52, 4])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 3", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [3, 5],
    ])
    const v1 = new Vector([1, 3, 3])
    const v2 = new Vector([2, 4, 5])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 7],
    ])
    const v1 = new Vector([1, 3])
    const v2 = new Vector([2, 4])
    const v3 = new Vector([5, 7])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
    expect(m1.getCol(2)).toEqual(v3)
  })

  test("Get column - 5", () => {
    const m1 = new Matrix([[], []])
    const v1 = new Vector([])
    const v2 = new Vector([])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })
})

describe("Validate size", () => {
  test("Validate size - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 2", () => {
    const m1 = new Matrix([[1, 2], [3]])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(false)
  })

  test("Validate size - 3", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 6],
    ])
    const m2 = new Matrix([
      [2, 5, 7],
      [6, 7, 9],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 4", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
      [7, 9],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 5", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [10, 134],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(false)
  })
})

describe("Matrix addition", () => {
  test("Matrix addition - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const m2 = new Matrix([
      [5, 6],
      [7, 8],
    ])

    const m3 = new Matrix([
      [6, 8],
      [10, 12],
    ])

    expect(m1.add(m2)).toEqual(m3)
  })
})
