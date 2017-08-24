$(function(){
	// Initialize Swiper Slider
	var swiper = new Swiper('.swiper-container', {
		 pagination: '.swiper-pagination',
		 paginationClickable: true
	});

	// Slide menu
	$('.submenu').click(function() {
		if($('ul', this).css('display') == 'none') {
			$('ul', this).slideDown(300);
			$('.bg-submenu', this).css('background-color', '#c75702');
			$('.arrow-menu', this).css('transform', 'rotate(180deg)');
		} else { 
			$('ul', this).slideUp(300);
			$('.bg-submenu', this).css('background-color', '');
			$('.arrow-menu', this).css('transform','');
		};
	});

	// Slideout
	var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu')
  });

  document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.open();
  });

  // Hide menu by clicking outside 
  var click_off_selector = function ( selector, callback ) {
  	if( !selector ) return false;
  	$(document).mouseup(function (e) {
  	    var $el = $(selector);
  	    if ($el.has(e.target).length === 0 && !$el.is(e.target)){
  	        callback();
  	    }
  	});
  };

	click_off_selector("#menu", (function() {
	  window.document.documentElement.classList.remove('slideout-open');
		$('#panel').attr('style', 'transform');
		// Swadow contant remove
    $('.shadow-container').css('display', 'none');
	}));

	$('.search-icon').click(function() {
		if($('#search').css('display') == 'none') {
			$('#search').slideDown(300);
		}
	});

	click_off_selector("#search", (function() {
		$('#search').slideUp(300);
	}));

});