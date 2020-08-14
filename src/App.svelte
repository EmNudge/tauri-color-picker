<script>
	import { updateRootProp, toDarkMode, toLightMode } from './utils/cssVar';
	import { getRgbLightness } from './utils/color';
	import Output from './components/Output.svelte';
	import ColorSliders from './components/ColorSliders.svelte';
	import { colorStore } from './stores/color';

	colorStore.subscribe(color => {
		const { r, g, b } = color.rgb;
		
		updateRootProp('--r', r);
		updateRootProp('--g', g);
		updateRootProp('--b', b);

		updateLightness(r, g, b)
	});

	function updateLightness(r, g, b) {
		const lightness = getRgbLightness(r, g, b);
		if (lightness > .5) {
			toLightMode();
			return;
		}
		toDarkMode();
	}
</script>

<main>
	<ColorSliders />

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