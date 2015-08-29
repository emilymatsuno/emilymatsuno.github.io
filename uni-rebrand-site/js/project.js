
$(document).ready(function(){

	//Sticky nav//
	$(window).scroll(function() {

		var hdr = $("header").height();
		sns = $('.second-nav-sticky');

		if( $(this).scrollTop() > hdr ) {
			$('.second-nav').addClass("second-nav-sticky");
		}
		else {
			$('.second-nav').removeClass("second-nav-sticky");
		}
	});

	//h1 effect//
	$("h1").hide();
	$("h1").fadeIn(1000);

	//Signin Sidebar//
	$($('#toggle-btn').click(function(signin) {
		$('.hide-content').hide();
		$('.sidebar-expand').animate({width: 'toggle'}, "slow");
		$('.logo img').css("margin-bottom","8%");
	}));

	$($("#close").click(function(close) {
		$('.sidebar-expand').hide();
		$('.hide-content').show("slow");
		$('.logo img').css("margin-bottom","32%");
	}));
});

	//Top Menu Expand//
	$('#top-menu-toggle').click(function(){
			$('.header-content').toggleClass("expanded");
			$('.top-menu-expand').animate({height: 'toggle'}, 400);
		});

	// //Use .trigger('click') function to make entire list item clickable
	// 	(li):click//

