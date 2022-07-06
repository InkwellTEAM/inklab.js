import { LCM } from "./../../../src"

describe("Least common multiple", () => {
  test("Least common multiple - 1", () => {
    expect(LCM(10, 5)).toBe(10)
  })

  test("Least common multiple - 2", () => {
    expect(LCM(10, 7)).toBe(70)
  })

  test("Least common multiple - 3", () => {
    expect(LCM(15240, 552)).toBe(350520)
  })

  test("Least common multiple - 4", () => {
    expect(LCM(1023, 5523)).toBe(1883343)
  })

  test("Least common multiple - 5", () => {
    expect(LCM(10, 534)).toBe(2670)
  })
})
