import { Set } from "./../../../src"

export function AddSets(sets: Set[]): Set {
  const fs = []

  sets.forEach((s) => {
    s.elements.forEach((e) => {
      fs.push(e)
    })
  })

  return new Set(fs)
}
