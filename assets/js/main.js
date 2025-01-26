(function ($) {
	"use strict";

    jQuery(document).ready(function($){


				//===== Responsive mainmenu Start
				$('#mobile-menu-active').meanmenu({
					meanScreenWidth: "767",
					meanMenuContainer: '.menu-prepent',
					onePage: true,
				});
			//===== Responsive mainmenu End





		         //===== Sticky Menu-Bar Start
		        $(window).on('scroll',function(event) {    
		            var scroll = $(window).scrollTop();
		             if (scroll < 100) {
		                 $(".header-area").removeClass("sticky");
		             }else{
		                 $(".header-area").addClass("sticky");
		             }
		         });
		        //===== Sticky Menu-Bar End



				// Owl-Carousel Plugin Active Start
				$(".hero-slider").owlCarousel({
					items:1,
					nav:false,
					dot:true,
					loop:true,
					margin:0,
					autoplay:false,
					autoplayTimeout:3000,
					smartSpeed:1000,

				});
				// Owl-Carousel Plugin Active End

				// Owl-Carousel Plugin Active Start
				$(".hero-slider-wrapper").owlCarousel({
					items:1,
					nav:false,
					dot:true,
					loop:true,
					margin:0,
					autoplay:false,
					autoplayTimeout:3000,
					smartSpeed:1000,
				
				});

				// Owl-Carousel Plugin Active Start
				$(".testimonial-slider").owlCarousel({
					items:1,
					nav:true,
					dot:false,
					loop:true,
					margin:15,
					autoplay:false,
					autoplayTimeout:3000,
					smartSpeed:1000,
					navText: ["<img src='assets/img/angle-left.svg'>","<img src='assets/img/angle-right.svg'>"],
					responsiveClass:true,
					responsive : {
						// breakpoint from 0 up
						0 : {
							nav:false,
							dot:true,
						},
						// breakpoint from 480 up
						480 : {
							items:1,
						},
						// breakpoint from 768 up
						768 : {
							nav:false,
							dot:true,
						},
						992 : {
							items:1,
							nav:true,
							dot:false,
						}
					}
				
				});






	});



    jQuery(window).load(function(){


    });


}(jQuery));	