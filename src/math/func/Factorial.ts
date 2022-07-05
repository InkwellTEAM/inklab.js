export function Factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * Factorial(n - 1)
  }
}
