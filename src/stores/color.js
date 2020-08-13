import { writable, get, derived } from 'svelte/store';
import { rgbToHsl, hslToRgb } from './../utils/color';

export const colorStore = writable({ 
  rgb: { r: 57, g: 126, b: 98 }, 
  hsl: { h: 156, s: 38, l: 36 }
});

export function setRgb(r, g, b) {
  const rgb = { r, g, b };
  const hsl = rgbToHsl(r, g, b);

  colorStore.set({ rgb, hsl });
}

export function setHsl(h, s, l) {
  const hsl = { h, s, l };
  const rgb = hslToRgb(h, s, l);

  colorStore.set({ rgb, hsl });
}