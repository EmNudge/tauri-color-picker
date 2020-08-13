<script>
  import IterButton from './IterButton.svelte';
  import HslSliders from './color-sliders/HslSliders.svelte';
  import RgbSliders from './color-sliders/RgbSliders.svelte';
  import { hslToRgb, rgbToHsl } from '../utils/color'

  let mode = 'rgb';
  export let r;
  export let g;
  export let b;
  let h;
  let s;
  let l;

  function onRgbChange() {
    const hslObj = rgbToHsl(r, g, b);
    h = hslObj.h; 
    s = hslObj.s; 
    l = hslObj.l; 
  }
  function onHslChange() {
    const rgbObj = hslToRgb(h, s, l);
    r = ~~rgbObj.r;
    g = ~~rgbObj.g;
    b = ~~rgbObj.b;
  }
</script>

<div class="colors">
  <IterButton arr={['hsl', 'rgb']} bind:value={mode} />
  {#if mode === 'hsl'}
    <HslSliders bind:h bind:s bind:l on:input={onHslChange} />
  {:else if mode === 'rgb'}
    <RgbSliders bind:r bind:g bind:b on:input={onRgbChange} />
  {/if}
</div>