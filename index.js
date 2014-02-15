function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	update(delta)
}

function update(delta) {

	toLetter -= delta;

	for(virus in viruses) {
		if(viruses.hasOwnProperty(virus)) {
			viruses[virus].cooldownLeft -= delta;
			$('div[data-virus-id=' + virus + ']').find('.overlay').text(viruses[virus].cooldownLeft > 0 ? Math.round(viruses[virus].cooldownLeft) : '');
		}
	}

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

				if($(this).position().top >= ($('#text').height() - 2 * $(this).height())) {
					canAppend = false;
					waitingForSpace = true;
				}
			});

			if(canAppend) {
				$('#text').append('<div class="line" style="top: ' + ($('#text').height() - 20) + 'px">' + newline.html() + '<div>');
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

	viruses = {}

	viruses.c = {
		letter: 'C',
		cooldown: 10,
		cooldownLeft: 0
	};

	viruses.d = {
		letter: 'D'
	};

	for(virus in viruses) {
		if(viruses.hasOwnProperty(virus)) {
			$('#buttons').append('<div class="button" data-virus-id="' + virus + '">' + viruses[virus].letter + '<div class="overlay"></div></div>');
		}
	}

	$('.button').click(function() {

		var virus = viruses[$(this).data('virus-id')]

		console.log(virus)

		if(virus.cooldownLeft > 0) {
			return;
		}

		virus.cooldownLeft = virus.cooldown;
		$(this).addClass('cooling-down');

		$('.line .letter').each(function(i, e) {
			if($(this).text() === virus.letter) {
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
});


function button1() {
	$('.line .letter').each(function(i, e) {
		if($(this).text() === 'C') {
			$(this).addClass('removed');
		}
	});
}

function button2() {
	$('.line .letter').each(function(i, e) {
		if($(this).text() !== 'C') {
			$(this).addClass('removed');
		}
	});
}

function button3() {
}

function button4() {
}

function button5() {
}