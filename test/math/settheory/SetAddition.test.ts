import { Set, AddSets } from "./../../../src"

describe("Set addition", () => {
  test("Set addition - 1", () => {
    const s1 = new Set([2, 3])
    const s2 = new Set([4, 5])
    const s3 = new Set([2, 3, 4, 5])

    expect(AddSets([s1, s2])).toEqual(s3)
  })
})
