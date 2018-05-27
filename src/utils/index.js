export const random = (min, max) => {
  if (max === void 0) {
    max = min
    min = 0
  }

  return min + Math.floor(Math.random() * (max - min + 1))
}
