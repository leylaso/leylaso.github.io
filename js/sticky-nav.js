
$(document).ready(function() {
	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 10) {
		$('header').addClass('sticky');
	    } else {
		$('header').removeClass('sticky');
	    }
	});
});
