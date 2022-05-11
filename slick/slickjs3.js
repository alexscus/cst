$(document).ready(function(){
  $('.slider').slick({
	infinite: true,
	arrows: true,
	speed: 350,
	dots: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1140,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
			
		  }
		},
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
			
		  }
		},
		{
		  breakpoint: 766,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			
		  }
		}
	]

	});
});