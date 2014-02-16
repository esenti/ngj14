AlbumState = {
	enter: function(multiplayer, code) {
		$('body').append('<div class="cables"><div class="cable"></div><div class="cable2"></div><div class="cable cable3"></div><div class="cable2 cable4"></div><div class="cable cable5"></div><div class="cable2 cable6"></div></div><div id="awrapper"><div id="album"></div><div id="details"><div class="wcklogo">Words&nbsp;&nbsp;can&nbsp;&nbsp;kill</div><div class="wcklogo" style="font-size: 28px; padding: 10px 0;">virus&nbsp;&nbsp;library</div><div id="atext"><div id="ascreen"></div></div><br><table><tr><td><a class="button glass oval orange xl page" data-page="1">1</a><a class="button glass oval orange xl page" data-page="2">2</a><a class="button glass oval orange xl page" data-page="3">3</a></td><td><a class="button glass back xl takeuntake ' + (virus.taken ? 'untake' : 'take') + '">' + (virus.taken ? 'untake' : 'take') + '</a><br><a class="button glass shield xl start">start</a></td></tr></table></div></div>');

		this.multiplayer = multiplayer;
		this.code = code;

		var self = this;

		if(typeof self.taken === 'undefined') {
			self.taken = 0;
		}

		for(var i = 0; i < viruses.length; i++) {
			if(!viruses[i].taken) {
				viruses[i] = generateVirus();
			}
		}

		for(var i = 0; i < 24; i++) {
			$('#album').append(makeButton(viruses[i], i, true));
			if(i >= 8) {
				$('#album').find('a[data-virus-id=' + i + ']').hide();
			}
		}

		$('.page').click(function() {
			var page = parseInt($(this).data('page'));

			for(var i = 0; i < 24; i++) {
				if(i >= 8 * (page - 1) && i < 8 * page) {
					$('#album').find('a[data-virus-id=' + i + ']').show();
				} else {
					$('#album').find('a[data-virus-id=' + i + ']').hide();
				}
			}
		});

		$('#ascreen').html("<p style='margin: 20px 15px; line-height: 22px;'>Select up to five viruses.</p>");

		if(!((self.taken < 8 && viruses.length >= 8) || (viruses.length < 8 && self.taken !== viruses.length))) {
			$('.start').addClass('orange');
		}

		$('#album .button').click(function() {

			var virus = viruses[parseInt($(this).data('virus-id'))]

			if (self.selectedVirus == virus) {
				$(".takeuntake").trigger('click');
			}

			var virusParams = "<ul id=aul>";

			var kills = "";
			if (virus.letter) {
				if (virus.letter !== true) {
					kills += virus.letter + "s";
				} else {
					kills += "letters";
				}
			}

			if (virus.numbers) {
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

			if (virus.lowerCase) {
				if (kills != "") {
					kills += ", ";
				}
				kills += "lowerCase";
			}

			if (virus.upperCase) {
				if (kills != "") {
					kills += ", ";
				}
				kills += "upperCase";
			}

			if (kills == "") {
				kills = "all";
			}


			virusParams += "<li><big class='invert'>" + virus.name + "</big></li>";

			virusParams += "<li><em class='invert'>" + virus.typeString + "</em></li>";

			if (virus.cooldown > 9999)
				virusParams += "<li>Only once</li>";
			else
				virusParams += "<li>Cooldown:" + virus.cooldown + "s</li>";

			if (virus.probability)
				virusParams += "<li>Efficenty: " + virus.probability + "%</li>";

			virusParams += "<li>Kills: " + kills + "</li>";

			if (virus.removeFront)
				virusParams += "<li>Removes first " + virus.removeFront + " characters</li>";

			if (virus.removeBack)
				virusParams += "<li>Removes last " + virus.removeBack + " characters</li>";

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
			if(self.taken < 8) {
				self.selectedVirus.taken = true;
				$('a[data-virus-id=' + self.selectedVirusId + ']').addClass('green');
				$('a[data-virus-id=' + self.selectedVirusId + ']').removeClass('blue');
				$(this).removeClass('take');
				$(this).addClass('untake');
				$('.takeuntake').text('untake');
				self.taken += 1;

				if(!((self.taken < 8 && viruses.length >= 8) || (viruses.length < 8 && self.taken !== viruses.length))) {
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

			// if((self.taken < 5 && viruses.length >= 5) || (viruses.length < 5 && self.taken !== viruses.length)) {
				// return;
			// }

			var takenViruses = [];

			for(virus in viruses) {
				if(viruses.hasOwnProperty(virus) && viruses[virus].taken) {
					takenViruses.push(viruses[virus]);
				}
			}

			// var client = document.URL.indexOf('client') != -1;
			// var server = document.URL.indexOf('server') != -1;
			// var local = document.URL.indexOf('local') != -1;

			// var multi = client ? 'client' : (server ? 'server' : (local ? 'local' : false));

			setState(GameState, takenViruses, GameState.level !== undefined ? GameState.level + 1 : 0, self.multiplayer, self.code);
		});
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}