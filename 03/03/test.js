$(document).ready(function(){

	$('#subMenu').hide();

	$('#navForSub').mouseover(function(){
		$('#subMenu').slideDown(1);

	});

	$('#navForSub').mouseleave(function(){
		$('#subMenu').hide();

	});
});