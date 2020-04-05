<script>
  import ColorSlider from '../ColorSlider.svelte';
  import { r, g, b } from '../../stores/color';
  import { hslToRgb, rgbToHsl } from '../../utils/color'

  let h;
  let s;
  let l;
  updateHSL($r, $g, $b);
  $: updateHSL($r, $g, $b);
  $: updateRgb(h, s, l);
  
  function updateRgb(h, s, l) {
    const { r: red, g: green, b: blue } = hslToRgb(h, s, l);
    $r = Math.round(red);
    $g = Math.round(green);
    $b = Math.round(blue);
  }

  function updateHSL(r, g, b) {
    const { h: hue, s: sat, l: light } = rgbToHsl(r, g, b);
    h = hue;
    s = sat;
    l = light;
  }

  function getBg(gradients, func) {
    const colors = Array(10)
      .fill(null)
      .map((_, i, arr) => func(i, gradients));

    return `linear-gradient(to right, ${colors.join(', ')})`;
  }

  $: hueBg = getBg(10, i => `hsl(${360/9 * i}, ${s}%, ${l}%)`);
  $: satBg = getBg(10, i => `hsl(${h}, ${360/9 * i}%, ${l}%)`);
  $: lightBg = getBg(10, i => `hsl(${h}, ${s}%, ${360/9 * i}%)`);
</script>

<div class="hsl">
  <ColorSlider color={hueBg} range={[0, 360]} bind:value={h} />
  <ColorSlider color={satBg} range={[0, 100]} bind:value={s} />
  <ColorSlider color={lightBg} range={[0, 100]} bind:value={l} />
</div>