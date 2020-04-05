<script>
  import Slider from './Slider.svelte';
  import Input from './Input.svelte';
  
  export let color;
  export let value = 0;
  export let range = [0, 255];

  let sliderVal = 0;

  let lastGoodValue = 0;
  $: {
    const num = parseInt(value);

    if (isNaN(Number(value)) || num < range[0] || num > range[1]) {
      value = lastGoodValue;
    } else {
      lastGoodValue = value = num || 0; 
    }
  }

  const updateSliderVal = val => sliderVal = val / range[1];
  $: updateSliderVal(value)
  const updateInputValue = val => value = Math.round(range[1] * (val / 100));
  $: updateInputValue(sliderVal)
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 80px;
    grid-gap: 10px;
  }
</style>

<div>
  <Slider {color} bind:value={sliderVal} />
  <Input bind:value />
</div>