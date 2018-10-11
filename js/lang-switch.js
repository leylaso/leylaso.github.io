function toggle(lang) {
	$("body header nav a#switch-"+lang).hide();
	$("body header nav a#switch-"+lang).siblings(".lang-switch").show();
	$(".translate").hide();
	$(".translate."+lang).show();
}

$(document).ready(function() {
	$("body header nav a.lang-switch").click(function(e) {
		e.preventDefault();
		toggle($(this)[0].innerText);
	});

	switch(navigator.language.slice(0,2)) {
		case "fr":
			toggle("fr");
			break;
		case "en":
		default:
			toggle("en");
			break;
			
	}
});
