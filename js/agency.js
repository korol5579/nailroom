// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 280
        }
    })

    $(document).scroll(function(event) {
        if ($(document).scrollTop() > 280) {
          $('.navbar-nav').removeClass('navbar-nav-nailroom');
          $('#mainNav').addClass('navbar-fixed-top');
          $('#mainNav').addClass('affix-top');
        } else {
          $('.navbar-nav').addClass('navbar-nav-nailroom');
          $('#mainNav').removeClass('navbar-fixed-top');
          $('#mainNav').removeClass('affix-top');
        }

      })

})(jQuery); // End of use strict
