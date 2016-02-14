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

    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this);
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            var coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });
        }); 
    });  

    $('.mobile-menu-btn').on('click', function () {
      $('.overlay-nav').fadeIn(300);
    });

    $('.nav-close-btn').on('click', function () {
      $('.overlay-nav').fadeOut(300);
    });

    wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
    wow.init();  

	
});


