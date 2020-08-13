<script>
  import ColorSlider from '../ColorSlider.svelte';
  import { ColorMaster } from '../../stores/color';
  import { get } from 'svelte/store';
  
  let h;
  let s;
  let l;
  $: {
    const hsl = get(ColorMaster.hsl);
    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
  }

  function updateColorMaster() {
    ColorMaster.setHsl(h, s, l);
  }

  function getBg(gradients, func) {
    const colors = Array(10)
      .fill(null)
      .map((_, i, arr) => func(i, gradients));

    return `linear-gradient(to right, ${colors.join(', ')})`;
  }

  $: hueBg = getBg(10, i => `hsl(${360/9 * i}, ${s}%, ${l}%)`);
  $: satBg = getBg(10, i => `hsl(${h}, ${100/9 * i}%, ${l}%)`);
  $: lightBg = getBg(10, i => `hsl(${h}, ${s}%, ${100/9 * i}%)`);
</script>

<div class="hsl">
  <ColorSlider color={hueBg} range={[0, 360]} bind:value={h} on:input={updateColorMaster} />
  <ColorSlider color={satBg} range={[0, 100]} bind:value={s} on:input={updateColorMaster} />
  <ColorSlider color={lightBg} range={[0, 100]} bind:value={l} on:input={updateColorMaster} />
</div>