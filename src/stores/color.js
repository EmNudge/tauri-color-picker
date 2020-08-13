import { writable, get, derived } from 'svelte/store';
import { rgbToHsl, hslToRgb } from './../utils/color';

const rgb = writable({ r: 57, g: 126, b: 98 });
const hsl = writable({ h: 156, s: 38, l: 36 })
export const ColorMaster = {
  rgb,
  hsl,
  // lets users subscribe to when either one changes
  colors: derived([rgb, hsl], ([rgb, hsl]) => ({ rgb, hsl })),

  setRgb(r, g, b) {
    this.rgb.set({ r, g, b });
    const hsl = rgbToHsl(r, g, b);
    this.hsl.set(hsl);
  },
  setHsl(h, s, l) {
    this.hsl.set({ h, s, l });
    const rgb = hslToRgb(h, s, l);
    this.rgb.set(rgb);
  }
}