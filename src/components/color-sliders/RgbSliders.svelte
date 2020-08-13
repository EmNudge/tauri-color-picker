<script>
  import ColorSlider from '../ColorSlider.svelte';
  import { colorStore, setRgb } from '../../stores/color';

  let r;
  let g;
  let b;
  $: {
    const { rgb } = $colorStore;
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  }

  function updateColor() {
    setRgb(r, g, b);
  }
</script>

<div class="rgb">
  <ColorSlider color="#ff5739" range={[0, 255]} bind:value={r} on:input={updateColor} />
  <ColorSlider color="#69c33d" range={[0, 255]} bind:value={g} on:input={updateColor} />
  <ColorSlider color="#41a5e1" range={[0, 255]} bind:value={b} on:input={updateColor} />
</div>