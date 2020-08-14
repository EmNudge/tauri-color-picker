<script>
  import Slider from './Slider.svelte';
  import NumberInput from './NumberInput.svelte';
  
  export let color;
  export let value = 0;
  export let range = [0, 255];
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 80px;
    grid-gap: 10px;
  }
</style>

<div>
  <Slider {color} bind:value {range} on:input />
  <NumberInput bind:value on:input />
</div>