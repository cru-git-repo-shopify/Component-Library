jQuery(document).ready(function($) {
    jQuery('.cru-2-col').each(function(){
        parentHeight = jQuery(this).height();
        jQuery(this).children('.image-column').height(parentHeight);
    });
    
    jQuery('a.scroll_to').on('click', function(e){
		e.preventDefault();
		jQuery('a.scroll_to').each(function(){
			jQuery(this).removeClass('active');
		});
		jQuery(this).addClass('active');
		var targ = jQuery(this).attr('href');
		if(targ == "#our-story" && jQuery(window).width() <= 782){
			targ = "#terrior_mobile";
		}
		if(jQuery(window).width() > 900){
			jQuery('html, body').animate({
				scrollTop: jQuery(targ).offset().top - 50
			}, 1000);
		}
		else{
			jQuery('html, body').animate({
				scrollTop: jQuery(targ).offset().top - 50
			}, 1000);
		}
	});

	jQuery('.image-column .slider').slick({
	    infinite: true,
	    dots: true,
	    speed: 500,
	    fade: true,
	    cssEase: 'linear',
	    autoplay: true,
  		autoplaySpeed: 5000,
  		prevArrow:"<i class='fa-solid fa-chevron-left'></i>",
      	nextArrow:"<i class='fa-solid fa-chevron-right'></i>"
	});
});