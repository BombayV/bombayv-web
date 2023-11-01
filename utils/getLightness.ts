export const getLightness = (r: number, g: number, b: number): number =>
  0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
