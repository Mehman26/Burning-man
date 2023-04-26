$(function () {
	$('.menu_burger').click(function (e) {
		e.preventDefault();
		$('ul.menu').toggleClass('show-menu')
	});
});

if ($(window).width()  < 747){
	$('ul.menu li a').click(function(e) {
		e.preventDefault();
		$('ul.menu').toggleClass('show-menu')
	});
};



