var isMulti = document.URL.indexOf('multi') != -1;

var levelText = [];

levelText[0] = "Dear Eric,\n\
we have to act. The agency went crazy,\n\
everyone who sends an email with any of their\n\
☃chosen☃ words might be soon ☃dead☃.\n\
I sent you some software:\n\
an algorithm marks ☃dangerous☃ words,\n\
and two ☃viruses☃ that eat charcters from\n\
agencies stream.\n\
Try not to leak anything, but at least be sure\n\
marked words wont pass.\n\
\n\
Best regards,\n\
☃Merlin☃";

levelText[1] = "Dear ☃Stephanie☃,\n\
my heard is like ☃burst☃ wiht some ☃SEMTEX☃.\n\
I cannot keeep this ☃conspiracy☃ any longer.\n\
I LOVE YOU.\n\
Evertything in you, your ☃face☃, your hair,\n\
even your ☃sneakers☃ painted in flowers.\n\
I can only hope, you feel the same.\n\
If so, maybe i could take you for the newest\n\
☃Pixar movie☃\n\
\n\
Trully yours,\n\
☃Bob☃";

levelText[2] = "Eric,\n\
I think I got into their trap.\n\
I assume I will be soon found as ☃victim☃\n\
of some ☃lethal incident☃. Or rather my\n\
☃corpse☃ will never be found.\n\
I also think their ☃firewall☃ will get some\n\
☃response☃ for my ☃viruses☃ very soon, and \n\
these will loose most of their effectivenes.\n\
Your on your own.\n\
Act ☃smart☃, fight this ☃threat☃ for\n\
☃freedom☃, and do not get ☃killed☃.\n\
\n\
I hope we will meet again,\n\
☃Merlin☃";

levelText[3] = "Litwo! ☃Ojczyzno moja!☃ ty jesteś jak zdrowie.\n\
1237\n\
???\n\
Kto cię stracił. Dziś ☃piękność☃ twą w całej ozdobie\n\
Widzę i opisuję, bo tęsknię po tobie.\n\
\n\
Panno Święta, co jasnej bronisz Częstochowy\n\
I w Ostrej ☃świecisz☃ Bramie! Ty, co gród zamkowy\n\
Nowogródzki ochraniasz z jego wiernym ludem!\n\
Jak mnie dziecko do zdrowia powróciłaś ☃cudem☃\n\
(Gdy od płaczącej matki pod Twoją opiekę\n\
Ofiarowany, ☃martwą podniosłem powiekę☃\n\
I zaraz mogłem pieszo do Twych świątyń progu\n\
Iść za wrócone życie podziękować Bogu),\n\
Tak nas powrócisz cudem na Ojczyzny łono.\n\
Tymczasem przenoś moję duszę utęsknioną\n\
Do tych pagórków leśnych, do tych łąk zielonych,\n\
Szeroko nad błękitnym Niemnem rozciągnionych;\n\
☃534534 52345 423542354235 2435 4235 4235 4524353245234 52435 4235 4235 54423532452345 52345 4235 452345☃\n\
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

var isInSnowmanState = false;

var gameSpeed = 0.01;
var gameTime = 50000;

var startLife = 100;

var VirNameBase=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "4K", "4096", "5lo", "Abraxas", "Acid", "Acme", "ABC", "AIDS", "AntiCMOS", "Bomber", "CommanderBomber", "flu", "Byte", "Bandit", "Christmas", "Commwarrior", "Conficker", "Creeper", "Eliza", "ILOVEYOU", "INIT", "Jerusalem", "worm", "Lamer", "Exterminator", "Garfield", "Michelangelo", "Navidad", "Boot", "Techno", "Whale", "Doom", "Sasser", "Storm", "Dick", "Giraffe", "Geraffe", "Longhorse", "Cock", "Cock", "Cock");
var VirNameDot=new Array(".",".",".",".",".","_",":","-","+");

function generateVirusName() {
	function keep21(a,b) {
		b = a+b;
		if (b.length <= 21) { return b; }
		return a;
	}
	virus = VirNameBase[Math.floor((Math.random()*VirNameBase.length))];
	if (Math.random() > 0.8) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + String.fromCharCode(65+Math.floor(Math.random()*4)) ); }
	if (Math.random() > 0.9) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + Math.floor(Math.random()*9999) ); }
	else if (Math.random() > 0.80) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + "19" + Math.floor(70+Math.random()*29) ); }
	else if (Math.random() > 0.75) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + "20" + Math.floor(Math.random()*14) ); }
	else if (Math.random() > 0.65) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + Math.floor(Math.random()*9) ); }
	if (Math.random() > 0.8) { virus = keep21(virus, VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + VirNameBase[Math.floor((Math.random()*VirNameBase.length))] ); }
	return virus;
}
var viruses = {}

for(var i = 0; i < 9; i++) {
	viruses[i] = {
		name: generateVirusName(),
		removeAnimation: ['flipOutY', 'fadeOutDown', 'fadeOutDownBig', 'bounceOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'hinge', 'rollOut'][Math.floor(Math.random() * 9)],
		typeString: ''
	}

	var r = Math.random();
	if(r <= 0.2) {
		viruses[i].typeString += 'AEIOU';
		viruses[i].letter = 'vowel';
	} else if(r <= 0.5) {
		viruses[i].typeString += 'BCDFG';
		viruses[i].letter = 'consonant';
	}

	if(r >= 0.5 && r <= 0.7) {
		viruses[i].nonLetter = true;
		viruses[i].typeString += '?.!-';
	}

	if(r >= 0.7) {
		viruses[i].numbers = true;
		viruses[i].typeString += '12345';
	}

	viruses[i].cooldown = Math.round(Math.random() * 16 + 4);

	if(Math.random() < 0.3) {
		viruses[i].removeFront = Math.round(Math.random() * 10 + 5);
	}
	if(Math.random() < 0.3) {
		viruses[i].removeBack = Math.round(Math.random() * 10 + 5);
	}
	if(Math.random() < 0.5) {
		viruses[i].probability = Math.round(Math.random() * 90 + 10);
	}
}


// viruses.a = {
// 	name: generateVirusName(),
// 	typeString: 'BCDFG + 0-9',
// 	removeAnimation: 'rotateOut',
// 	removeFront: 10,
// 	letter: 'vowel',
// 	numbers: true,
// 	cooldown: 5
// };

// viruses.b = {
// 	name: generateVirusName(),
// 	typeString: 'AEIOU',
// 	removeAnimation: 'fadeOutDown',
// 	removeBack: 5,
// 	direction: "back",
// 	letter: 'consonant',
// 	cooldown: 15
// };

// viruses.c = {
// 	name: generateVirusName(),
// 	typeString: '<- 50% ->',
// 	removeAnimation: 'flipOutY',
// 	removeFront: 10,
// 	removeBack: 10,
// 	probability: 50,
// 	letter: true,
// 	nonLetter: true,
// 	numbers: true,
// 	cooldown: 1000000
// };

// viruses.d = {
// 	name: generateVirusName(),
// 	typeString: '0-9',
// 	number: true,
// 	probability: 50,
// 	removeAnimation: 'rollOut',
// 	cooldown: 0.1
// };

// viruses.e = {
// 	name: generateVirusName(),
// 	typeString: '☃',
// 	removeAnimation: 'flipOutY',
// 	letter: true,
// 	nonLetter: true,
// 	numbers: true,
// 	cooldown: 1000000
// };

// viruses.fuck = {
// 	name: generateVirusName(),
// 	typeString: 'A-Z',
// 	removeAnimation: 'flipOutY',
// 	letter: true,
// 	cooldown: 10,
// 	probability: 30,
// };

// viruses.shit = {
// 	name: generateVirusName(),
// 	typeString: 'AEIOU',
// 	removeAnimation: 'flipOutY',
// 	letter: 'vowel',
// 	cooldown: 5,
// 	nonLetter: true,
// 	removeFront: 20
// };

// viruses.dick = {
// 	name: generateVirusName(),
// 	typeString: 'BFG9000',
// 	removeAnimation: 'flipOutY',
// 	letter: 'consonant',
// 	cooldown: 5,
// 	nonLetter: true,
// 	removeFront: 20
// };

// viruses.cunt = {
// 	name: generateVirusName(),
// 	typeString: 'Ass',
// 	removeAnimation: 'flipOutY',
// 	letter: 'consonant',
// 	cooldown: 5,
// 	nonLetter: true,
// 	removeFront: 20,
// 	direction: 'mutherfucker'
// };

function frame() {
	now = Date.now();
	delta = (now - then) / 1000;
	then = now;

	currentState.update(delta)
}

function setState() {

	var args = Array.prototype.slice.call(arguments);

	var state = args.shift();

	if(typeof currentState !== 'undefined') {
		currentState.exit();
	}

	state.enter.apply(state, args);
	currentState = state;
}

$(function() {


	now = then = Date.now();

	toLetter = 0;
	waitingForSpace = false;

	// setState(MenuState);
	setState(AlbumState);

	window.requestAnimationFrame(frame);
});

function getLetterIterator(level) {

	var i = 0

	return function() {
		var letter = levelText[level][i++];
		if (letter == "☃") {
			isInSnowmanState = !isInSnowmanState;
			letter = levelText[level][i++];
		}
		return letter;
	}
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

		if ((virus.letter && isLetter($el, text) && (
				(virus.letter == 'vowel' && isVowel($el, text)) ||
				(virus.letter == 'consonant' && !isVowel($el, text)) ||
				(virus.letter == true))) ||
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
			for (var i = 0; i < Math.min(virus.removeFront, toRemoveFromBack.length); ++i) {
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
				if($(this).hasClass('alive')) {
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

function isVowel($el, text) {
	var l = text.toUpperCase();
	return l == 'E' || l == 'Y' || l == 'U' || l == 'O' || l == 'A' || l == 'I';
}

function makeButton(virus, id, giraffe) {
	var strType = virus.typeString;
	// var propabilityPrefix = (virus.removeFront ? virus.removeFront : '-') + '/' + (virus.removeBack ? virus.removeBack : '-');
	// if (propabilityPrefix == '-/-') {
	// 	propabilityPrefix = '';
	// }
	var strProbability = (virus.probability ? virus.probability + '%' : '100%');
	var strName = virus.name;
	//var strDirection = virus.removeFront ? (virus.removeBack ? "both" : "front") : (virus.removeBack ? "back" : "random");
	var strDirection = virus.removeFront ? (virus.removeBack ? (virus.removeFront + " front, " + virus.removeBack + " back") : (virus.removeFront + " front")) : (virus.removeBack ? (virus.removeBack + " back") : "");
	var strCooldown = virus.cooldown > 9999 ? '&infin;' : virus.cooldown + 's';

	var newButton = '<a href="#" data-virus-id="' + id + '" class="button ' + (virus.taken && giraffe ? 'green' : 'blue') + '">' +
		'<div class="cldwrapper">' +
		'<table><tr><td class="bttopleft">' + strType +
		'</td><td class="bttopright">' + strProbability + '</td></tr>' +
		'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
		'<tr><td class="bttopleft">' + strDirection + '</td>' +
		'<td class="btbottomright cooldownStr">' + strCooldown + '</td></tr></table></div></a>';

	return newButton;
}
