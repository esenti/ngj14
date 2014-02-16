GameState = {

	enter: function(viruses, level) {

		startTime = Date.now();

		console.log('Level ' + level + ', bitches!')

		this.level = level;

		$('body').append('<div class="cables"><div class="cable"></div><div class="cable2"></div><div class="cable cable3"></div><div class="cable2 cable4"></div><div class="cable cable5"></div><div class="cable2 cable6"></div></div><div id="awrapper"><div id="buttons"></div><div id="text"><div id="counters"><div id="life"></div><div id="time"></div></div><div id="screen1"></div></div><div class="newline"></div></div>');

		this.viruses = viruses;
		var self = this;

		for(virus in self.viruses) {
			if(self.viruses.hasOwnProperty(virus)) {
				$('#buttons').append(makeButton(viruses[virus], virus));

				self.viruses[virus].cooldownLeft = 0;
			}
		}

		$('.button').click(function(e) {

			var virus = self.viruses[$(this).data('virus-id')]

			console.log(virus)

			if (virus.cooldownLeft > 0) {
				virus.cooldownLeft = virus.cooldown;
				return;
			}

			virus.cooldown += 1;
			virus.cooldownLeft = virus.cooldown;

			var strCooldown = virus.cooldown > 9999 ? '&infin;' : virus.cooldown + 's';
			$(e.target).find('.cooldownStr').text(strCooldown);

			$(this).addClass('cooling-down');


			launchVirus(virus);
		})

		this.life = startLife;
		this.outOfLetters = false;
		this.letterIterator = getLetterIterator(this.level);


		if (isMulti) {
			$(document).keypress( function(e) {
				var newline = $('.newline');
				if (e.charCode >= 32 && e.charCode <= 122) {
					var nextLetter = String.fromCharCode(e.charCode);
					newline.html(newline.html() + '<span class="letter '+ ((nextLetter != ' ') ? 'alive' : '') + ' ' + (isInSnowmanState ? 'hot' : '') + '">' + nextLetter + '</span>');
				}

				if (newline.children().length > 30) {
					nextLetter = '\n';
				}


				if((newline.children().length > 5 && nextLetter == '\n') || waitingForSpace || nextLetter == undefined) {
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
						$('.line').last().animate({top: 0}, gameTime, 'linear');
						waitingForSpace = false;
					}
				}
			});
		}

	},

	exit: function() {
		$('body').html('');
	},

	update: function(delta) {

		var self = this;

		toLetter -= delta;

		for(virus in self.viruses) {
			if(self.viruses.hasOwnProperty(virus)) {
				self.viruses[virus].cooldownLeft -= delta;

				var strPercent = (!self.viruses[virus].cooldown) ? 100 : (100 - (self.viruses[virus].cooldownLeft / self.viruses[virus].cooldown) * 100);
				strPercent = Math.min(100, Math.max(0, strPercent));

				$el = $("#buttons [data-virus-id='" + virus + "'] .cldwrapper");
				$el.attr('style', 'background: -moz-linear-gradient(left, rgba(255,0,0,0) ' + strPercent + '%, rgba(255,0,0,0.5)' + (strPercent + 2) + '%, rgba(255,0,0,0.7) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, right top, color-stop(' + strPercent + '%,rgba(255,0,0,0)), color-stop(' + (strPercent + 2) + '%,rgba(255,0,0,0.5)), color-stop(100%,rgba(255,0,0,0.7))); /* Chrome,Safari4+ */">');

				if (strPercent < 100) {
					$el.addClass('cooldown');
				} else {
					$el.removeClass('cooldown');
				}

			}
		}

		if(!isMulti && toLetter <= 0) {
			toLetter = gameSpeed;

			var newline = $('.newline');
			var nextLetter = '';
			if(!waitingForSpace) {
				nextLetter = self.letterIterator();
				if(nextLetter == undefined) {
					this.outOfLetters = true;
				}

				if (nextLetter != '\n' && nextLetter != undefined) {
					newline.html(newline.html() + '<span class="letter '+ ((nextLetter != ' ') ? 'alive' : '') + ' ' + (isInSnowmanState ? 'hot' : '') + '">' + nextLetter + '</span>');
				}
			}

			if((newline.children().length > 5 && nextLetter == '\n') || waitingForSpace || nextLetter == undefined) {
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
					$('.line').last().animate({top: 0}, gameTime, 'linear');
					waitingForSpace = false;
				}
			}
		}

		$('.line').each(function() {
			if($(this).position().top <= 0) {
				wwords = $(this).find('.alive:not(.removed)');
				wwordsHot = $(this).find('.alive.hot:not(.removed)');
				self.life -= wwords.length;
				self.life -= wwordsHot.length * 10;
				$(this).remove();
			}
		});

		$('#life').text(this.life + '❤');

		var timeInSec = Date.now() - startTime;

		$('#time').text((timeInSec / 1000).toFixed(2) + 's');


		if(this.life <= 0) {
			setState(MenuState);
		}

		if($('.line').find('.letter:not(.removed)').length == 0 && this.outOfLetters) {
			setState(AlbumState);
		}

		window.requestAnimationFrame(frame);
	}
}