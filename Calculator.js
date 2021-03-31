function add(x) {
	document.form.text.value += x
}

function remove() {
	var y = document.form.text.value
	document.form.text.value = y.substring(0, y.length-1)
}

function del() {
	document.form.text.value = ''
}