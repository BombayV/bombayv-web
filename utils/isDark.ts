import { hexToRgb } from './hexToRgb';
import { getLightness } from './getLightness';

export const isDark = (hex: any): boolean => {
  const [r, g, b] = hexToRgb(hex);
  return getLightness(r, g, b) < 124;
};
