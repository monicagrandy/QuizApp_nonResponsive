$(document).ready(function(){ //parallax scrolling

		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();
	
		    var target = this.hash,
		    $target = $(target);
	
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1100, 'swing', function () {
		        window.location.hash = target;
		    });
		});	
	
});