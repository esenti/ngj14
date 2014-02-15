var VirNameBase=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "4K", "4096", "5lo", "Abraxas", "Acid", "Acme", "ABC", "AIDS", "AntiCMOS", "Bomber", "CommanderBomber", "flu", "Byte", "Bandit", "Christmas", "Commwarrior", "Conficker", "Creeper", "Eliza", "ILOVEYOU", "INIT", "Jerusalem", "worm", "Lamer", "Exterminator", "Garfield", "Michelangelo", "Navidad", "Boot", "Techno", "Whale", "Doom", "Sasser", "Storm");
var VirNameDot=new Array(".",".",".",".",".","_",":","-","+");
(function () {

	oldOnLoad = window.onload;
	
	window.onload = function() {
		for (i=1;i<20;i++) {
			virus = VirNameBase[Math.floor((Math.random()*VirNameBase.length))];
			if (Math.random() > 0.8) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + String.fromCharCode(65+Math.floor(Math.random()*4)); }
			if (Math.random() > 0.9) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + Math.floor(Math.random()*9999); }
			else if (Math.random() > 0.80) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + "19" + Math.floor(70+Math.random()*29); }
			else if (Math.random() > 0.75) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + "20" + Math.floor(Math.random()*14); }
			else if (Math.random() > 0.65) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + Math.floor(Math.random()*9); }
			if (Math.random() > 0.8) { virus += VirNameDot[Math.floor((Math.random()*VirNameDot.length))] + VirNameBase[Math.floor((Math.random()*VirNameBase.length))]; }
			document.getElementById("out").innerHTML += virus + "<br>";
		}
	}
})();