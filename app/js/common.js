$(function() {

	$('.carousel-sale').owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		smartSpeed: 700
	});

	$('.cart-prices').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			800: {
				items: 3
			},
			1100: {
				items: 4
			}
		}
	});

	//Resize Window
	function onResize() {
		$('.foto').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});
