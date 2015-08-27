
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
	$(".content").mouseleave(function(){
		$("h1").fadeIn("slow");
	});

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
	$('#top-menu-toggle').click(function(open){

		if (open) {
			$('.top-menu-expand').animate({height: 'toggle'}, 400);
			$('h1').css("color","rgba(0, 0, 0, 0.1)");
			$('p.header').css("color","rgba(0, 0, 0, 0.1)");
		}
		else {
			$('h1').css("color","white");
			$('p.header').css("color","white");
		}
});

