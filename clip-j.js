function copy(text) {
	var copyElement = document.createElement('input');
	copyElement.setAttribute('type', 'text');
	copyElement.setAttribute('value', text);
	copyElement = document.body.appendChild(copyElement);
	copyElement.select();
	document.execCommand('copy');
	copyElement.remove();
}
