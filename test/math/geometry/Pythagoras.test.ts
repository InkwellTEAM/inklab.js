import { Pythagoras, Trunc } from "./../../../src/"

describe("2D Pythagoras", () => {
  test("2D Pythagoras - 1", () => {
    expect(Pythagoras([1, 2])).toBe(Trunc(Math.sqrt(5), 15))
  })

  test("2D Pythagoras - 2", () => {
    expect(Pythagoras([1, 1])).toBe(Trunc(Math.sqrt(2), 15))
  })

  test("2D Pythagoras - 3", () => {
    expect(Pythagoras([3, 4])).toBe(5)
  })

  test("2D Pythagoras - 4", () => {
    expect(Pythagoras([6, 8])).toBe(10)
  })

  test("2D Pythagoras - 5", () => {
    expect(Pythagoras([1, 5])).toBe(Trunc(Math.sqrt(26), 15))
  })
})
