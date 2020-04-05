<script>
  import ColorSlider from './ColorSlider.svelte';

  export let r = 0;
  export let g = 0;
  export let b = 0;

  let h = 0;
  let s = 0;
  let l = 0;

  const hueBg = (() => {
    const colors = Array(10)
      .fill(null)
      .map((_, i, arr) => `hsl(${360/(arr.length - 1) * i}, 100%, 50%)`)
    
    return `linear-gradient(to right, ${colors.join(', ')})`;
  })()
</script>

<div class="colors">
  <div class="mode-selector">
  </div>
  <div class="rgb">
    <ColorSlider color="#ff5739" bind:value={r} />
    <ColorSlider color="#41a5e1" bind:value={g} />
    <ColorSlider color="#69c33d" bind:value={b} />
  </div>
  <div class="hsl">
    <ColorSlider color={hueBg} range={[0, 360]} bind:value={h} />
  </div>
</div>