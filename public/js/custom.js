// $(".site-menu li").on('click', function(){
//     $(".site-menu li").removeClass('active');
//     $(this).addClass('active');
// });

$(document).ready(function(){
  	$('.site-menu li a').click(function(){
	    $('li').removeClass("active");
	    $(this).addClass("active");
	});
});