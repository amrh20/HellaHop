$(document).ready(function () {
	// show cart content at header
	$(".cart-icon_head").click(function () {
		$(".shopping-cart_content").toggleClass("showcontent");
		$(".cart-icon_head i").toggleClass("whiteColor");
		if ($(".wishlist-icon_head i").hasClass("whiteColor")) {
			$(".wishlist-icon_head i").removeClass("whiteColor")
		}
		if ($(".compare-icon_head i").hasClass("whiteColor")) {
			$(".compare-icon_head i").removeClass("whiteColor")
		}
		$(".wishlist-view").toggleClass("hideIcons")
		$(".compare-view").toggleClass("hideIcons")
		$(".account-view").toggleClass("hideIcons")
		//   show overlay
		$(".body_overlay").toggleClass("show_overlay")
	})
	// show wishlist content at header
	$(".wishlist-icon_head").click(function () {
		$(".wishlist-view_content").toggleClass("showcontent")
		$(".shopping-cart").toggleClass("hideIcons")
		$(".compare-view").toggleClass("hideIcons")
		$(".account-view").toggleClass("hideIcons")
		$(".wishlist-icon_head i").toggleClass("whiteColor")
		if ($(".cart-icon_head i").hasClass("whiteColor")) {
			$(".cart-icon_head i").removeClass("whiteColor")
		}
		if ($(".compare-icon_head i").hasClass("whiteColor")) {
			$(".compare-icon_head i").removeClass("whiteColor")
		}
		//   show overlay
		$(".body_overlay").toggleClass("show_overlay")
	})
	// show compare content at header
	$(".compare-icon_head").click(function () {
		$(".compare-view_content").toggleClass("showcontent");
		$(".shopping-cart").toggleClass("hideIcons")
		$(".wishlist-view").toggleClass("hideIcons")
		$(".account-view").toggleClass("hideIcons")
		$(".compare-icon_head i").toggleClass("whiteColor")
		if ($(".cart-icon_head i").hasClass("whiteColor")) {
			$(".cart-icon_head i").removeClass("whiteColor")
		}
		if ($(".wishlist-icon_head i").hasClass("whiteColor")) {
			$(".wishlist-icon_head i").removeClass("whiteColor")
		}
		//   show overlay
		$(".body_overlay").toggleClass("show_overlay")
	})
	// show account view at header
	$(".account-icon_head").click(function () {
		$(".accounts_view ").css("right", "0");
		if ($(".wishlist-view_content").hasClass("showcontent")) {
			$(".wishlist-view_content").removeClass("showcontent")
		}
		if ($(".compare-view_content").hasClass("showcontent")) {
			$(".compare-view_content").removeClass("showcontent")
		}
		if ($(".shopping-cart_content").hasClass("showcontent")) {
			$(".shopping-cart_content").removeClass("showcontent")
		}
		//   show overlay
		$(".body_overlay").toggleClass("show_overlay")
	})
	// close account view
	$(".close_accountView").click(function () {
		$(".accounts_view ").css("right", "-350px");
		$(".body_overlay").removeClass("show_overlay");

	})
	//  close all dropdowns on click out side
	$(".body_overlay").click(function () {
		$(".custom_content").removeClass("showcontent")
		$(".body_overlay").removeClass("show_overlay")
		$(".wishlist-view").removeClass("hideIcons")
		$(".compare-view").removeClass("hideIcons")
		$(".account-view").removeClass("hideIcons")
		$(".shopping-cart").removeClass("hideIcons")
		$(".header .mid_header .mid_header-content .icons i").removeClass("whiteColor")
		$(".accounts_view").css("right", "-350px")
		$(".quick_view").css("transform","translate(-50%,-50%) scale(0)");
	})
	// side side menu  
	$(".menu-btn").click(function () {
		$(".side_menu").toggleClass("view_side-menu")
		$(".body_overlay").addClass("show_overlay");
		$(".wrapper_content").toggleClass("act")
		$(this).toggleClass("opactiy_zero")
	})
	// close side menu
	$(".body_overlay").click(function () {
		$(".side_menu").removeClass("view_side-menu");
		$(".wrapper_content").removeClass("act");
		$(".menu-btn").removeClass("opactiy_zero")
		$(".childern").removeClass("showchildern");
	})
	$(".close_sidemenu").click(function () {
		$(".side_menu").removeClass("view_side-menu");
		$(".wrapper_content").removeClass("act");
		$(".menu-btn").toggleClass("opactiy_zero");
		$(".body_overlay").removeClass("show_overlay");
	})
	// show childern at side menu
	$("ul.categories li i").click(function () {
		console.log("test")
		$("div").toggleClass("showchildern")
	})
});

// main slider

$(document).ready(function(){
  
	$(".Modern-Slider").slick({
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:600,
	  slidesToShow:1,
	  slidesToScroll:1,
	  pauseOnHover:false,
	  dots:true,
	  pauseOnDotsHover:true,
	  cssEase:'linear',
	 // fade:true,
	  draggable:false,
	  prevArrow:'<button class="PrevArrow"></button>',
	  nextArrow:'<button class="NextArrow"></button>', 
	});
	
  })
// var allButtons = document.querySelectorAll('.icon_head');
// console.log("Found", allButtons.length, "div which class starts with “button”.");

// for (var i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener('click', function() {
//     $(".shopping-cart_content").toggleClass("showcontent")
//   });
// }


$(document).ready(function () {
	// tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp()
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

});

// slick slider at product details
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
	speed: 600
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	speed: 600
});

//   related products slider
$('.multiple-items').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 600,
	arrows: true,
	autoplay: true,
	dots: false,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  },
		},
		{
			breakpoint: 992,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			},
		  },
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
	  ]
});


// prevent a href from product home page

  function myFunction(x) {
	if (x.matches) { // If media query matches
		$(".prevent_click_mobile").on("click", function(event) {
			event.preventDefault();
		  });
	} 
  }
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


// apply coupon at cart page
$('.apply_btn').on('click', function() {
	$(this).toggleClass('active');
  })

//   show quick view
$(".quickview_icon").click(function(){
	$(".quick_view").css("transform","translate(-50%,-50%) scale(1)");
	// $(".body_overlay").css("z-index","22")
	$(".body_overlay").addClass("show_overlay")
})
//   close quick view
$(".close_quickview").click(function(){
	$(".quick_view").css("transform","translate(-50%,-50%) scale(0)");
	$(".body_overlay").removeClass("show_overlay")
})