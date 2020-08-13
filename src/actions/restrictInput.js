export default function restrictInput(node, restrictFunc) {
  let lastGoodValue = node.value;
	
	let selectRange = [0, 0];

	function handleInput(e) {
    const val = e.target.value;

		if (restrictFunc(val)) {
			lastGoodValue = val;
			handleSelect(e);
			return;
		}

		e.preventDefault();
		node.value = lastGoodValue;
		node.setSelectionRange(...selectRange);
	}
	
	function handleSelect(e) {
		selectRange = [node.selectionStart, node.selectionEnd];
	}
	
	node.addEventListener('input', handleInput);
	
	node.addEventListener('select', handleSelect);
	node.addEventListener('click', handleSelect);
	node.addEventListener('keydown', handleSelect);
	
	return () => {
		node.removeEventListener('input', handleInput);

		node.removeEventListener('select', handleSelect);
		node.removeEventListener('click', handleSelect);
		node.removeEventListener('keydown', handleSelect);
	}
}