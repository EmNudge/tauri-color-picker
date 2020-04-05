<script>
  export let value;
</script>

<style>
  input {
    background: var(--input-bg);
    color: var(--color);
    border: none;
    padding: 5px 20px;
    outline: none;
    border-radius: 4px;

    transition: .3s;
    font-family: monospace;
    font-size: 1.2em;
  }
</style>

<input type="text" bind:value on:input />