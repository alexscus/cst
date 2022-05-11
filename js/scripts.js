$(function() {
	var isTouch = 'ontouchstart' in window || window.navigator.msMaxTouchPoints;

	$('.content .main-slider, .content .products-slider').owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: true
	});

	$('.content .accordion h3').each(function(i) {
		$(this).click(function() {
			var $inner = $(this).next('.inner').length ? $(this).next('.inner') : false;

			if (!$inner) return;
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$inner.hide();
			} else {
				$(this).addClass('active');
				$inner.show();
			}
		});

		if (i === 0) $(this).click();
	});

	$('.content .components-list .slider').owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false
	}).find('.item').hover(function() {
		$(this).closest('.slider').addClass('hide-nav');
	}, function() {
		$(this).closest('.slider').removeClass('hide-nav');
	});

	var timer;
	$('.content .products-menu li').mousemove(function() {
	  clearTimeout(timer);
	  var ts = $(this);
	  timer = setTimeout(function(){
		  ts.addClass('hover')
			.siblings()
			.removeClass('hover');
	  },500);
	});

	$('.popup').click(function(e) {
		e.preventDefault();
		var $popup = $($(this).attr('href'));
		
		$.fancybox($popup, {
			padding: 0
		});
	});

	$('form').submit(function(e) {
		e.preventDefault();
		var $submit = $(this).find('input[type="submit"]');

		$.post('/feedback.php', $(this).serialize(), function(data) {
			if (data == '1') {
				showTooltip($submit, $submit.data('success'));
			} else {
				showTooltip($submit, $submit.data('error'));
			}
		});
	});

	function showTooltip($el, title) {
		$el.tooltip({
			title: title,
			html: true,
			trigger: 'malual'
		}).tooltip('show');

		setTimeout(function() {
			$el.tooltip('hide').tooltip('destroy');
		}, 5000);
	}
	
	$('#mob_header .bar .open_mob').click(function () {$("#mob_header").addClass("act");$("#bg__").addClass("act__");});
	$('.close__').click(function () {$("#mob_header").removeClass("act");$("#bg__").removeClass("act__");});
	$('#bg__').click(function () {$("#mob_header").removeClass("act");$("#bg__").removeClass("act__");});
	
    var w = $(window).width(); 
    if (w <= 767) {
      $('.footer .copy').appendTo('.footer .dev');
	  $('.block_docs').appendTo('.inform > div .block_text');
    }

});