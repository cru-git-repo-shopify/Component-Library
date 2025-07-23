jQuery(document).ready(function() {
	/*menu slider toggles*/
	jQuery('.logo_centered_right_hamb a.left_hamburger').on('click', function(e){
	    e.preventDefault();
	    jQuery('.right-popup-menu').show("slide", { direction: "right" }, 300);
	});
	jQuery('logo_centered_right_hamb a.hamburger_close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.right-popup-menu').hide("slide", { direction: "right" }, 300);
	});

	jQuery('.logo_centered_left_hamb a.left_hamburger').on('click', function(e){
	    e.preventDefault();
	    jQuery('.left-popup-menu').show("slide", { direction: "left" }, 300);
	});
	jQuery('.left-popup-menu a.hamburger_close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.left-popup-menu').hide("slide", { direction: "left" }, 300);
	});
	jQuery('a.banner-close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.header_notif').slideUp();
	});
	
	jQuery(window).on( 'scroll', function(){
	    var s = jQuery(window).scrollTop(),
	      d = jQuery(document).height(),
	      c = jQuery(window).height();
	    var scrollPercent = (s / (d - c)) * 100;
	    if(scrollPercent >= 5){
	        jQuery('#masthead').addClass('scrolled');
	    }
	    else{
	        jQuery('#masthead').removeClass('scrolled');
	    }
	});
});