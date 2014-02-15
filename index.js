function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	update(delta)
}

function update(delta) {

	toLetter -= delta;

	if(toLetter <= 0) {
		toLetter = 0.1;

		var newline = $('.newline')
		if(!waitingForSpace) {
			newline.html(newline.html() + '<span class="letter">' + String.fromCharCode(Math.random() * 65 + 32) + '</span>')
		}

		if((newline.children().length > 5 && Math.random() > 0.9) || waitingForSpace) {
			var canAppend = true;

			$('.line').each(function(i, e) {
				if($(this).position().top >= 518) {
					canAppend = false;
					waitingForSpace = true;
				}
			});

			if(canAppend) {
				$('#text').append('<div class="line" style="top: 560px">' + newline.html() + '<div>');
				newline.html('');
				waitingForSpace = false;
			}
		}

		$('.line').each(function(i, e) {
			if($(this).position().top <= 0) {
				$(this).remove();
			}
		});
	}

	$('.line').each(function(i, e) {
		$(this).offset({top: $(this).offset().top - 10 * delta});
	});


	window.requestAnimationFrame(frame);
}

$(function() {
	now = then = Date.now();

	toLetter = 0;
	waitingForSpace = false;

	window.requestAnimationFrame(frame);
})