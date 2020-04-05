<script>
  import IterButton from './IterButton.svelte';
  import HslSliders from './color-sliders/HslSliders.svelte';
  import RgbSliders from './color-sliders/RgbSliders.svelte';

  let mode = 'rgb';
</script>

<div class="colors">
  <IterButton arr={['hsl', 'rgb']} bind:value={mode} />
  {#if mode === 'hsl'}
    <HslSliders />
  {:else if mode === 'rgb'}
    <RgbSliders />
  {/if}
</div>