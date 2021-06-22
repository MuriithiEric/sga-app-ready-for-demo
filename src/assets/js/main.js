$(window).on('mouseover', function() { 
$('.menu-btn').click(function(){
	$('.main-menu-box').addClass('open');
});
$('.close-btn').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.main-menu-box .menu a').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.signout-btn a').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.menu-footer .profile-pic').click(function(){
	$('.main-menu-box').removeClass('open');
});	
$('.menu-footer .name').click(function(){
	$('.main-menu-box').removeClass('open');
});	
})

$(function() {
	$('.menu-btn').click(function(){
	$('.main-menu-box').addClass('open');
});
$('.close-btn').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.main-menu-box .menu a').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.signout-btn a').click(function(){
	$('.main-menu-box').removeClass('open');
});
$('.menu-footer .profile-pic').click(function(){
	$('.main-menu-box').removeClass('open');
});	
$('.menu-footer .name').click(function(){
	$('.main-menu-box').removeClass('open');
});	
});