<script>
  import ColorSlider from '../ColorSlider.svelte';

  // we use props instead of stores
  export let r;
  export let g;
  export let b;
</script>

<div class="rgb">
  <ColorSlider color="#ff5739" range={[0, 255]} bind:value={r} on:input />
  <ColorSlider color="#69c33d" range={[0, 255]} bind:value={g} on:input />
  <ColorSlider color="#41a5e1" range={[0, 255]} bind:value={b} on:input />
</div>