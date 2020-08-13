export default function restrictInput(node, restrictFunc) {
  let lastGoodValue = node.value;
	
	function handleInput(e) {
    const val = e.target.value

		if (restrictFunc(val)) {
			lastGoodValue = val;
			return;
		}
		e.preventDefault();
    node.value = lastGoodValue;
	}
	
	node.addEventListener('input', handleInput);
	
	return () => {
		node.removeEventListener('input', handleInput);
	}
}