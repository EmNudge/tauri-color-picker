<script>
  import { createEventDispatcher } from "svelte";
  import { remap, roundStep, clamp } from "../utils/general";

  const dispatch = createEventDispatcher();

  export let color;
  export let value = 0;
  export let step = 1;
  export let range = [0, 100];

  const HANDLE_WIDTH = 20;

  let sliderEl;
  $: pos = remap(value, range, [0, 100]);

  let isDragging = false;

  function handleMouseDown(e) {
    isDragging = true;
    updatePos(e);
  }
  function handleMouseUp() {
    isDragging = false;
  }

  function handleHover(e) {
    if (!isDragging) return;

    updatePos(e);
  }

  function updatePos(e) {
    const mousePos = e.clientX - HANDLE_WIDTH/2 - sliderEl.offsetLeft;
    const totalWidth = sliderEl.offsetWidth;
    const percentage = mousePos / totalWidth;
    const clampedPerc = clamp(percentage * 100, [0, 100]);

    const val = roundStep(percentage * range[1] + range[0], step);
    value = clamp(val, range);

    dispatch('input', value);
  }
</script>

<svelte:window on:mousemove={handleHover} on:mouseup={handleMouseUp} />

<style>
  .slider {
    position: relative;
    display: flex;
    align-items: center;
  }

  .handle {
    background: white;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin-right: 10px; 

    position: relative;
  }

  .bg-container {
    position: absolute;
    top: 0; left: 0; 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: -1;
  }
  .bg {
    height: 10px;
    width: 100%;
    border-radius: 10px;
  }
</style>

<div class="slider" bind:this={sliderEl} on:mousedown={handleMouseDown}>
  <div class="bg-container">
    <div class="bg" style="background: {color}"></div>
  </div>
  <div class="handle" style="left: {pos}%"></div>
</div>