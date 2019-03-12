$(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    // nav: true,
    responsiveClass:true, 
    autoplay:true,
    navigation:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,    
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            dots: true,
            dotsEach: true,
            // nav:true
        },
        600:{
            items:1,
            dots: true,
             dotsEach: true,
            // nav:false
        },
        1000:{
            items:1,
            dots: true,
             dotsEach: true,
            // nav:true,
            loop:true		
        }
    }
})

	// var startingX = 0, startingY = 0, firstX = 350, firstY = 150, secondX = 550, secondY = 150, endingX = w, endingY = startingX+50;
	// var c = document.getElementById("myCanvas");
	// var w = window.innerWidth;
	// var ctx = c.getContext("2d");
	// ctx.beginPath();
	// ctx.moveTo( startingX, startingY );
	// context.bezierCurveTo( firstX, firstY, secondX, secondY, endingX, endingY );
	// ctx.stroke();
	// canvas = document.getElementById("myCanvas");
	// ctx = canvas.getContext("2d")
	// ctx.lineWidth = 6;
	// ctx.strokeStyle = "#333";
	// ctx.beginPath();
	// ctx.moveTo(25, 134);
	// ctx.bezierCurveTo(150, 100, 350, 100, 480, 21);
	// ctx.stroke();
});
