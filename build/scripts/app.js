"use strict";$(document).ready(function(){$(".cart-icon_head").click(function(){$(".shopping-cart_content").toggleClass("showcontent"),$(".cart-icon_head i").toggleClass("whiteColor"),$(".wishlist-icon_head i").hasClass("whiteColor")&&$(".wishlist-icon_head i").removeClass("whiteColor"),$(".compare-icon_head i").hasClass("whiteColor")&&$(".compare-icon_head i").removeClass("whiteColor"),$(".wishlist-view").toggleClass("hideIcons"),$(".compare-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".body_overlay").toggleClass("show_overlay")}),$(".wishlist-icon_head").click(function(){$(".wishlist-view_content").toggleClass("showcontent"),$(".shopping-cart").toggleClass("hideIcons"),$(".compare-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".wishlist-icon_head i").toggleClass("whiteColor"),$(".cart-icon_head i").hasClass("whiteColor")&&$(".cart-icon_head i").removeClass("whiteColor"),$(".compare-icon_head i").hasClass("whiteColor")&&$(".compare-icon_head i").removeClass("whiteColor"),$(".body_overlay").toggleClass("show_overlay")}),$(".compare-icon_head").click(function(){$(".compare-view_content").toggleClass("showcontent"),$(".shopping-cart").toggleClass("hideIcons"),$(".wishlist-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".compare-icon_head i").toggleClass("whiteColor"),$(".cart-icon_head i").hasClass("whiteColor")&&$(".cart-icon_head i").removeClass("whiteColor"),$(".wishlist-icon_head i").hasClass("whiteColor")&&$(".wishlist-icon_head i").removeClass("whiteColor"),$(".body_overlay").toggleClass("show_overlay")}),$(".account-icon_head").click(function(){$(".accounts_view ").css("right","0"),$(".wishlist-view_content").hasClass("showcontent")&&$(".wishlist-view_content").removeClass("showcontent"),$(".compare-view_content").hasClass("showcontent")&&$(".compare-view_content").removeClass("showcontent"),$(".shopping-cart_content").hasClass("showcontent")&&$(".shopping-cart_content").removeClass("showcontent"),$(".body_overlay").toggleClass("show_overlay")}),$(".close_accountView").click(function(){$(".accounts_view ").css("right","-350px"),$(".body_overlay").removeClass("show_overlay")}),$(".body_overlay").click(function(){$(".custom_content").removeClass("showcontent"),$(".body_overlay").removeClass("show_overlay"),$(".wishlist-view").removeClass("hideIcons"),$(".compare-view").removeClass("hideIcons"),$(".account-view").removeClass("hideIcons"),$(".shopping-cart").removeClass("hideIcons"),$(".header .mid_header .mid_header-content .icons i").removeClass("whiteColor"),$(".accounts_view").css("right","-350px"),$(".quick_view").css("transform","translate(-50%,-50%) scale(0)")}),$(".menu-btn").click(function(){$(".side_menu").toggleClass("view_side-menu"),$(".body_overlay").addClass("show_overlay"),$(".wrapper_content").toggleClass("act"),$(this).toggleClass("opactiy_zero")}),$(".body_overlay").click(function(){$(".side_menu").removeClass("view_side-menu"),$(".wrapper_content").removeClass("act"),$(".menu-btn").removeClass("opactiy_zero"),$(".childern").removeClass("showchildern")}),$(".close_sidemenu").click(function(){$(".side_menu").removeClass("view_side-menu"),$(".wrapper_content").removeClass("act"),$(".menu-btn").toggleClass("opactiy_zero"),$(".body_overlay").removeClass("show_overlay")}),$("ul.categories li i").click(function(){console.log("test"),$("div").toggleClass("showchildern")})}),$(document).ready(function(){$(".Modern-Slider").slick({autoplay:!0,autoplaySpeed:1e4,speed:600,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1,dots:!0,pauseOnDotsHover:!0,cssEase:"linear",draggable:!1,prevArrow:"<button class=\"PrevArrow\"></button>",nextArrow:"<button class=\"NextArrow\"></button>"})}),$(document).ready(function(){(function(a){a(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),a(".tab ul.tabs li a").click(function(b){var c=a(this).closest(".tab"),d=a(this).closest("li").index();c.find("ul.tabs > li").removeClass("current"),a(this).closest("li").addClass("current"),c.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq("+d+")").slideUp(),c.find(".tab_content").find("div.tabs_item:eq("+d+")").slideDown(),b.preventDefault()})})(jQuery)}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav",speed:600}),$(".slider-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!0,focusOnSelect:!0,speed:600}),$(".multiple-items").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,speed:600,arrows:!0,autoplay:!0,dots:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}}]}),$(".filter_slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,speed:600,arrows:!0,autoplay:!0,dots:!1});function myFunction(a){a.matches&&$(".prevent_click_mobile").on("click",function(a){a.preventDefault()})}var x=window.matchMedia("(max-width: 768px)");myFunction(x),x.addListener(myFunction),$(".apply_btn").on("click",function(){$(this).toggleClass("active")}),$(".quickview_icon").click(function(){$(".quick_view").css("transform","translate(-50%,-50%) scale(1)"),$(".body_overlay").addClass("show_overlay")}),$(".close_quickview").click(function(){$(".quick_view").css("transform","translate(-50%,-50%) scale(0)"),$(".body_overlay").removeClass("show_overlay")}),$(".filter_box li").click(function(a){a.stopPropagation()}),$(".filter_box").click(function(){$(this).children("ul").slideToggle("show"),$(this).find(".filter_box-title i").toggleClass("rotate")}),$(".three_column").click(function(){$(".cart_widget").removeClass("cart_widget4"),$(".cart_widget").toggleClass("cart_widget3")}),$(".four_column").click(function(){$(".cart_widget").removeClass("cart_widget3"),$(".cart_widget").removeClass("cart_widget1"),$(".cart_widget").toggleClass("cart_widget4")}),$(".view_grid").click(function(){$(".cart_widget").removeClass("cart_widget4"),$(".cart_widget").removeClass("cart_widget1"),$(".cart_widget").toggleClass("cart_widget3")}),$(".list_grid").click(function(){console.log("test"),$(".cart_widget").removeClass("cart_widget4"),$(".cart_widget").removeClass("cart_widget3"),$(".cart_widget").toggleClass("cart_widget1")});