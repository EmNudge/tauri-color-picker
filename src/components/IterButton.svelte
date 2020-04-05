<script>
  export let arr = ['button'];
  export let value = arr[0];

  function* InfIter() {
    while (true) yield* arr;
  }
  const iter = InfIter();


  function moveIter() {
    value = iter.next().value;
  }
</script>

<style>
  button {
    border: none;
    background: none;
    outline: none;
    color: var(--color);

    font-weight: bolder;
    font-family: monospace;
  }
  button:active {
    background: var(--input-bg);
  }
</style>

<button on:click={moveIter} on:click>{value}</button>