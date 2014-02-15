GameState = {

	enter: function() {

		$('body').append('<div id="buttons"></div><div id="life"></div><div id="text"></div><div class="newline"></div>');

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {

				var strType = viruses[virus].typeString;
				var strProbability = viruses[virus].probability ? viruses[virus].probability + '%' : '';
				var strName = viruses[virus].name;
				var strDirection = viruses[virus].removeFront ? (viruses[virus].removeBack ? "both" : "front") : "back";
				var strCooldown = viruses[virus].cooldown > 9999 ? '&infin;' : viruses[virus].cooldown + 's';
				var strPercent = 0;

				var newButton = '<a href="#" data-virus-id="' + virus + '" class="button blue">' +
					'<div class="cldwrapper cooldown" style="background: -moz-linear-gradient(left, rgba(255,0,0,0) ' + strPercent + '%, rgba(255,0,0,0.5)' + (strPercent + 2) + '%, rgba(255,0,0,0.7) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, right top, color-stop(' + strPercent + '%,rgba(255,0,0,0)), color-stop(' + (strPercent + 2) + '%,rgba(255,0,0,0.5)), color-stop(100%,rgba(255,0,0,0.7))); /* Chrome,Safari4+ */">' +
					'<table><tr><td class="bttopleft">' + strType +
					'</td><td class="bttopright">' + strProbability + '</td></tr>' +
					'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
					'<tr><td class="bttopleft">' + strDirection + '</td>' +
					'<td class="btbottomright">' + strCooldown + '</td></tr></table></div></a>';


				$('#buttons').append(newButton);

				viruses[virus].cooldownLeft = 0;
			}
		}

		$('.button').click(function() {

			var virus = viruses[$(this).data('virus-id')]

			console.log(virus)

			if (virus.cooldownLeft > 0) {
				return;
			}

			virus.cooldownLeft = virus.cooldown;
			$(this).addClass('cooling-down');

			launchVirus(virus);
		})

		this.life = startLife;
		this.outOfLetters = false;
		this.letterIterator = getLetterIterator(0);
	},

	exit: function() {
		$('body').html('');
	},

	update: function(delta) {

		var self = this;

		toLetter -= delta;

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {
				viruses[virus].cooldownLeft -= delta;

				var strPercent = (!viruses[virus].cooldown) ? 100 : (100 - (viruses[virus].cooldownLeft / viruses[virus].cooldown) * 100);
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

		if(toLetter <= 0) {
			toLetter = gameSpeed;

			var newline = $('.newline')
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

			$('.line').each(function() {
				if($(this).position().top <= 0) {
					wwords = $(this).find('.alive:not(.removed)');
					wwordsHot = $(this).find('.alive.hot:not(.removed)');
					self.life -= wwords.length;
					self.life -= wwordsHot.length * 10;
					$(this).remove();
				}
			});
		}

		$('#life').text(this.life);

		if(this.life <= 0) {
			setState(MenuState);
		}

		if($('.line').find('.letter:not(.removed)').length == 0 && this.outOfLetters) {
			setState(AlbumState);
		}

		window.requestAnimationFrame(frame);
	}
}