<script>
  import ColorSlider from '../ColorSlider.svelte';
  import { ColorMaster } from '../../stores/color';
  import { get } from 'svelte/store';

  let r;
  let g;
  let b;
  $: {
    const rgb = get(ColorMaster.rgb);
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  }

  function updateColorMaster() {
    ColorMaster.setRgb(r, g, b);
  }
</script>

<div class="rgb">
  <ColorSlider color="#ff5739" range={[0, 255]} bind:value={r} on:input={updateColorMaster} />
  <ColorSlider color="#69c33d" range={[0, 255]} bind:value={g} on:input={updateColorMaster} />
  <ColorSlider color="#41a5e1" range={[0, 255]} bind:value={b} on:input={updateColorMaster} />
</div>