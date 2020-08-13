<script>
  import Input from './Input.svelte';
  import { rgbToHsl, rgbToHex, getRgbFromString } from '../utils/color'
  import IterButton from './IterButton.svelte';
  import { colorStore, setRgb } from '../stores/color';
  import { objEquals } from '../utils/general';

  let color = 'rgb(0, 0, 0)';
  let mode = 'rgb';
  let rgb;
  let hsl;

  let stopColorEdit = false;
  
  let unsubscribe
  // note this will run twice when colors change.
  colorStore.subscribe(colors => {
    if (stopColorEdit) {
      stopColorEdit = false;
      return;
    }
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
    const derivedRgb = getRgbFromString(_e.target.value);
    if (!derivedRgb) return;
    
    stopColorEdit = true;
    const { r, g, b } = derivedRgb;
    setRgb(r, g, b);
  }
</script>

<div class="output">
  <Input value={color} on:input={checkResult} />
  <IterButton bind:value={mode} arr={['hex', 'rgb', 'hsl']} />
</div>