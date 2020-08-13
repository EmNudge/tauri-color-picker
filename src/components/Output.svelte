<script>
  import Input from './Input.svelte';
  import { rgbToHsl, rgbToHex, getRgbFromString } from '../utils/color'
  import IterButton from './IterButton.svelte';
  import { ColorMaster } from '../stores/color';

  let color = 'rgb(0, 0, 0)';
  let mode = 'rgb';

  // note this will run twice. Any change to colors will change both rgb and hex.
  // since this is a derived store, it will run subscribe once for each change.
  ColorMaster.colors.subscribe(({rgb, hsl}) => {
    const { r, g, b } = rgb;
    if (mode === 'hex') {
      color = rgbToHex(r, g, b);
    } else if (mode === 'rgb') {
      color = `rgb(${r}, ${g}, ${b})`;
    } else {
      const { h, s, l } = hsl;
      color = `hsl(${h % 360}, ${s}%, ${l}%)`;
    }
  });

  function checkResult(_e) {
    const rgb = getRgbFromString(color);
    if (!rgb) return;
    
    // do something
  }
</script>

<div class="output">
  <Input bind:value={color} on:input={checkResult} />
  <IterButton bind:value={mode} arr={['hex', 'rgb', 'hsl']} />
</div>