<script>
	import ColorSlider from './components/ColorSlider.svelte'
	import Input from './components/Input.svelte'
	import { updateRootProp, toDarkMode, toLightMode } from './utils/cssVar';
	import { getRgbLightness, rgbToHex } from './utils/color';
	import Output from './components/Output.svelte';
	import ColorSliders from './components/ColorSliders.svelte';
	import { r, g, b } from './stores/color';

	function updateColors(r, g, b) {
		updateRootProp('--r', r);
		updateRootProp('--g', g);
		updateRootProp('--b', b);
	}
	updateColors($r, $g, $b);

	function updateLightness(r, g, b) {
		const lightness = getRgbLightness(r, g, b);
		if (lightness > .5) {
			toLightMode();
			return;
		}
		toDarkMode();
	}
	
	$: {
		updateColors($r, $g, $b);
		updateLightness($r, $g, $b);
	}
</script>

<main>
	<ColorSliders/>

	<Output />
</main>

<style>
	:global(:root) {
		--r: 0;
		--g: 0;
		--b: 0;
		--input-bg: #001;
		--color: black;
		--user-select: auto;
	} 
	:global(body) {
		background: rgb(
			var(--r),
			var(--g),
			var(--b)
		)
	}
</style>