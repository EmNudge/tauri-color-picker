export function getRgbLightness(r, g, b) {
  const minAndMax = Math.max(r, g, b) + Math.min(r, g, b);
  return minAndMax / 2 / 255;
}

const getHex = num => num.toString(16).padStart(2, '0');
export function rgbToHex(r, g, b) {
  return `#${getHex(r)}${getHex(g)}${getHex(b)}`.toUpperCase();
}

export function rgbToHsl(r, g, b) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const cMax = Math.max(red, green, blue);
  const cMin = Math.min(red, green, blue);
  const delta = cMax - cMin;

  function getHue() {
    if (delta === 0) return 0;

    if (cMax === red) {
      return ((green - blue) / delta) % 6;
    }
    if (cMax === green) {
      return ((blue - red) / delta) + 2;
    } 
    return ((red - green) / delta) + 4;
  }

  const lightness = getRgbLightness(r, g, b);

  function getSaturation() {
    if (delta === 0) return 0;
    const denom = 1 - Math.abs((2 * lightness) - 1);
    return delta / denom;
  }

  const hue = Math.round(60 * getHue());

  return  {
    h: hue < 0 ? 360 - hue : hue,
    s: Math.round(getSaturation() * 100),
    l: Math.round(lightness * 100),
  };
}

// algorithm from https://www.rapidtables.com/convert/color/hsl-to-rgb.html
function hslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * (l/100) - 1)) * (s/100);

  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));

  const m = (l/100) - c / 2;

  function getRgb() {
    if (hue < 60) return [c, x, 0];
    if (hue < 120) return [x, c, 0];
    if (hue < 180) return [0, c, x];
    if (hue < 240) return [0, x, c];
    if (hue < 300) return [x, 0, c];
    if (hue < 360) return [c, 0, x];
  }

  const [r, g, b] = getRgb().map(n => (n + m) * 255);

  return { r, g, b }
}