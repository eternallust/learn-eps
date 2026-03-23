/**
 * Path blob organik dalam kotak logika 200×200; diskalakan ke `size`.
 */
export function onboardingBlobPath(size: number): string {
  const u = size / 200;
  return [
    `M ${100 * u} ${22 * u}`,
    `C ${148 * u} ${14 * u} ${192 * u} ${52 * u} ${188 * u} ${102 * u}`,
    `C ${184 * u} ${152 * u} ${152 * u} ${192 * u} ${98 * u} ${188 * u}`,
    `C ${44 * u} ${184 * u} ${8 * u} ${142 * u} ${14 * u} ${92 * u}`,
    `C ${20 * u} ${42 * u} ${58 * u} ${12 * u} ${100 * u} ${22 * u}`,
    "Z",
  ].join(" ");
}
