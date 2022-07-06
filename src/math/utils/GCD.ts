export function GCD(a: number, b: number): number {
  const remainder = a % b
  if (remainder === 0) return b
  return GCD(b, remainder)
}
