// JQUERY
$(function() {

	// Code from: http://uniondesign.ca/simple-accordion-without-jquery-ui/
	$('#accordion').find('.accordion-toggle').click(function(){
		$(this).next().slideToggle(300);
		$('.accordion-content').not($(this).next()).slideUp(300);
	});

});
