import { Complex, Trunc } from "./../../../src/"

describe("Complex constructor", () => {
  test("Complex constructor - 1", () => {
    const c = new Complex([1, 2])
    expect(c.r).toBe(Trunc(Math.sqrt(5), 15))
    expect(c.theta).toBe(Trunc(Math.atan(2), 15))
  })

  test("Complex constructor - 2", () => {
    const c = new Complex([1, 1])
    expect(c.r).toBe(Trunc(Math.sqrt(2), 15))
    expect(c.theta).toBe(Trunc(Math.PI / 4, 15))
  })

  test("Complex constructor - 3", () => {
    const c = new Complex([2, 1], "c")
    expect(c.r).toBe(Trunc(Math.sqrt(5), 15))
    expect(c.theta).toBe(Trunc(Math.atan(1 / 2), 15))
  })

  test("Complex constructor - 4", () => {
    const c = new Complex([Math.sqrt(2), Math.PI / 4], "p")
    expect(c.re).toBe(1)
    expect(c.im).toBe(1)
  })

  test("Complex constructor - 5", () => {
    const c = new Complex([Math.sqrt(2), -Math.PI / 4], "p")
    expect(c.re).toBe(1)
    expect(c.im).toBe(-1)
  })
})

describe("Complex addition", () => {
  test("Complex addition - 1", () => {
    const c1 = new Complex([1, 2])
    const c2 = new Complex([3, 4])

    expect(c1.add(c2).re).toBe(4)
    expect(c1.add(c2).im).toBe(6)
  })

  test("Complex addition - 2", () => {
    const c1 = new Complex([4, 6])
    const c2 = new Complex([3, 7])

    expect(c1.add(c2).re).toBe(7)
    expect(c1.add(c2).im).toBe(13)
  })

  test("Complex addition - 3", () => {
    const c1 = new Complex([15, 142])
    const c2 = new Complex([345, 43])

    expect(c1.add(c2).re).toBe(360)
    expect(c1.add(c2).im).toBe(185)
  })

  test("Complex addition - 4", () => {
    const c1 = new Complex([125, 232])
    const c2 = new Complex([3363, 434])

    expect(c1.add(c2).re).toBe(3488)
    expect(c1.add(c2).im).toBe(666)
  })

  test("Complex addition - 5", () => {
    const c1 = new Complex([235, 2553])
    const c2 = new Complex([2523, 5225])

    expect(c1.add(c2).re).toBe(2758)
    expect(c1.add(c2).im).toBe(7778)
  })
})

describe("Complex multiplication", () => {
  test("Complex multiplication - 1", () => {
    const c1 = new Complex([1, 2])
    const c2 = new Complex([3, 4])

    expect(c1.mulBy(c2).re).toBe(-5)
    expect(c1.mulBy(c2).im).toBe(10)
  })

  test("Complex multiplication - 2", () => {
    const c1 = new Complex([1, 253])
    const c2 = new Complex([13, 423])

    expect(c1.mulBy(c2).re).toBe(-107006)
    expect(c1.mulBy(c2).im).toBe(3712)
  })

  test("Complex multiplication - 3", () => {
    const c1 = new Complex([12, 23])
    const c2 = new Complex([53, 89])

    expect(c1.mulBy(c2).re).toBe(-1411)
    expect(c1.mulBy(c2).im).toBe(2287)
  })

  test("Complex multiplication - 4", () => {
    const c1 = new Complex([-45, 22])
    const c2 = new Complex([37, -64])

    expect(c1.mulBy(c2).re).toBe(-257)
    expect(c1.mulBy(c2).im).toBe(3694)
  })

  test("Complex multiplication - 5", () => {
    const c1 = new Complex([-1, -432])
    const c2 = new Complex([-324, 1234])

    expect(c1.mulBy(c2).re).toBe(533412)
    expect(c1.mulBy(c2).im).toBe(138734)
  })
})

describe("Complex division", () => {
  test("Complex division - 1", () => {
    const c1 = new Complex([-1, -432])
    const c2 = new Complex([-324, 1234])

    expect(c1.divBy(c2).re).toBe(Trunc(-133191 / 406933, 15))
    expect(c1.divBy(c2).im).toBe(Trunc(70601 / 813866, 15))
  })
})
