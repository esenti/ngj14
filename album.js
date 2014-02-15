AlbumState = {
	enter: function() {
		$('body').append('<div id="album"></div><div id="details"></div>');

		var self = this;

		if(typeof self.taken === 'undefined') {
			self.taken = 0;
		}

		self.virusesCount = 0;

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {
				$('#album').append(makeButton(viruses[virus], virus));
				self.virusesCount++;
			}
		}


		$('.button').click(function() {

			var virus = viruses[$(this).data('virus-id')]

			var virusParams = "<ul>";

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

			virusParams += "<li><strong>" + virus.name + "</strong></li>";

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


			$('#details').html('<a class="button orange glass back xl ' + (virus.taken ? 'untake' : 'take') + '">' + (virus.taken ? 'untake' : 'take') + '</a><a class="button orange glass shield xl start">start</a>' + virusParams);

			self.selectedVirus = virus;
			self.selectedVirusId = $(this).data('virus-id');
		});

		$('#details').on('click', '.take', function() {
			if(self.taken < 5) {
				self.selectedVirus.taken = true;
				$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('taken');
				$(this).removeClass('take');
				$(this).addClass('untake');
				self.taken += 1;
			}
		});

		$('#details').on('click', '.untake', function() {
			self.selectedVirus.taken = false;
			$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('taken');
			$(this).removeClass('untake');
			$(this).addClass('take');
			self.taken -= 1;
		});

		$('#details').on('click', '.start', function() {

			// if((self.taken < 5 && self.virusesCount >= 5) || (self.virusesCount < 5 && self.taken !== self.virusesCount)) {
			// 	return;
			// }

			var takenViruses = [];

			for(virus in viruses) {
				if(viruses.hasOwnProperty(virus) && viruses[virus].taken) {
					takenViruses.push(viruses[virus]);
				}
			}
			setState(GameState, takenViruses, GameState.level !== undefined ? GameState.level + 1 : 0);
		});
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}