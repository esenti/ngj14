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
				$('#album').append(makeButton(viruses[virus], virus, true));
				self.virusesCount++;
			}
		}


		$('.button').click(function() {

			var virus = viruses[$(this).data('virus-id')]
			$('#details').html(JSON.stringify(virus) + '<a class="button orange glass back xl ' + (virus.taken ? 'untake' : 'take') + '">' + (virus.taken ? 'untake' : 'take') + '</a><a class="button orange glass shield xl start">start</a>');

			self.selectedVirus = virus;
			self.selectedVirusId = $(this).data('virus-id');
		});

		$('#details').on('click', '.take', function() {
			if(self.taken < 5) {
				self.selectedVirus.taken = true;
				$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('green');
				$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('blue');
				$(this).removeClass('take');
				$(this).addClass('untake');
				self.taken += 1;
			}
		});

		$('#details').on('click', '.untake', function() {
			self.selectedVirus.taken = false;
			$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('blue');
			$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('green');
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