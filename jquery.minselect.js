/*!
minSelect is a jQuery plugin that gives you the ability to restyle your select field. Not the the drop downs and will stay the as the browser default design.

Version 1.0.0
Full source at https://github.com/marc-andrew/minSelect
Copyright (c) 2014 Marc Andrew http://marcandrew.net/plugins/minSelect

MIT License (http://www.opensource.org/licenses/mit-license.html)
*/

;(function($){

	$.fn.minSelect = function(){

		var minselect	= this;

		// Wrap all select
		minselect.wrap('<div class="minSelect"></div>');

		// Add wrapper for the selected text
		$('.minSelect').append('<div class="minSelect-placeholder"><span class="minSelect-content"></span></div>');

		// Add class
		minselect.addClass('minSelect-hidden');

		minselect.each(function(index) {
			var getIndex	= index + 1,
				getText		= $("option:selected", this).text();

			// Adding class names
			$(this).parent().addClass('minSelect-' + getIndex);

			// Get the text
			$(this).next().find('.minSelect-content').text(getText)	;
		});

		// Start focus function
		function focus() {
			var wrapper = $('.minSelect');

			// Focus in
			minselect.focusin(function(){
				// Add class
				$(this).next().addClass('select-open select-focus');

				// Change text if option has changed
				$(this).change(function() {
					var getNewText = $("option:selected", this).text();
					$(this).next().find('.minSelect-content').text(getNewText);
				});
			});

			// Focus out
			minselect.focusout(function(){
				// Remove Class
				$(this).next().removeClass('select-open select-focus');
			});

		}

		return focus();

	};

})(jQuery);