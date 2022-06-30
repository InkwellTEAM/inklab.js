import { Factorial } from "./../../../src/"

describe("Factorial", () => {
  test("Factorial - 1", () => {
    expect(Factorial(5)).toBe(120)
  })

  test("Factorial - 2", () => {
    expect(Factorial(0)).toBe(1)
  })

  test("Factorial - 3", () => {
    expect(Factorial(10)).toBe(3628800)
  })

  test("Factorial - 4", () => {
    expect(Factorial(7)).toBe(5040)
  })

  test("Factorial - 5", () => {
    expect(Factorial(14)).toBe(87178291200)
  })
})
