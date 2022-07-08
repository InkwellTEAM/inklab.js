export class Set {
  elements: unknown[]

  constructor(e: unknown[]) {
    this.elements = e
  }

  get size() {
    return this.elements.length
  }

  add(s: Set) {
    this.elements.concat(s)
  }
}
