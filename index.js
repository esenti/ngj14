
function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	currentState.update(delta)
}

GameState = {

	enter: function() {

		$('body').append('<div id="buttons"></div><div id="text"></div><div class="newline"></div>');

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
		})
	},

	exit: function() {
		$('body').html('');
	},

	update: function(delta) {

		toLetter -= delta;

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {
				viruses[virus].cooldownLeft -= delta;
				$('div[data-virus-id=' + virus + ']').find('.overlay').text(viruses[virus].cooldownLeft > 0 ? Math.ceil(viruses[virus].cooldownLeft) : '');
				if(viruses[virus].cooldownLeft <= 0) {
					$('div[data-virus-id=' + virus + ']').removeClass('cooling-down');
				}
			}
		}

		if(toLetter <= 0) {
			toLetter = 0.1;

			var newline = $('.newline')
			if(!waitingForSpace) {
				newline.html(newline.html() + '<span class="letter">' + getNextLetter() + '</span>')
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
}

$(function() {

	viruses = {}

	viruses.a = {
		name: 'A-Z + 0-9',
		removeAnimation: 'rotateOut',
		letter: true,
		numbers: true,
		cooldown: 5
	};

	viruses.b = {
		name: 'NOT A-Z',
		removeAnimation: 'fadeOutDown',
		nonLetter: true,
		cooldown: 15
	};

	viruses.c = {
		name: 'NOT A-Z + 0-9',
		nonLetter: true,
		numbers: true,
		removeAnimation: 'hinge',
		cooldown: 33
	};

	viruses.d = {
		name: '0-9',
		number: true,
		removeAnimation: 'rollOut',
		cooldown: 0.1
	};

	viruses.e = {
		name: 'Nothing',
		removeAnimation: 'flipOutY'
	};


	now = then = Date.now();

	toLetter = 0;
	waitingForSpace = false;

	currentState = GameState;

	GameState.enter();

	window.requestAnimationFrame(frame);
});

function getNextLetter() {
	return String.fromCharCode(Math.random() * 90 + 32);
}

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
	});
}

function isNumber($el, text) {
	return !isNaN(text);
}

function isLetter($el, text) {
	return !isNumber() && text.toUpperCase() !== text.toLowerCase();
}


function launchVirus(virus) {

	forEveryLetter( function($el, text) {

		if ((virus.letter && isLetter($el, text)) ||
		    (virus.nonLetter && !isLetter($el, text)) ||
			(virus.number && isNumber($el, text)) ||
			(virus.notNumber && !isNumber($el, text))) {
			removeWithAnimation(virus.removeAnimation);
			return;
		}

	});

}