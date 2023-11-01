import { hexToRgb } from '~/utils/hexToRgb';
import { rgbToHex } from '~/utils/rgbToHex';

export const generateShades = (color: string) => {
  if (!color) return [];
  const [r, g, b] = hexToRgb(color);

  // Generate shades
  const shades = <Array<string>>[];
  for (let i = 0; i < 10; i++) {
    shades.push(
      rgbToHex(
        Math.floor(r * (1 - i / 10)),
        Math.floor(g * (1 - i / 10)),
        Math.floor(b * (1 - i / 10))
      )
    );
  }

  return shades;
};
