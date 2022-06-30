export function DoubleFactorial(n: number): number {
  if (n === 0 || n === 1 || n === -1) {
    return 1
  } else {
    return n * DoubleFactorial(n - 2)
  }
}
