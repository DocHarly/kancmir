$(function() {

	$('.carousel-sale').owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		smartSpeed: 700
	});

	//Resize Window
	function onResize() {
		$('.foto').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});
