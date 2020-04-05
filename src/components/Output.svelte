<script>
  import Input from './Input.svelte';
  import { rgbToHsl, rgbToHex, getRgbFromString } from '../utils/color'
  import IterButton from './IterButton.svelte';
  import { r, g, b } from '../stores/color';

  let color = 'rgb(0, 0, 0)';
  let mode = 'rgb';
  $: {
    if (mode === 'hex') {
      color = rgbToHex($r, $g, $b);
    } else if (mode === 'rgb') {
      color = `rgb(${$r}, ${$g}, ${$b})`;
    } else {
      const { h, s, l } = rgbToHsl($r, $g, $b);
      color = `hsl(${h % 360}, ${s}%, ${l}%)`;
    }
  }

  function checkResult(e) {
    const col = e.target.value;

    const rgb = getRgbFromString(col, mode);
    if (!rgb) return;
    
    const { r: red, g: green, b: blue } = rgb;
    $r = red;
    $g = green;
    $b = blue;
  }
</script>

<div class="output">
  <Input bind:value={color} on:input={checkResult} />
  <IterButton bind:value={mode} arr={['hex', 'rgb', 'hsl']} />
</div>