import { Matrix } from "./../../../../src"

export function ValidateSize(m: Matrix, n: Matrix): boolean {
  return n.area === m.area && n.val.length === m.val.length ? true : false
}
