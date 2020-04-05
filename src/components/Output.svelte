<script>
  import Input from './Input.svelte';
  import { rgbToHsl, rgbToHex } from '../utils/color'
  import IterButton from './IterButton.svelte';

  export let r = 0;
  export let g = 0;
  export let b = 0;

  let color = 'rgb(0, 0, 0)';
  let mode = 'rgb';
  $: {
    if (mode === 'hex') {
      color = rgbToHex(r, g, b);
    } else if (mode === 'rgb') {
      color = `rgb(${r}, ${g}, ${b})`;
    } else {
      const { h, s, l } = rgbToHsl(r, g, b);
      color = `hsl(${h}, ${s}%, ${l}%)`;
    }
  }

  function checkResult() {
    console.log('result checking')

    if (mode === 'rgb') {
      // first check if it's in a valid format
      const rgbRegepChecker = /rgb\( *\d+ *, *\d+ *, *\d+ *\)/;
      const isFormatted = Boolean(color.match(rgbRegepChecker));
      if (!isFormatted) return;

      // then we extract the colors
      const cols = [...color.match(/\d+/g)].map(n => Number(n));
      const [red, green, blue] = cols;
      // and finally update colors
      r = red;
      g = green;
      b = blue;
    } 
  }
</script>

<div class="output">
  <Input bind:value={color} on:input={checkResult} />
  <IterButton bind:value={mode} arr={['hex', 'rgb', 'hsl']} />
</div>