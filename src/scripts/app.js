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
		$(".quick_view").css("transform", "translate(-50%,-50%) scale(0)");
		$(".filter_col").css("left", "-770px")
		$(".body_overlay").css("z-index", "2")
	})
	// show side menu  
	$(".menu-btn").click(function () {
		$(".side_menu").toggleClass("view_side-menu")
		$(".body_overlay").addClass("show_overlay");
		$(".wrapper_content").toggleClass("act")
		$(this).toggleClass("opactiy_zero")
		$(".body_overlay").css("z-index", "22")
	})
	// close side menu
	$(".body_overlay").click(function () {
		$(".side_menu").removeClass("view_side-menu");
		$(".wrapper_content").removeClass("act");
		$(".menu-btn").removeClass("opactiy_zero")
		$(".children").removeClass("showchildren");
	})
	$(".close_sidemenu").click(function () {
		$(".side_menu").removeClass("view_side-menu");
		$(".wrapper_content").removeClass("act");
		$(".menu-btn").toggleClass("opactiy_zero");
		$(".body_overlay").removeClass("show_overlay");
	})
	// show children at side menu
	$("ul.categories li i").click(function () {
		console.log("test")
		$("div").toggleClass("showchildren")
	})
});


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
	autoplay: false,
	asNavFor: '.slider-nav',
	speed: 600
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	autoplay: false,
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	speed: 600
});

// main slider at home page
//   related products slider
$('.main-silder').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	arrows: true,
	autoplay: false
	,
	dots: false,
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
// slider at filter section >> collection page
$(".filter_slider").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	arrows: true,
	dots: false,
})
// prevent a href from product home page

function myFunction(x) {
	if (x.matches) { // If media query matches
		$(".prevent_click_mobile").on("click", function (event) {
			event.preventDefault();
		});
	}
}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


// apply coupon at cart page
$('.apply_btn').on('click', function () {
	$(this).toggleClass('active');
})

//   show quick view
$(".quickview_icon").click(function () {
	$(".quick_view").css("transform", "translate(-50%,-50%) scale(1)");
	// $(".body_overlay").css("z-index","22")
	$(".body_overlay").addClass("show_overlay")
})
//   close quick view
$(".close_quickview").click(function () {
	$(".quick_view").css("transform", "translate(-50%,-50%) scale(0)");
	$(".body_overlay").removeClass("show_overlay")
})

// filter at collectio page
$(".filter_box li").click(function (e) {
	e.stopPropagation()
});

$(".filter_box").click(function () {
	$(this).children('ul').slideToggle("show");
	$(this).find(".filter_box-title i").toggleClass("rotate")
});


//   view/ list grids at collection page
$(".three_column").click(function () {
	$(".cart_widget").removeClass("cart_widget4")
	$(".cart_widget").removeClass("cart_widget1")
	$(".cart_widget").toggleClass("cart_widget3")
	$(".cart").css({
		"display": "block",
	})
})
$(".four_column").click(function () {
	$(".cart_widget").removeClass("cart_widget3")
	$(".cart_widget").removeClass("cart_widget1")
	$(".cart_widget").toggleClass("cart_widget4")
	$(".cart").css({
		"display": "block",
	})
})
$(".view_grid").click(function () {
	$(".cart_widget").removeClass("cart_widget1")
	$(".cart").css({
		"display": "block",
	})
})
$(".list_grid").click(function () {
	$(".cart_widget").removeClass("cart_widget4")
	$(".cart_widget").removeClass("cart_widget3")
	$(".cart_widget").toggleClass("cart_widget1")
	$(".cart").css({
		"display": "flex",
		"align-items": "center"
	})
})


// show filter at mobile >> collection page

$(".view_filter-mobile").click(function () {
	console.log("sddjhk")
	$(".filter_col").css("left", "0")
	$(".body_overlay").addClass("show_overlay")
	$(".body_overlay").css("z-index", "222")
})
//  close filter at mobile >> collection page

$(".close_filter").click(function () {
	$(".filter_col").css("left", "-500px")
	$(".body_overlay").removeClass("show_overlay")
	$(".body_overlay").css("z-index", "2")
})





// $('.openBtn').on('click',function(){
//     $('.modal-body').load('https://zvendo.com/blog/docs',function(){
//         $('#myModal').modal({show:true});
//     });
// });



