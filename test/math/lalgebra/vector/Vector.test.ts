import { Vector, Matrix, Trunc } from "./../../../../src"

describe("Vector dimensions", () => {
  test("Vector dimensions - 1", () => {
    const v = new Vector([1])
    expect(v.dims).toBe(1)
  })

  test("Vector dimensions - 2", () => {
    const v = new Vector([1, 325, 2513, 25])
    expect(v.dims).toBe(4)
  })

  test("Vector dimensions - 3", () => {
    const v = new Vector([])
    expect(v.dims).toBe(0)
  })

  test("Vector dimensions - 4", () => {
    const v = new Vector([25, 35, 253])
    expect(v.dims).toBe(3)
  })

  test("Vector dimensions - 5", () => {
    const v = new Vector([1, 5, 6, 24, 264, 634])
    expect(v.dims).toBe(6)
  })
})

describe("Vector magnitude", () => {
  test("Vector magnitude - 1", () => {
    const v = new Vector([1])
    expect(v.magnitude).toBe(1)
  })

  test("Vector magnitude - 2", () => {
    const v = new Vector([3, 4])
    expect(v.magnitude).toBe(5)
  })

  test("Vector magnitude - 3", () => {
    const v = new Vector([])
    expect(v.magnitude).toBe(0)
  })

  test("Vector magnitude - 4", () => {
    const v = new Vector([3, 4, 5])
    expect(v.magnitude).toBe(Trunc(Math.sqrt(50), 15))
  })

  test("Vector magnitude - 5", () => {
    const v = new Vector([1, 5, 6, 24, 264, 634])
    expect(v.magnitude).toBe(Trunc(Math.sqrt(472290), 15))
  })
})

describe("Vector addition", () => {
  test("Vector addition - 1", () => {
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 4])

    expect(v1.add(v2).val[0]).toBe(3)
    expect(v1.add(v2).val[1]).toBe(6)
  })

  test("Vector addition - 2", () => {
    const v1 = new Vector([2, 8])
    const v2 = new Vector([5, 4])

    expect(v1.add(v2).val[0]).toBe(7)
    expect(v1.add(v2).val[1]).toBe(12)
  })

  test("Vector addition - 3", () => {
    const v1 = new Vector([1, 45])
    const v2 = new Vector([2, 445])

    expect(v1.add(v2).val[0]).toBe(3)
    expect(v1.add(v2).val[1]).toBe(490)
  })

  test("Vector addition - 4", () => {
    const v1 = new Vector([1, -2])
    const v2 = new Vector([-2, 4])

    expect(v1.add(v2).val[0]).toBe(-1)
    expect(v1.add(v2).val[1]).toBe(2)
  })

  test("Vector addition - 5", () => {
    const v1 = new Vector([2341, 2])
    const v2 = new Vector([2, 4324])

    expect(v1.add(v2).val[0]).toBe(2343)
    expect(v1.add(v2).val[1]).toBe(4326)
  })
})

describe("Vector subtraction", () => {
  test("Vector subtraction - 1", () => {
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 4])

    expect(v1.sub(v2).val[0]).toBe(-1)
    expect(v1.sub(v2).val[1]).toBe(-2)
  })

  test("Vector subtraction - 2", () => {
    const v1 = new Vector([2, 8])
    const v2 = new Vector([5, 4])

    expect(v1.sub(v2).val[0]).toBe(-3)
    expect(v1.sub(v2).val[1]).toBe(4)
  })

  test("Vector subtraction - 3", () => {
    const v1 = new Vector([1, 45])
    const v2 = new Vector([2, -445])

    expect(v1.sub(v2).val[0]).toBe(-1)
    expect(v1.sub(v2).val[1]).toBe(490)
  })

  test("Vector subtraction - 4", () => {
    const v1 = new Vector([1, -2])
    const v2 = new Vector([-2, 4])

    expect(v1.sub(v2).val[0]).toBe(3)
    expect(v1.sub(v2).val[1]).toBe(-6)
  })

  test("Vector subtraction - 5", () => {
    const v1 = new Vector([2341, 2])
    const v2 = new Vector([2, 4324])

    expect(v1.sub(v2).val[0]).toBe(2339)
    expect(v1.sub(v2).val[1]).toBe(-4322)
  })
})

describe("Vector dot product", () => {
  test("Vector dot product - 1", () => {
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 4])

    expect(v1.dot(v2)).toBe(10)
  })

  test("Vector dot product - 2", () => {
    const v1 = new Vector([2, 8])
    const v2 = new Vector([5, 4])

    expect(v1.dot(v2)).toBe(42)
  })

  test("Vector dot product - 3", () => {
    const v1 = new Vector([1, 45])
    const v2 = new Vector([2, -445])

    expect(v1.dot(v2)).toBe(-20023)
  })

  test("Vector dot product - 4", () => {
    const v1 = new Vector([1, -2])
    const v2 = new Vector([-2])

    expect(v1.dot(v2)).toBe(-2)
  })

  test("Vector dot product - 5", () => {
    const v1 = new Vector([2341, 2])
    const v2 = new Vector([2, 4324, 3])

    expect(v1.dot(v2)).toBe(13330)
  })
})

describe("Vector multiplied by a matrix", () => {
  test("Vector multiplied by a matrix - 1", () => {
    const v = new Vector([1, 2])
    const m = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const f = new Vector([5, 11])

    expect(v.mulByMatrix(m)).toEqual(f)
  })

  test("Vector multiplied by a matrix - 2", () => {
    const v = new Vector([1, 5, 7])
    const m = new Matrix([
      [1, 2],
      [3, 4],
      [3, 5],
    ])

    const f = new Vector([11, 23, 28])

    expect(v.mulByMatrix(m)).toEqual(f)
  })

  test("Vector multiplied by a matrix - 3", () => {
    const v = new Vector([2, 1, 3])
    const m = new Matrix([
      [1, 3, 2],
      [2, 5, 3],
      [0, 1, 8],
    ])

    const f = new Vector([11, 18, 25])

    expect(v.mulByMatrix(m)).toEqual(f)
  })

  test("Vector multiplied by a matrix - 4", () => {
    const v = new Vector([1, 2])
    const m = new Matrix([[1], [3]])

    const f = new Vector([1, 3])

    expect(v.mulByMatrix(m)).toEqual(f)
  })

  test("Vector multiplied by a matrix - 5", () => {
    const v = new Vector([1, 2])
    const m = new Matrix([
      [0, -1],
      [1, 0],
    ])

    const f = new Vector([-2, 1])

    expect(v.mulByMatrix(m)).toEqual(f)
  })
})
