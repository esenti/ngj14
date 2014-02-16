var VirNameBase=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "4K", "4096", "5lo", "Abraxas", "Acid", "Acme", "ABC", "AIDS", "AntiCMOS", "Bomber", "CommanderBomber", "flu", "Byte", "Bandit", "Christmas", "Commwarrior", "Conficker", "Creeper", "Eliza", "ILOVEYOU", "INIT", "Jerusalem", "worm", "Lamer", "Exterminator", "Garfield", "Michelangelo", "Navidad", "Boot", "Techno", "Whale", "Doom", "Sasser", "Storm");
var VirNameDot=new Array(".",".",".",".",".","_",":","-","+");

var virusesNames = [];

function generateVirusesNames() {
	for (i=1;i<20;i++) {
		virus = VirNameBase[Math.floor((Math.seededRandom()*VirNameBase.length))];
		if (Math.seededRandom() > 0.8) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + String.fromCharCode(65+Math.floor(Math.seededRandom()*4)); }
		if (Math.seededRandom() > 0.9) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + Math.floor(Math.seededRandom()*9999); }
		else if (Math.seededRandom() > 0.80) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + "19" + Math.floor(70+Math.seededRandom()*29); }
		else if (Math.seededRandom() > 0.75) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + "20" + Math.floor(Math.seededRandom()*14); }
		else if (Math.seededRandom() > 0.65) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + Math.floor(Math.seededRandom()*9); }
		if (Math.seededRandom() > 0.8) { virus += VirNameDot[Math.floor((Math.seededRandom()*VirNameDot.length))] + VirNameBase[Math.floor((Math.seededRandom()*VirNameBase.length))]; }
		document.getElementById("out").innerHTML += virus + "<br>";
	}
}

