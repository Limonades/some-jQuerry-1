$(document).ready(function($) {

	$('.dropdown_menu ul li').hover(
		function() {
			$('ul:first', this).stop().slideDown(600);
		},
		function() {
			$('ul:first', this).stop().slideUp(600);
		}
	);


	 $('.bm').hover(function() {
	 	$('.blue_menu').stop().animate({ backgroundColor: "blue"}, 900);
	 },
	 function() {
	 	$('.blue_menu').stop().animate({ backgroundColor: "#FA5858" }, 900);
	 });


	 $('.ym').hover(function() {
	 	$('.yellow_menu').stop().animate({ backgroundColor: "yellow"}, 900);
	 },
	 function() {
	 	$('.yellow_menu').stop().animate({ backgroundColor: "#FA5858" }, 900);
	 });


	 $('.pm').hover(function() {
	 	$('.purple_menu').stop().animate({ backgroundColor: "purple"}, 900);
	 },
	 function() {
	 	$('.purple_menu').stop().animate({ backgroundColor: "#FA5858" }, 900);
	 });









});