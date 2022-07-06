import { GCD } from "./../../../src"

export function LCM(a: number, b: number): number {
  return (a * b) / GCD(a, b)
}
