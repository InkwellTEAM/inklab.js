export function Round(what: number, many: number): number {
  const toN = 10 ** many
  return Math.round(what * toN) / toN
}
