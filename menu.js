MenuState = {
	enter: function() {
		$('body').append('<div class="cables" style="top:-200px; left:300px;"><div class="cable"></div><div class="cable2"></div><div class="cable cable3"></div><div class="cable2 cable4"></div><div class="cable cable5"></div><div class="cable2 cable6"></div></div>'+
		'<div id="awrapper" style="height:500px"><div id="mtext" style="overflow: hidden;"><div id="mscreen"></div></div><div id="menuitems"><div class="wcklogo">Words&nbsp;&nbsp;can&nbsp;&nbsp;kill</div><div class="wcklogo" style="font-size: 28px; padding: 10px 0;">main&nbsp;&nbsp;menu</div><br><a class="button glass orange skew xl menubut">single player</a><br><br><a class="button glass orange skew xl menubut">multiplayer (local)</a><br><br><a class="button glass orange skew xl menubut">multiplayer (host)</a><a class="button glass orange skew xl menubut">multiplayer (join)</a></div></div>');
		$('#mtext').append('<div id="credits">Team:<br>Jakub Marszalkowski<br>Marek Sklodowski<br>Krzysztof Skoracki<br>(3/20 of polish invasion)<br><br>NoPixel!<br>The game is built in HTML5 without use of canvas.<br>No graphics were harmed during the creation of this game, all the content is generated from code.<br><br>This game is like any defence game, with the difference that creeps are characters of text.<br>You can use viruses that can remove certain characters.<br></div>');
		$('#credits').animate({top: -1000}, 40000, "linear");

	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}