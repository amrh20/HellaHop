"use strict";$(document).ready(function(){$(".cart-icon_head").click(function(){$(".shopping-cart_content").toggleClass("showcontent"),$(".cart-icon_head i").toggleClass("whiteColor"),$(".wishlist-icon_head i").hasClass("whiteColor")&&$(".wishlist-icon_head i").removeClass("whiteColor"),$(".compare-icon_head i").hasClass("whiteColor")&&$(".compare-icon_head i").removeClass("whiteColor"),$(".wishlist-view").toggleClass("hideIcons"),$(".compare-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".body_overlay").toggleClass("show_overlay")}),$(".wishlist-icon_head").click(function(){$(".wishlist-view_content").toggleClass("showcontent"),$(".shopping-cart").toggleClass("hideIcons"),$(".compare-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".wishlist-icon_head i").toggleClass("whiteColor"),$(".cart-icon_head i").hasClass("whiteColor")&&$(".cart-icon_head i").removeClass("whiteColor"),$(".compare-icon_head i").hasClass("whiteColor")&&$(".compare-icon_head i").removeClass("whiteColor"),$(".body_overlay").toggleClass("show_overlay")}),$(".compare-icon_head").click(function(){$(".compare-view_content").toggleClass("showcontent"),$(".shopping-cart").toggleClass("hideIcons"),$(".wishlist-view").toggleClass("hideIcons"),$(".account-view").toggleClass("hideIcons"),$(".compare-icon_head i").toggleClass("whiteColor"),$(".cart-icon_head i").hasClass("whiteColor")&&$(".cart-icon_head i").removeClass("whiteColor"),$(".wishlist-icon_head i").hasClass("whiteColor")&&$(".wishlist-icon_head i").removeClass("whiteColor"),$(".body_overlay").toggleClass("show_overlay")}),$(".account-icon_head").click(function(){$(".accounts_view ").css("right","0"),$(".wishlist-view_content").hasClass("showcontent")&&$(".wishlist-view_content").removeClass("showcontent"),$(".compare-view_content").hasClass("showcontent")&&$(".compare-view_content").removeClass("showcontent"),$(".shopping-cart_content").hasClass("showcontent")&&$(".shopping-cart_content").removeClass("showcontent"),$(".body_overlay").toggleClass("show_overlay")}),$(".close_accountView").click(function(){$(".accounts_view ").css("right","-350px"),$(".body_overlay").removeClass("show_overlay")}),$(".body_overlay").click(function(){$(".custom_content").removeClass("showcontent"),$(".body_overlay").removeClass("show_overlay"),$(".wishlist-view").removeClass("hideIcons"),$(".compare-view").removeClass("hideIcons"),$(".account-view").removeClass("hideIcons"),$(".shopping-cart").removeClass("hideIcons"),$(".header .mid_header .mid_header-content .icons i").removeClass("whiteColor"),$(".accounts_view").css("right","-350px")})});var $cont=$(".cont"),$slider=$(".slider"),$nav=$(".nav"),winW=$(window).width(),animSpd=750,distOfLetGo=.2*winW,curSlide=1,animation=!1,autoScrollVar=!0,diff=0,arrCities=["Amsterdam","Rome","New\u2014York","Singapore","Prague"],numOfCities=arrCities.length,arrCitiesDivided=[];arrCities.map(function(a){var b=a.length,c=Math.floor(b/4),d=new RegExp(".{1,"+c+"}","g");arrCitiesDivided.push(a.match(d))});for(var generateSlide=function(a){for(var b,c=$(document.createDocumentFragment()),d=$(document.createDocumentFragment()),e=arrCities.indexOf(arrCities[a])+1,f=arrCitiesDivided[a][0].charAt(0),g=$("<div data-target=\"".concat(e,"\" class=\"slide slide--").concat(e,"\">\n\t\t\t\t\t\t\t<div class=\"slide__darkbg slide--").concat(e,"__darkbg\"></div>\n\t\t\t\t\t\t\t<div class=\"slide__text-wrapper slide--").concat(e,"__text-wrapper\"></div>\n\t\t\t\t\t\t</div>")),h=$("<div class=\"slide__letter slide--".concat(e,"__letter\">\n\t\t\t\t\t\t\t").concat(f,"\n\t\t\t\t\t\t</div>")),j=0,k=arrCitiesDivided[a].length;j<k;j++)b=$("<div class=\"slide__text slide__text--".concat(j+1,"\">\n\t\t\t\t\t\t\t\t").concat(arrCitiesDivided[a][j],"\n\t\t\t\t\t\t\t</div>")),c.append(b);var l=$("<li data-target=\"".concat(e,"\" class=\"nav__slide nav__slide--").concat(e,"\"></li>"));d.append(l),$nav.append(d),g.find(".slide--".concat(e,"__text-wrapper")).append(h).append(c),$slider.append(g),4>=arrCities[a].length&&$(".slide--"+e).find(".slide__text").css("font-size","12vw")},i=0,length=numOfCities;i<length;i++)generateSlide(i);$(".nav__slide--1").addClass("nav-active");function bullets(a){$(".nav__slide--"+curSlide).removeClass("nav-active"),$(".nav__slide--"+a).addClass("nav-active")}function timeout(){animation=!1}function pagination(a){animation=!0,diff=0,$slider.addClass("animation"),$slider.css({transform:"translate3d(-"+100*(curSlide-a)+"%, 0, 0)"}),$slider.find(".slide__darkbg").css({transform:"translate3d("+50*(curSlide-a)+"%, 0, 0)"}),$slider.find(".slide__letter").css({transform:"translate3d(0, 0, 0)"}),$slider.find(".slide__text").css({transform:"translate3d(0, 0, 0)"})}function navigateRight(){!autoScrollVar||curSlide>=numOfCities||(pagination(0),setTimeout(timeout,animSpd),bullets(curSlide+1),curSlide++)}function navigateLeft(){1>=curSlide||(pagination(2),setTimeout(timeout,animSpd),bullets(curSlide-1),curSlide--)}function toDefault(){pagination(1),setTimeout(timeout,animSpd)}$(document).on("mousedown touchstart",".slide",function(a){if(!animation){var b=+$(this).attr("data-target"),c=a.pageX||a.originalEvent.touches[0].pageX;$slider.removeClass("animation"),$(document).on("mousemove touchmove",function(a){var d=a.pageX||a.originalEvent.touches[0].pageX;diff=c-d,1===b&&0>diff||b===numOfCities&&0<diff||($slider.css({transform:"translate3d(-"+(100*(curSlide-1)+diff/30)+"%, 0, 0)"}),$slider.find(".slide__darkbg").css({transform:"translate3d("+(50*(curSlide-1)+diff/60)+"%, 0, 0)"}),$slider.find(".slide__letter").css({transform:"translate3d("+diff/60+"vw, 0, 0)"}),$slider.find(".slide__text").css({transform:"translate3d("+diff/15+"px, 0, 0)"}))})}}),$(document).on("mouseup touchend",function(){$(document).off("mousemove touchmove");animation||(diff>=distOfLetGo?navigateRight():diff<=-distOfLetGo?navigateLeft():toDefault())}),$(document).on("click",".nav__slide:not(.nav-active)",function(){var a=+$(this).attr("data-target");bullets(a),curSlide=a,pagination(1)}),$(document).on("click",".side-nav",function(){var a=$(this).attr("data-target");"right"===a&&navigateRight(),"left"===a&&navigateLeft()}),$(document).on("keydown",function(a){39===a.which&&navigateRight(),37===a.which&&navigateLeft()}),$(document).on("mousewheel DOMMouseScroll",function(a){if(!animation){var b=a.originalEvent.wheelDelta;(0<b||0>a.originalEvent.detail)&&navigateLeft(),(0>b||0<a.originalEvent.detail)&&navigateRight()}}),$(document).ready(function(){(function(a){a(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),a(".tab ul.tabs li a").click(function(b){var c=a(this).closest(".tab"),d=a(this).closest("li").index();c.find("ul.tabs > li").removeClass("current"),a(this).closest("li").addClass("current"),c.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq("+d+")").slideUp(),c.find(".tab_content").find("div.tabs_item:eq("+d+")").slideDown(),b.preventDefault()})})(jQuery)});