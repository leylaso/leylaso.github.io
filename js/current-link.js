$(document).ready(function() {
	if (window.location.hash) {
		$("body header nav a[href='"+window.location.hash+"'").addClass("current");
	}
	$("body header nav a[href^='#'").click(function(e) {
		$(this).addClass("current");
		$(this).siblings('a').removeClass("current");
	});
});
