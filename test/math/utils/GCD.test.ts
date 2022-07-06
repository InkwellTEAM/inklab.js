import { GCD } from "./../../../src"

describe("Greatest common divisor", () => {
  test("Greatest common divisor - 1", () => {
    expect(GCD(10, 5)).toBe(5)
  })

  test("Greatest common divisor - 2", () => {
    expect(GCD(21, 3)).toBe(3)
  })

  test("Greatest common divisor - 3", () => {
    expect(GCD(10, 7)).toBe(1)
  })

  test("Greatest common divisor - 4", () => {
    expect(GCD(10, 255)).toBe(5)
  })

  test("Greatest common divisor - 5", () => {
    expect(GCD(1023, 5325)).toBe(3)
  })
})
