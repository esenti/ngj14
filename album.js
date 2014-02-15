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
				var strType = viruses[virus].typeString;
				var strProbability = viruses[virus].probability ? viruses[virus].probability + '%' : '';
				var strName = viruses[virus].name;
				var strDirection = viruses[virus].removeFront ? (viruses[virus].removeBack ? "both" : "front") : "back";
				var strCooldown = viruses[virus].cooldown > 9999 ? '&infin;' : viruses[virus].cooldown + 's';
				var strPercent = 0;

				var newButton = '<a href="#" data-virus-id="' + virus + '" class="button blue ' + (viruses[virus].taken ? 'taken' : '') + '">' +
					'<div class="cldwrapper cooldown" style="background: -moz-linear-gradient(left, rgba(255,0,0,0) ' + strPercent + '%, rgba(255,0,0,0.5)' + (strPercent + 2) + '%, rgba(255,0,0,0.7) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, right top, color-stop(' + strPercent + '%,rgba(255,0,0,0)), color-stop(' + (strPercent + 2) + '%,rgba(255,0,0,0.5)), color-stop(100%,rgba(255,0,0,0.7))); /* Chrome,Safari4+ */">' +
					'<table><tr><td class="bttopleft">' + strType +
					'</td><td class="bttopright">' + strProbability + '</td></tr>' +
					'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
					'<tr><td class="bttopleft">' + strDirection + '</td>' +
					'<td class="btbottomright">' + strCooldown + '</td></tr></table></div></a>';
			}
			$('#album').append(newButton);
			self.virusesCount++;
		}


		$('.button').click(function() {

			var virus = viruses[$(this).data('virus-id')]
			$('#details').html(JSON.stringify(virus) + '<div class="' + (virus.taken ? 'untake' : 'take') + '"></div><div class="start"></div>');

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