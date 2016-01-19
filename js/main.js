$(document).ready(function () {

	$('.hidden').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).fadeIn();


		return false;
	});

	  $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 100;
			 if ($(window).scrollTop() > navHeight) {
				 $('.main-nav-container').addClass('fixed');
			 }
			 else {
				 $('.main-nav-container').removeClass('fixed');
			 }
		});
	
	});


