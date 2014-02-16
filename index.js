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

levelText[3] = "Litwo! ☃Ojczyzno moja!☃ ty jestes jak zdrowie.\n\
1237\n\
???\n\
Kto cie stracil. Dzis ☃pieknosc☃ twa w calej ozdobie\n\
Widze i opisuje, bo tesknie po tobie.\n\
\n\
Panno Swieta, co jasnej bronisz Czestochowy\n\
I w Ostrej ☃swiecisz☃ Bramie! Ty, co grod zamkowy\n\
Nowogrodzki ochraniasz z jego wiernym ludem!\n\
Jak mnie dziecko do zdrowia powrocilas ☃cudem☃\n\
(Gdy od placzacej matki pod Twoja opieke\n\
Ofiarowany, ☃martwa podnioslem powieke☃\n\
I zaraz moglem pieszo do Twych swiatyn progu\n\
Isc za wrocone zycie podziekowac Bogu),\n\
Tak nas powrocisz cudem na Ojczyzny lono.\n\
Tymczasem przenos moje dusze uteskniona\n\
Do tych pagorkow lesnych, do tych lak zielonych,\n\
Szeroko nad blekitnym Niemnem rozciagnionych;\n\
☃534534 52345 423542354235 2435 4235 4235 4524353245234 52435 4235 4235 54423532452345 52345 4235 452345☃\n\
Do tych pol malowanych zbozem rozmaitem,\n\
Wyzlacanych pszenica, posrebrzanych zytem;\n\
Gdzie bursztynowy swierzop, gryka jak snieg biala,\n\
Gdzie panienskim rumiencem dziecielina pala,\n\
A wszystko przepasane, jakby wstega, miedza\n\
Zielona, na niej z rzadka ciche grusze siedza.\n\
\n\
Srod takich pol przed laty, nad brzegiem ruczaju,\n\
Na pagorku niewielkim, we brzozowym gaju,\n\
Stal dwor szlachecki, z drzewa, lecz podmurowany;\n\
Swiecily sie z daleka pobielane sciany,\n\
Tym bielsze, ze odbite od ciemnej zieleni\n\
Topoli, co go bronia od wiatrow jesieni.\n\
Dom mieszkalny niewielki, lecz zewszad chedogi,\n\
I stodole mial wielka, i przy niej trzy stogi\n\
Uzatku, co pod strzecha zmiescic sie nie moze;\n\
Widac, ze okolica obfita we zboze,\n\
I widac z liczby kopic, co wzdluz i wszerz smugow\n\
Swieca gesto jak gwiazdy, widac z liczby plugow\n\
Orzacych wczesnie lany ogromne ugoru,\n\
Czarnoziemne, zapewne nalezne do dworu,\n\
Uprawne dobrze na ksztalt ogrodowych grzadek:\n\
Ze w tym domu dostatek mieszka i porzadek.\n\
\n\
Brama na wciaz otwarta przechodniom oglasza,\n\
Ze goscinna i wszystkich w goscine zaprasza.\n\
\n\
Wlasnie dwokonna bryka wjechal mlody panek\n\
I obieglszy dziedziniec zawrocil przed ganek,\n\
Wysiadl z powozu; konie porzucone same,\n\
Szczypiac trawe ciagnely powoli pod brame.\n\
We dworze pusto, bo drzwi od ganku zamknieto\n\
Zaszczepkami i kolkiem zaszczepki przetknieto.\n\
Podrozny do folwarku nie biegl slug zapytac;\n\
Odemknal, wbiegl do domu, pragnal go powitac.\n\
Dawno domu nie widzial, bo w dalekim miescie\n\
Konczyl nauki, konca doczekal nareszcie.\n\
Wbiega i okiem chciwie sciany starodawne\n\
Oglada czule, jako swe znajome dawne.\n\
Tez same widzi sprzety, tez same obicia,\n\
Z ktoremi sie zabawiac lubil od powicia;\n\
Lecz mniej wielkie, mniej piekne, niz sie dawniej zdaly.\n\
I tez same portrety na scianach wisialy.\n\
Tu Kosciuszko w czamarce krakowskiej, z oczyma\n\
Podniesionymi w niebo, miecz oburacz trzyma;\n\
Takim byl, gdy przysiegal na stopniach oltarzow,\n\
Ze tym mieczem wypedzi z Polski trzech mocarzow\n\
Albo sam na nim padnie. Dalej w polskiej szacie\n\
Siedzi Rejtan zalosny po wolnosci stracie,\n\
W reku trzymna noz, ostrzem zwrocony do lona,\n\
A przed nim lezy Fedon i zywot Katona.\n\
Dalej Jasinski, mlodzian piekny i posepny,\n\
Obok Korsak, towarzysz jego nieodstepny,\n\
Stoja na szancach Pragi, na stosach Moskali,\n\
Siekac wrogow, a Praga juz sie wkolo pali.\n\
Nawet stary stojacy zegar kurantowy\n\
W drewnianej szafie poznal u wniscia alkowy\n\
I z dziecinna radoscia pociagnal za sznurek,\n\
By stary Dabrowskiego uslyszec mazurek.\n\
\n\
Biegal po calym domu i szukal komnaty,\n\
Gdzie mieszkal, dzieckiem bedac, przed dziesieciu laty.\n\
Wchodzi, cofnal sie, toczyl zdumione zrenice\n\
Po scianach: w tej komnacie mieszkanie kobiĂŠce?\n\
Ktoz by tu mieszkal? Stary stryj nie byl zonaty,\n\
A ciotka w Petersburgu mieszkala przed laty.\n\
To nie byl ochmistrzyni pokoj! Fortepiano?\n\
Na niem noty i ksiazki; wszystko porzucano\n\
Niedbale i bezladnie; nieporzadek mily!\n\
Niestare byly raczki, co je tak rzucily.";

var isInSnowmanState = false;

var gameSpeed = 0.01;
var gameTime = 10000;

var startLife = 100;

var VirNameBase=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "4K", "4096", "5lo", "Abraxas", "Acid", "Acme", "ABC", "AIDS", "AntiCMOS", "Bomber", "Commander", "flu", "Byte", "Bandit", "Christmas", "Commwarrior", "Conficker", "Creeper", "Eliza", "ILOVEYOU", "INIT", "Jerusalem", "worm", "Lamer", "Exterminator", "Garfield", "Michelangelo", "Navidad", "Boot", "Techno", "Whale", "Doom", "Sasser", "Storm");
var VirNameDot=new Array(".",".",".",".",".","_",":","-","+");
var anims=new Array("shake","swing","tada","wobble");

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

for(var i = 0; i < 8; i++) {
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

	viruses[i].cooldown = Math.round(Math.random() * 15 + 1);

	if(Math.random() < 0.3) {
		viruses[i].removeFront = Math.round(Math.random() * 10 + 5);
	}
	if(Math.random() < 0.3) {
		viruses[i].removeBack = Math.round(Math.random() * 10 + 5);
	}

	if (viruses[i].removeFront || viruses[i].removeBack) {
		viruses[i].probability = Math.round(Math.random() * 50 + 50);
	} else {
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

	var newButton = '<a data-virus-id="' + id + '" class="button ' + (virus.taken && giraffe ? 'green' : 'blue') + '">' +
		'<div class="cldwrapper">' +
		'<table><tr><td class="bttopleft">' + strType +
		'</td><td class="bttopright">' + strProbability + '</td></tr>' +
		'<tr><td colspan=2 class="btmid">' + strName + '</td></tr>' +
		'<tr><td class="bttopleft">' + strDirection + '</td>' +
		'<td class="btbottomright cooldownStr">' + strCooldown + '</td></tr></table></div></a>';

	return newButton;
}
