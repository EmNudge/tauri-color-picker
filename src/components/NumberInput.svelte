<script>
  import restrictInput from "../actions/restrictInput";

  export let value = 0;
  export let range = [-Infinity, Infinity];

  function restrictor(val) {
    if (isNaN(Number(val))) return false;
    return val > range[0] && val < range[1];
  }

  function handleKeyDown(e) {
    if (!e.key.includes("Arrow")) return;
    if (e.key === "ArrowUp") value++;
    if (e.key === "ArrowDown") value--;
  }
</script>

<style>
  input {
    background: var(--input-bg);
    color: var(--color);
    border: none;
    padding: 5px 20px;
    outline: none;
    border-radius: 4px;

    transition: 0.3s;
    font-family: monospace;
    font-size: 1.2em;
  }
</style>

<input
  type="text"
  bind:value
  on:input
  use:restrictInput={restrictor}
  on:keydown={handleKeyDown} />
