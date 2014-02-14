function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	update(delta)
}

function update(delta) {

	toLetter -= delta;

	if(toLetter <= 0) {
		toLetter = 0.3;

		var newline = $('.newline')
		newline.html(newline.html() + '<span>a</span>')
		if(newline.children().length > 20) {
			$('#text').append('<div class="line">' + newline.html() + '<div>');
			newline.html('');
		}
	}


	window.requestAnimationFrame(frame);
}

$(function() {
	now = then = Date.now();

	toLetter = 0;

	window.requestAnimationFrame(frame);
})