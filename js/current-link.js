$(document).ready(function() {
	$("body header nav a[href^='#'").click(function(e) {
		$(this).addClass("current");
		$(this).siblings('a').removeClass("current");
	});
});
