jQuery(document).ready(function($) {
    jQuery('a.anchor_link').on('click', function(){
	    var target = jQuery(this).attr('targets');
	    jQuery('html, body').animate({
	        scrollTop: jQuery('#'+target).offset().top - 150
	    }, 500);
	});
});