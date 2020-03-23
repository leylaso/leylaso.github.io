function stickit() {
    if ($(window).scrollTop() > 10) {
	$('header').addClass('sticky');
    } else {
	$('header').removeClass('sticky');
    }
}

$(document).ready(function() {
	stickit();
	$(window).bind('scroll', function () {
		stickit();
	});
});
