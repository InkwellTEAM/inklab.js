import { MassiveDotProduct, Vector } from "./../../../../src"

describe("Vectors - Massive dot product", () => {
  test("Vectors - Massive dot product - 1", () => {
    const v1 = new Vector([2, 3])
    const v2 = new Vector([1, 2])
    const v3 = new Vector([4, 5])

    expect(MassiveDotProduct([v1, v2, v3])).toBe(38)
  })

  test("Vectors - Massive dot product - 2", () => {
    const v1 = new Vector([2, 3])
    const v2 = new Vector([1, 2])
    const v3 = new Vector([4])

    expect(MassiveDotProduct([v1, v2, v3])).toBe(8)
  })

  test("Vectors - Massive dot product - 3", () => {
    const v1 = new Vector([2, 3, 1])
    const v2 = new Vector([1, 2, 8])
    const v3 = new Vector([4, 5, 6])

    expect(MassiveDotProduct([v1, v2, v3])).toBe(86)
  })

  test("Vectors - Massive dot product - 4", () => {
    const v1 = new Vector([2, 3])
    const v2 = new Vector([1, 2])
    const v3 = new Vector([1, 56])

    expect(MassiveDotProduct([v1, v2, v3])).toBe(338)
  })

  test("Vectors - Massive dot product - 5", () => {
    const v1 = new Vector([2, 3])
    const v2 = new Vector([1, 235])
    const v3 = new Vector([-1, 5])

    expect(MassiveDotProduct([v1, v2, v3])).toBe(3523)
  })
})
