<script>
  import ColorSlider from '../ColorSlider.svelte';
  
  export let h;
  export let s;
  export let l;

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
  <ColorSlider color={hueBg} range={[0, 360]} bind:value={h} on:input />
  <ColorSlider color={satBg} range={[0, 100]} bind:value={s} on:input />
  <ColorSlider color={lightBg} range={[0, 100]} bind:value={l} on:input />
</div>