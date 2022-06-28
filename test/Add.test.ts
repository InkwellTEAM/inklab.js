import { Add } from "../src/index"

describe("Adding", () => {
  test("7+5", () => {
    expect(Add(7, 5)).toBe(12)
  })
})
