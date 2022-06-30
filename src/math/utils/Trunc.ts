export function Trunc(what: number, many: number): number {
  const toN = 10 ** many
  return Math.trunc(what * toN) / toN
}
