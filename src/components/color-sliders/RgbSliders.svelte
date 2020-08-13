<script>
  import ColorSlider from '../ColorSlider.svelte';
  import { r, g, b } from '../../stores/color';

  $: {
    console.log({ r: $r, g: $g, b: $b })
  }
</script>

<div class="rgb">
  <ColorSlider color="#ff5739" bind:value={$r} />
  <ColorSlider color="#69c33d" bind:value={$g} />
  <ColorSlider color="#41a5e1" bind:value={$b} />
</div>