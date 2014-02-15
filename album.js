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
			$('#details').html(JSON.stringify(virus) + '<a class="button pink glass back ' + (virus.taken ? 'untake' : 'take') + '">' + (virus.taken ? 'untake' : 'take') + '</a><a class="button pink glass shield start">start</a>');

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

			if((self.taken < 5 && self.virusesCount >= 5) || (self.virusesCount < 5 && self.taken !== self.virusesCount)) {
				return;
			}

			var takenViruses = [];

			for(virus in viruses) {
				if(viruses.hasOwnProperty(virus) && viruses[virus].taken) {
					takenViruses.push(viruses[virus]);
				}
			}
			setState(GameState, takenViruses);
		});
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}