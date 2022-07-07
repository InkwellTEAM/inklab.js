import { CrossProduct, Vector } from "./../../../../src"

describe("Vector - cross product", () => {
  test("Vector - cross product - 1", () => {
    const v1 = new Vector([1, 2, 3])
    const v2 = new Vector([4, 5, 6])
    const v3 = new Vector([-3, 6, -3])

    expect(CrossProduct([v1, v2])).toEqual(v3)
  })

  test("Vector - cross product - 2", () => {
    const v1 = new Vector([1, 2, 3, 3])
    const v2 = new Vector([4, 5, 6, 7])
    const v3 = new Vector([-3, 5, 9, 1])

    const v4 = new Vector([21, -30, 25, -12])

    expect(CrossProduct([v1, v2, v3])).toEqual(v4)
  })

  test("Vector - cross product - 3", () => {
    const v1 = new Vector([1, 2, 0])
    const v2 = new Vector([3, 4, 0])
    const v3 = new Vector([0, 0, -2])

    expect(CrossProduct([v1, v2])).toEqual(v3)
  })

  test("Vector - cross product - 4", () => {
    const v1 = new Vector([1432, 23, 312])
    const v2 = new Vector([324, 532, 12])
    const v3 = new Vector([-165708, 83904, 754372])

    expect(CrossProduct([v1, v2])).toEqual(v3)
  })

  test("Vector - cross product - 5", () => {
    const v1 = new Vector([2, 5, 3])
    const v2 = new Vector([45, 32, 16])
    const v3 = new Vector([-16, 103, -161])

    expect(CrossProduct([v1, v2])).toEqual(v3)
  })
})
