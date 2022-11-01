jQuery(document).ready(function(){
	jQuery('.back_top_top').click(function () { 
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top
		}, 1500);
		return false;
	});


jQuery('.testimonial_slider_box').owlCarousel({
	loop: false,
    margin: 32,
    items: 1,
    responsiveClass: true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
				autoplay: true,
			},
			992:{
				items:3,
				dots:false,
				loop: false,
				mouseDrag: false,
        		touchDrag: false,
			}
		}
	});

	jQuery('.comparea_slider').owlCarousel({
		loop:true,
		items: 5,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:false,
				margin: 0,
			 dotsEach: 3,
			},
			992:{
				items:5,
				margin: 80,
			},
			1440:{
				items:5,
				margin: 165,
			}
		}
	});

	jQuery('.what_thay_slider').owlCarousel({
		loop:true,
		items: 3,
		nav:true,
		dots:false,
		mouseDrag: true,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin: 0,
			 dotsEach: 3,
			},
			992:{
				items:2,
				margin: 0,
				nav:true,
			},
			1366:{
				items:3,
				margin: 0,
				nav:true,
			}
		}
	});

	// setTimeout
	jQuery('.btn_cls_timeout').on("click", function(){
		jQuery(this).addClass('timeout_active');

		// removeclasses
		var btn_target = jQuery(this).attr('data-timeout-target');
		var action_target = ( btn_target ) ? jQuery('.btn_cls_timeout[data-timeout-target='+ btn_target+']') : jQuery('.btn_cls_timeout');
		setTimeout(function() {
		    action_target.removeClass('timeout_active');
		}, 700);	
	});

});

