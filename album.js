AlbumState = {
	enter: function() {
		$('body').append('<div id="album"></div><div id="details"></div>');

		var self = this;

		self.taken = 0;

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {
				var strType = 'A-Z';
				var strProbability = '3%';
				var strName = viruses[virus].name; //'Sasser.131'
				var strDirection = 'front';
				var strCooldown = '4s';
				var strPercent = 50;

				var newButton = '<a href="#" data-virus-id="' + virus + '" class="button blue">' +
					'<div class="cldwrapper cooldown" style="background: -moz-linear-gradient(left, rgba(255,0,0,0) ' + strPercent + '%, rgba(255,0,0,0.5)' + (strPercent + 2) + '%, rgba(255,0,0,0.7) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, right top, color-stop(' + strPercent + '%,rgba(255,0,0,0)), color-stop(' + (strPercent + 2) + '%,rgba(255,0,0,0.5)), color-stop(100%,rgba(255,0,0,0.7))); /* Chrome,Safari4+ */">' +
					'<table><tr><td class="bttopleft">' + strType +
					'</td><td class="bttopright">' + strProbability + '</td></tr>' +
					'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
					'<tr><td class="bttopleft">' + strDirection + '</td>' +
					'<td class="btbottomright">' + strCooldown + '</td></tr></table></div></a>';
			}
			$('#album').append(newButton);
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
			setState(GameState);
		});
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}