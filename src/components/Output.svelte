<script>
  import Input from './Input.svelte';
  import { rgbToHsl, rgbToHex, getRgbFromString } from '../utils/color'
  import IterButton from './IterButton.svelte';
  import { ColorMaster } from '../stores/color';
import { derived } from 'svelte/store';

  let color = 'rgb(0, 0, 0)';
  let mode = 'rgb';
  let rgb;
  let hsl;
  
  // note this will run twice when colors change.
  ColorMaster.colors.subscribe(colors => {
    rgb = colors.rgb;
    hsl = colors.hsl;
  });

  $: {
    const { r, g, b } = rgb;
    if (mode === 'hex') {
      color = rgbToHex(r, g, b);
    } else if (mode === 'rgb') {
      color = `rgb(${r}, ${g}, ${b})`;
    } else {
      const { h, s, l } = hsl;
      color = `hsl(${h % 360}, ${s}%, ${l}%)`;
    }
  }

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