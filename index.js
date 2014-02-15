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

	viruses.a = {
		name: 'Letters',
		removeAnimation: 'flipOutY',
		letter: true,
		cooldown: 5,
		cooldownLeft: 0
	};

	viruses.b = {
		name: 'Non letters',
		removeAnimation: 'fadeOutDown',
		nonLetter: true,
		cooldown: 15,
		cooldownLeft: 0
	};

	viruses.c = {
		name: 'Nothing'
	};

	for(virus in viruses) {
		if(viruses.hasOwnProperty(virus)) {
			$('#buttons').append('<div class="button" data-virus-id="' + virus + '">' + viruses[virus].name + '<div class="overlay"></div></div>');
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

		launchVirus(virus);

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

function forEveryLetter(callback) {
	$('.line .letter').each(function(i, e) {
		$el = $(this);
		text = $el.text();
		callback($el, text);
	});
}

function removeWithAnimation(animation) {
	$el.animateCSS(animation, 0, function(a) {
		$(this).addClass("removed");
	});
}

function isLetter($el, text) {
	return text.toUpperCase() !== text.toLowerCase();
}


function launchVirus(virus) {
	forEveryLetter( function($el, text) {

		if (virus.letter) {
			if (isLetter($el, text)) {
				removeWithAnimation(virus.removeAnimation);
				return;
			}
		}

		if (virus.nonLetter) {
			if (!isLetter($el, text)) {
				removeWithAnimation(virus.removeAnimation);
				return;
			}
		}

	});
}


