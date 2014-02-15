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