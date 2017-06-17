//slider function start
$('.slider').slick({
	dots: true,
	arrows: true,
	nextArrow: '<img class="slideRight" src="../imgs/icons/slideRight.svg">',
	prevArrow: '<img class="slideLeft" src="../imgs/icons/slideLeft.svg">',
	autoplay: true,
	cssEase: 'ease-out',
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
});
$('.gallery').slick({
	dots: true,
	arrows: true,
	nextArrow: '<img class="slideRight" src="../imgs/icons/slideRight.svg">',
	prevArrow: '<img class="slideLeft" src="../imgs/icons/slideLeft.svg">',
	autoplay: false,
	cssEase: 'ease-out',
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 4,
	slidesToScroll: 4,
	mobileFirst: true,
});
//slider function end

$(document).ready(function(){
	$('body').addClass('loaded');
});