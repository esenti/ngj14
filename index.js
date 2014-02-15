
var levelTextIt = 0;
var levelText = "Litwo! Ojczyzno moja! ty jesteś jak zdrowie.\n\
Ile cię trzeba cenić, ten tylko się dowie,\n\
1237           \n\
???             \n\
Kto cię stracił. Dziś piękność twą w całej ozdobie\n\
Widzę i opisuję, bo tęsknię po tobie.\n\
\n\
Panno Święta, co jasnej bronisz Częstochowy\n\
I w Ostrej świecisz Bramie! Ty, co gród zamkowy\n\
Nowogródzki ochraniasz z jego wiernym ludem!\n\
Jak mnie dziecko do zdrowia powróciłaś cudem\n\
(Gdy od płaczącej matki pod Twoją opiekę\n\
Ofiarowany, martwą podniosłem powiekę\n\
I zaraz mogłem pieszo do Twych świątyń progu\n\
Iść za wrócone życie podziękować Bogu),\n\
Tak nas powrócisz cudem na Ojczyzny łono.\n\
Tymczasem przenoś moję duszę utęsknioną\n\
Do tych pagórków leśnych, do tych łąk zielonych,\n\
Szeroko nad błękitnym Niemnem rozciągnionych;\n\
534534 52345 423542354235 2435 4235 4235 4524353245234 52435 4235 4235 54423532452345 52345 4235 452345\n\
Do tych pól malowanych zbożem rozmaitem,\n\
Wyzłacanych pszenicą, posrebrzanych żytem;\n\
Gdzie bursztynowy świerzop, gryka jak śnieg biała,\n\
Gdzie panieńskim rumieńcem dzięcielina pała,\n\
A wszystko przepasane, jakby wstęgą, miedzą\n\
Zieloną, na niej z rzadka ciche grusze siedzą.\n\
\n\
Śród takich pól przed laty, nad brzegiem ruczaju,\n\
Na pagórku niewielkim, we brzozowym gaju,\n\
Stał dwór szlachecki, z drzewa, lecz podmurowany;\n\
Świeciły się z daleka pobielane ściany,\n\
Tym bielsze, że odbite od ciemnej zieleni\n\
Topoli, co go bronią od wiatrów jesieni.\n\
Dóm mieszkalny niewielki, lecz zewsząd chędogi,\n\
I stodołę miał wielką, i przy niej trzy stogi\n\
Użątku, co pod strzechą zmieścić się nie może;\n\
Widać, że okolica obfita we zboże,\n\
I widać z liczby kopic, co wzdłuż i wszerz smugów\n\
Świecą gęsto jak gwiazdy, widać z liczby pługów\n\
Orzących wcześnie łany ogromne ugoru,\n\
Czarnoziemne, zapewne należne do dworu,\n\
Uprawne dobrze na kształt ogrodowych grządek:\n\
Że w tym domu dostatek mieszka i porządek.\n\
\n\
Brama na wciąż otwarta przechodniom ogłasza,\n\
Że gościnna i wszystkich w gościnę zaprasza.\n\
\n\
Właśnie dwókonną bryką wjechał młody panek\n\
I obiegłszy dziedziniec zawrócił przed ganek,\n\
Wysiadł z powozu; konie porzucone same,\n\
Szczypiąc trawę ciągnęły powoli pod bramę.\n\
We dworze pusto, bo drzwi od ganku zamknięto\n\
Zaszczepkami i kołkiem zaszczepki przetknięto.\n\
Podróżny do folwarku nie biegł sług zapytać;\n\
Odemknął, wbiegł do domu, pragnął go powitać.\n\
Dawno domu nie widział, bo w dalekim mieście\n\
Kończył nauki, końca doczekał nareszcie.\n\
Wbiega i okiem chciwie ściany starodawne\n\
Ogląda czule, jako swe znajome dawne.\n\
Też same widzi sprzęty, też same obicia,\n\
Z któremi się zabawiać lubił od powicia;\n\
Lecz mniej wielkie, mniej piękne, niż się dawniej zdały.\n\
I też same portrety na ścianach wisiały.\n\
Tu Kościuszko w czamarce krakowskiej, z oczyma\n\
Podniesionymi w niebo, miecz oburącz trzyma;\n\
Takim był, gdy przysięgał na stopniach ołtarzów,\n\
Że tym mieczem wypędzi z Polski trzech mocarzów\n\
Albo sam na nim padnie. Dalej w polskiej szacie\n\
Siedzi Rejtan żałośny po wolności stracie,\n\
W ręku trzymna nóż, ostrzem zwrócony do łona,\n\
A przed nim leży Fedon i żywot Katona.\n\
Dalej Jasiński, młodzian piękny i posępny,\n\
Obok Korsak, towarzysz jego nieodstępny,\n\
Stoją na szańcach Pragi, na stosach Moskali,\n\
Siekąc wrogów, a Praga już się wkoło pali.\n\
Nawet stary stojący zegar kurantowy\n\
W drewnianej szafie poznał u wniścia alkowy\n\
I z dziecinną radością pociągnął za sznurek,\n\
By stary Dąbrowskiego usłyszeć mazurek.\n\
\n\
Biegał po całym domu i szukał komnaty,\n\
Gdzie mieszkał, dzieckiem będąc, przed dziesięciu laty.\n\
Wchodzi, cofnął się, toczył zdumione źrenice\n\
Po ścianach: w tej komnacie mieszkanie kobiĂŠce?\n\
Któż by tu mieszkał? Stary stryj nie był żonaty,\n\
A ciotka w Petersburgu mieszkała przed laty.\n\
To nie był ochmistrzyni pokój! Fortepiano?\n\
Na niem noty i książki; wszystko porzucano\n\
Niedbale i bezładnie; nieporządek miły!\n\
Niestare były rączki, co je tak rzuciły.";

var gameSpeed = 0.01;

var viruses = {}

viruses.a = {
	name: 'A-Z + 0-9',
	removeAnimation: 'rotateOut',
	removeFront: 10,
	letter: true,
	numbers: true,
	cooldown: 5
};

viruses.b = {
	name: 'NOT A-Z',
	removeAnimation: 'fadeOutDown',
	removeBack: 5,
	direction: "back",
	nonLetter: true,
	cooldown: 15
};

viruses.c = {
	name: '<- 50% ->',
	removeAnimation: 'flipOutY',
	removeFront: 10,
	removeBack: 10,
	probability: 50,
	letter: true,
	nonLetter: true,
	numbers: true,
	cooldown: 0
};

viruses.d = {
	name: '0-9',
	number: true,
	probability: 50,
	removeAnimation: 'rollOut',
	cooldown: 0.1
};

viruses.e = {
	name: 'ONE TIME ALL',
	removeAnimation: 'flipOutY',
	letter: true,
	nonLetter: true,
	numbers: true
};


function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	currentState.update(delta)
}

MenuState = {
	enter: function() {
		$('body').append('<div>This is menu!</div>');

		$('div').click(function() {
			setState(GameState);

		})
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}

AlbumState = {
	enter: function() {
		$('body').append('<div>This is album!</div>');

		$('div').click(function() {
			setState(GameState);
		})
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}

GameState = {

	enter: function() {

		$('body').append('<div id="buttons"></div><div id="life"></div><div id="text"></div><div class="newline"></div>');

		for(virus in viruses) {
			if(viruses.hasOwnProperty(virus)) {

				var strType = 'A-Z';
				var strProbability = '3%';
				var strName = viruses[virus].name; //'Sasser.131'
				var strDirection = 'front';
				var strCooldown = '4s';
				var strPercent = 34;

				var newButton = '<a href="#" data-virus-id="' + virus + '" class="button blue">' +
					'<div class="cldwrapper cooldown" style="background: -moz-linear-gradient(left, rgba(255,0,0,0) ' + strPercent + '%, rgba(255,0,0,0.5)' + (100 - strPercent) + '%, rgba(255,0,0,0.7) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, right top, color-stop(' + strPercent + '%,rgba(255,0,0,0)), color-stop(' + (100 - strPercent) + '%,rgba(255,0,0,0.5)), color-stop(100%,rgba(255,0,0,0.7))); /* Chrome,Safari4+ */">' + 
					'<table><tr><td class="bttopleft">' + strType + 
					'</td><td class="bttopright">' + strProbability + '</td></tr>' +
					'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
					'<tr><td class="bttopleft">' + strDirection + '</td>' +
					'<td class="btbottomright">' + strCooldown + '</td></tr></table><div class="overlay"></div></div></a>';

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

		this.life = 10;
		this.outOfLetters = false;
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
				$('div[data-virus-id=' + virus + ']').find('.overlay').text(viruses[virus].cooldownLeft > 0 ? Math.ceil(viruses[virus].cooldownLeft) : '');
				if(viruses[virus].cooldownLeft <= 0) {
					$('div[data-virus-id=' + virus + ']').removeClass('cooling-down');
				}
			}
		}

		if(toLetter <= 0) {
			toLetter = gameSpeed;

			var newline = $('.newline')
			var nextLetter = '';
			if(!waitingForSpace) {
				nextLetter = getNextLetter();
				if(nextLetter == undefined) {
					this.outOfLetters = true;
				}

				if (nextLetter != '\n' && nextLetter != undefined) {
					newline.html(newline.html() + '<span class="letter alive">' + nextLetter + '</span>');
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
					$('.line').last().animate({top: 0}, 10000, 'linear');
					waitingForSpace = false;
				}
			}

			$('.line').each(function() {
				if($(this).position().top <= 0) {
					self.life -= $(this).find('.letter:not(.removed)').length;
					$(this).remove();
				}
			});
		}

		$('#life').text(this.life);

		if(this.life <= 0) {
			setState(MenuState);
		}

		if($(this).find('.letter:not(.removed)').length == 0 && this.outOfLetters) {
			setState(AlbumState);
		}

		window.requestAnimationFrame(frame);
	}
}

function setState(state) {
	if(typeof currentState !== 'undefined') {
		currentState.exit();
	}

	state.enter();
	currentState = state;
}

$(function() {


	now = then = Date.now();

	toLetter = 0;
	waitingForSpace = false;

	setState(MenuState);

	window.requestAnimationFrame(frame);
});

function getNextLetter() {
	//return String.fromCharCode(Math.random() * 90 + 32);
	var letter = levelText[levelTextIt++];
	return letter;
}

function launchVirus(virus) {

	var removedFromFront = 0;
	var toRemoveFromBack = [];

	forEveryLetter( function($el, text) {

		if (virus.probability && Math.random() * 100 > virus.probability) {
			return;
		}

		if (virus.removeFront && removedFromFront >= virus.removeFront) {
			return;
		}

		if ((virus.letter && isLetter($el, text)) ||
		    (virus.nonLetter && !isLetter($el, text)) ||
			(virus.number && isNumber($el, text)) ||
			(virus.notNumber && !isNumber($el, text))) {

			if (virus.removeBack) {
				toRemoveFromBack.push({$el: $el, animation: virus.removeAnimation});
			} else {
				removedFromFront++;
				removeWithAnimation($el, virus.removeAnimation);
			}

			return;
		}

	});

	if (virus.removeBack) {
		if (virus.removeFront) {
			for (var i = 0; i < virus.removeFront; ++i) {
				removeWithAnimation(toRemoveFromBack[i].$el, toRemoveFromBack[i].animation);
			}
		}

		for (var i = Math.max(0, toRemoveFromBack.length - virus.removeBack); i < toRemoveFromBack.length; ++i) {
			removeWithAnimation(toRemoveFromBack[i].$el, toRemoveFromBack[i].animation);
		}
	}

}

function forEveryLetter(callback) {
	$('.line .alive').each(function(i, e) {
		var $el = $(this);
		var text = $el.text();
		callback($el, text);
	});
}

function removeWithAnimation($el, animation) {
	$el.animateCSS(animation, 0, function(a) {
		$(this).addClass("removed");
		$(this).removeClass("alive");

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

