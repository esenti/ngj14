AlbumState = {
	enter: function() {
		$('body').append('<div id="album"></div><div id="details"><div id="atext"><div id="ascreen"></div></div><a class="button glass back xl takeuntake ' + (virus.taken ? 'untake' : 'take') + '">' + (virus.taken ? 'untake' : 'take') + '</a><a class="button glass shield xl start">start</a></div>');

		var self = this;

		if(typeof self.taken === 'undefined') {
			self.taken = 0;
		}

		self.virusesCount = 0;

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {
				$('#album').append(makeButton(viruses[virus], virus, true));
				self.virusesCount++;
			}
		}

		$('#ascreen').html("<p style='margin: 20px 15px; line-height: 22px;'>Select up to five viruses.</p>");

		if(!((self.taken < 5 && self.virusesCount >= 5) || (self.virusesCount < 5 && self.taken !== self.virusesCount))) {
			$('.start').addClass('orange');
		}

		$('#album .button').click(function() {

			var virus = viruses[$(this).data('virus-id')]

			var virusParams = "<ul id=aul>";

			var kills = "";
			if (virus.letter) {
				if (virus.letter !== true) {
					kills += virus.letter + "s";
				} else {
					kills += "letters";
				}
			}

			if (virus.number) {
				if (kills != "") {
					kills += ", ";
				}
				kills += "numbers";
			}

			if (virus.nonLetter) {
				if (kills != "") {
					kills += ", ";
				}
				kills += "others";
			}

			virusParams += "<li><big class='invert'>" + virus.name + "</big></li>";

			virusParams += "<li><em>" + virus.typeString + "</em></li>";

			if (virus.cooldown > 9999)
				virusParams += "<li>Only once</li>";
			else
				virusParams += "<li>Cooldown:" + virus.cooldown + "s</li>";

			if (virus.probability)
				virusParams += "<li>Efficenty: " + virus.probability + "%</li>";

			virusParams += "<li>Kills: " + kills + "</li>";

			if (virus.removeFront)
				virusParams += "<li>Remove first " + virus.removeFront + " characters</li>";

			if (virus.removeBack)
				virusParams += "<li>Remove last " + virus.removeBack + " characters</li>";

			virusParams += "</ul>";

			$('#ascreen').html(virusParams);

			self.selectedVirus = virus;
			self.selectedVirusId = $(this).data('virus-id');

			if(virus.taken) {
				$('.takeuntake').text('untake');
				$('.takeuntake').addClass('untake');
				$('.takeuntake').removeClass('take');
			} else {
				$('.takeuntake').text('take');
				$('.takeuntake').addClass('take');
				$('.takeuntake').removeClass('untake');
			}

			$('.takeuntake').addClass('orange');
		});

		$('#details').on('click', '.take', function() {
			if(self.taken < 5) {
				self.selectedVirus.taken = true;
				$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('green');
				$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('blue');
				$(this).removeClass('take');
				$(this).addClass('untake');
				$('.takeuntake').text('untake');
				self.taken += 1;

				if(!((self.taken < 5 && self.virusesCount >= 5) || (self.virusesCount < 5 && self.taken !== self.virusesCount))) {
					$('.start').addClass('orange');
				}
			}
		});

		$('#details').on('click', '.untake', function() {
			self.selectedVirus.taken = false;
			$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('blue');
			$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('green');
			$(this).removeClass('untake');
			$(this).addClass('take');
			$('.takeuntake').text('take');
			self.taken -= 1;
			$('.start').removeClass('orange');
		});

		$('#details').on('click', '.start', function() {

			// if((self.taken < 5 && self.virusesCount >= 5) || (self.virusesCount < 5 && self.taken !== self.virusesCount)) {
				// return;
			// }

			var takenViruses = [];

			for(virus in viruses) {
				if(viruses.hasOwnProperty(virus) && viruses[virus].taken) {
					takenViruses.push(viruses[virus]);
				}
			}
			setState(GameState, takenViruses, GameState.level !== undefined ? GameState.level + 1 : 0, 'server');
		});
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}