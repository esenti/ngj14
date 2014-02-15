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
			newline.html(newline.html() + '<span class="letter">' + String.fromCharCode(Math.random() * 90 + 32) + '</span>')
			// newline.html(newline.html() + '<span class="letter">' + (Math.random() < 0.9 ? 'C' : '?') + '</span>')
		}

		if((newline.children().length > 5 && Math.random() > 0.9) || waitingForSpace) {
			var canAppend = true;

			$('.line').each(function() {

				if($(this).position().top >= (600 - 2 * $(this).height())) {
					canAppend = false;
					waitingForSpace = true;
				}
			});

			if(canAppend) {
				$('#text').append('<div class="line" style="top: 580px">' + newline.html() + '<div>');
				newline.html('');
				waitingForSpace = false;
			}
		}

		$('.line').each(function() {
			if($(this).position().top <= 0) {
				$(this).remove();
			}
		});
	}

	$('.line').each(function() {
		$(this).offset({top: $(this).offset().top - 10 * delta});
	});


	window.requestAnimationFrame(frame);
}

$(function() {
	$('.button').click(function() {
		$('.line .letter').each(function(i, e) {
			if($(this).text() === 'C') {
				$(this).addClass('removed');
			}
		});

		$('.line').each(function(i, e) {
			var keep = false;

			$(this).find('.letter').each(function() {
				if(!$(this).hasClass('removed')) {
					keep = true;
				}
			});

			if(!keep) {
				$(this).remove();
			}
		});
	})

	now = then = Date.now();

	toLetter = 0;
	waitingForSpace = false;

	window.requestAnimationFrame(frame);
})