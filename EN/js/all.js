$(window).load(function(){$(".flexslider").flexslider({animation:"fade",controlNav:!1})}),$(function(){$.stellar({horizontalScrolling:!1})}),$(document).ready(function(){$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top-58},1e3),!0}})}),$("#nav a").click(function(){$("#nav a").removeClass("active"),$(this).addClass("active")}),$(function(){$("#menu").slicknav()}),(new WOW).init()});

$(document).ready(function() {
		$(".fancybox").fancybox();
	});

	$(window).load(function() {
		$(".status").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
