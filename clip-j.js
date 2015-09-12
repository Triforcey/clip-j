function clip(text) {
	var copyElement = document.createElement('input');
	copyElement.setAttribute('type', 'text');
	copyElement.setAttribute('value', text);
	copyElement = document.body.appendChild(copyElement);
	copyElement.select();
	try {
		document.execCommand('copy');
	} catch (e) {
		copyElement.remove();
		console.log("document.execCommand('copy'); is not supported");
		prompt('Copy the text below. (ctrl c, enter)', text);
	} finally {
		if (typeof e == 'undefined') {
			copyElement.remove();
		}
	}
}
/*function clipImage(imgsrc) {
	var canvas = document.createElement('canvas');
	var img = new Image();
	img.setAttribute('crossOrigin', 'anonymous');
	img.src = imgsrc;
	img.onload = function() {
		canvas.width = img.width;
		canvas.height = img.height;
		var idc = canvas.getContext('2d');
		idc.drawImage(img, 0, 0);
		var text = canvas.toDataURL('image/png');
		var copyElement = document.createElement('input');
		copyElement.setAttribute('type', 'text');
		copyElement.setAttribute('value', text);
		copyElement = document.body.appendChild(copyElement);
		copyElement.select();
		try {
			document.execCommand('copy');
		} catch (e) {
			copyElement.remove();
			console.log("document.execCommand('copy'); is not supported");
			prompt('Copy the text below. (ctrl c, enter)', text);
		} finally {
			if (typeof e == 'undefined') {
				copyElement.remove();
			}
		}
	};
}*/
