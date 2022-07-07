import { Polynomial } from "./../../../src"

describe("Polynomial evaluation", () => {
  test("Polynomial evaluation - 1", () => {
    const p = new Polynomial([0, 0, 1])

    expect(p.evaluate(2)).toBe(4)
  })

  test("Polynomial evaluation - 2", () => {
    const p = new Polynomial([1, 3, 1])

    expect(p.evaluate(2)).toBe(11)
  })

  test("Polynomial evaluation - 3", () => {
    const p = new Polynomial([0, 0, 1, 1])

    expect(p.evaluate(2)).toBe(12)
  })

  test("Polynomial evaluation - 4", () => {
    const p = new Polynomial([1, 1, 1, 1, 1, 1])

    expect(p.evaluate(2)).toBe(63)
  })

  test("Polynomial evaluation - 5", () => {
    const p = new Polynomial([1])

    expect(p.evaluate(2)).toBe(1)
  })
})

describe("Polynomial differentiation", () => {
  test("Polynomial differentiation - 1", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([2, 2])

    expect(p1.derivative).toEqual(p2)
  })

  test("Polynomial differentiation - 2", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([2, 2])

    expect(p1.derivative).toEqual(p2)
  })

  test("Polynomial differentiation - 3", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([2, 2])

    expect(p1.derivative).toEqual(p2)
  })

  test("Polynomial differentiation - 4", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([2, 2])

    expect(p1.derivative).toEqual(p2)
  })

  test("Polynomial differentiation - 5", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([2, 2])

    expect(p1.derivative).toEqual(p2)
  })
})

describe("Polynomial addition", () => {
  test("Polynomial addition - 1", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([1, 2, 2])

    const p3 = new Polynomial([2, 4, 3])

    expect(p1.add(p2)).toEqual(p3)
  })

  test("Polynomial addition - 2", () => {
    const p1 = new Polynomial([1, 2, 31])
    const p2 = new Polynomial([21, -23, 2])

    const p3 = new Polynomial([22, -21, 33])

    expect(p1.add(p2)).toEqual(p3)
  })

  test("Polynomial addition - 3", () => {
    const p1 = new Polynomial([1, 2])
    const p2 = new Polynomial([1, 2, 2])

    const p3 = new Polynomial([2, 4, 2])

    expect(p1.add(p2)).toEqual(p3)
  })

  test("Polynomial addition - 4", () => {
    const p1 = new Polynomial([13, -253, 1])
    const p2 = new Polynomial([234, 43, 2, 3])

    const p3 = new Polynomial([247, -210, 3, 3])

    expect(p1.add(p2)).toEqual(p3)
  })

  test("Polynomial addition - 5", () => {
    const p1 = new Polynomial([1, 2234, -1])
    const p2 = new Polynomial([1, -2234, 2])

    const p3 = new Polynomial([2, 0, 1])

    expect(p1.add(p2)).toEqual(p3)
  })
})

describe("Polynomial subtraction", () => {
  test("Polynomial subtraction - 1", () => {
    const p1 = new Polynomial([1, 2, 1])
    const p2 = new Polynomial([1, 2, 2])

    const p3 = new Polynomial([0, 0, -1])

    expect(p1.sub(p2)).toEqual(p3)
  })

  test("Polynomial subtraction - 2", () => {
    const p1 = new Polynomial([1, 2, 31])
    const p2 = new Polynomial([21, -23, 2])

    const p3 = new Polynomial([-20, 25, 29])

    expect(p1.sub(p2)).toEqual(p3)
  })

  test("Polynomial subtraction - 3", () => {
    const p1 = new Polynomial([1, 2])
    const p2 = new Polynomial([1, 2, 2])

    const p3 = new Polynomial([0, 0, -2])

    expect(p1.sub(p2)).toEqual(p3)
  })

  test("Polynomial subtraction - 4", () => {
    const p1 = new Polynomial([13, -253, 1])
    const p2 = new Polynomial([234, 43, 2, 3])

    const p3 = new Polynomial([-221, -296, -1, -3])

    expect(p1.sub(p2)).toEqual(p3)
  })

  test("Polynomial subtraction - 5", () => {
    const p1 = new Polynomial([1, 2234, -1])
    const p2 = new Polynomial([1, -2234, 2])

    const p3 = new Polynomial([0, 4468, -3])

    expect(p1.sub(p2)).toEqual(p3)
  })
})
