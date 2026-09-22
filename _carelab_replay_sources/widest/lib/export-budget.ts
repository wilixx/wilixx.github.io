// Limit retained link samples, not constellation size. Includes the worst-case
// two ground stations and one resource record per satellite per sample.
export function exportStepLimit(count: number, degree: number) {
  return Math.max(
    1,
    Math.min(
      720,
      Math.floor(1500000 / (Math.max(1, count) * (Math.ceil(degree) / 2 + 3))),
    ),
  );
}
