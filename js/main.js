$(document).ready(function () {

  $('body').imagesLoaded({ background: '.bg-load' }, function() {
  
  setTimeout(function(){
        console.log('all .item background images loaded');
        $('body').addClass('loaded');
    }, 3000);
  });




  $('.hidden').hide();
	$('.sub-nav-link').on('click', function () {

		$('.target-description').hide();
		$('#target' + $(this).data('target')).fadeIn();


		return false;
	});

	$(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 80;
			 if ($(window).scrollTop() > navHeight) {
				 $('.main-nav-container').addClass('fixed');
			 }
			 else {
				 $('.main-nav-container').removeClass('fixed');
			 }
	});

  

  if ($(window).width() > 800){
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this);
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            var coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });
        }); 
      }); 
    }; 

    $('.mobile-menu-btn').on('click', function () {
      $('.overlay-nav').fadeIn(300);
    });

    $('.nav-close-btn').on('click', function () {
      $('.overlay-nav').fadeOut(300);
    });

    $('#sub-link-dropdown-button').on('click', function () {
      $('#sub-link-nav-table').toggleClass('show');
      $('#sub-link-nav-list').toggleClass('show');
      $('.dropdown-menu-header').toggleClass('show');
 
       var _this = $('#arrowRotate');
       var current = _this.attr("src");
       var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
          
    });

    // wow = new WOW(
    //                   {
    //                   boxClass:     'wow',      // default
    //                   animateClass: 'animated', // default
    //                   offset:       0,          // default
    //                   mobile:       false,       // default
    //                   live:         true        // default
    //                 }
    //                 )
    // wow.init();  

    var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,    
    mobile:       false,      
    live:         true,  
    callback:     function(box) {
    },
    scrollContainer: null 
  }
);
wow.init();

	
});


