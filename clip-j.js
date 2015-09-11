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
function clipImage(imgsrc) {
	var canvas = document.createElement('canvas');
	var img = document.createElement('img');
	img.setAttribute('src', imgsrc);
	document.body.appendChild(img);
	canvas.width = img.clientWidth;
	canvas.height = img.clientHeight;
	var idc = canvas.getContext('2d');
	idc.drawImage(imgsrc, 0, 0);
	var imgd = canvas.toDataURL();
	img.remove();
	clip(imgd);
}
