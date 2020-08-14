<script>
  import IterButton from './IterButton.svelte';
  import HslSliders from './color-sliders/HslSliders.svelte';
  import RgbSliders from './color-sliders/RgbSliders.svelte';
  import { hslToRgb, rgbToHsl } from '../utils/color'

  let mode = 'rgb';
</script>

<div class="colors">
  <IterButton arr={['rgb', 'hsl']} bind:value={mode} />
  {#if mode === 'hsl'}
    <HslSliders />
  {:else if mode === 'rgb'}
    <RgbSliders />
  {/if}
</div>