MenuState = {
	enter: function() {
		$('body').append('<div>This is menu!</div>');

		$('div').click(function() {
			setState(AlbumState);
		})
	},

	exit: function() {
		$('body').html('');
	},

	update: function() {
		window.requestAnimationFrame(frame);
	}
}