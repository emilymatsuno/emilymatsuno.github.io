$(document).ready(function(){

	$('#cow').hover(function(moveCow) {
		$(this).animate({right: "+=40px"}, 100, "linear");
	});

	if ($('#cow').css("right").value == 1420) {
		$(this).animate({left: "+=40px"}, 100, "linear");
	}; 

});