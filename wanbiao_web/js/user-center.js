$(document).ready(function() {
	$(".head").find(".msg_border").hover(function() {
		$(this).css("border-bottom", "2px solid brown")
		$(this).find("strong").css("color", "brown")
	}, function() {
		$(this).css("border", "none")
		$(this).find("strong").css("color", "#999")
	})
	$(".floor .c a").hover(function() {
		$(this).css("color", "#b01330")
		$(this).find("span").css("border-bottom", "1px solid #b01330")
	}, function() {
		$(this).css("color", "#333")
		$(this).find("span").css("border", "none")
	})
	$(".right .left a").hover(function() {
		$(this).find(".revise").css("color", "#b01330")
	}, function() {
		$(this).find(".revise").css("color", "#0e7daa")
	})
	$(".right .right span").hover(function() {
		$(this).css({
			"color": "#b01330",
			"border-bottom": "1px solid #b01330"
		})
	}, function() {
		$(this).css({
			"color": "#0e7daa",
			"border": "none"
		})
	})
	$(".remind .lborder .msg").hover(function() {
		$(this).find("a").css({
			"color": "#b01330",
			"border-bottom": "1px solid #b01330"
		})
	}, function() {
		$(this).find("a").css({
			"color": "#666",
			"border": "none"
		})
	})
	$(".order .order_head span").hover(function() {
		$(this).css({
			"color": "#b01330",
			"border-bottom": "1px solid #b01330"
		})
	}, function() {
		$(this).css({
			"color": "#666",
			"border": "none"
		})
	})
	$(".order .first_ul").find("li").hover(function() {
		var self = $(this).index()
		$(this).siblings("li").css({
			"background-color": "#f3f3f3",
			"border": "1px solid #dcdcdc"
		})
		$(".seal_watch .picbox").each(function() {
			$(this).css("z-index", 5)
		})
		$(this).css({
			"background-color": "white",
			"border-bottom": "none",
			"border-top": "2px solid #b01330"
		})
		$(".seal_watch .picbox").each(function() {

			if($(this).attr("title") == self) {
				$(this).css("z-index", 10)
			}
		})
	})
	$(".seal_watch .arrow_left").hover(function() {
		$(this).css("background-position-x", "-26px")
	}, function() {
		$(this).css("background-position-x", "0px")
	})
	$(".seal_watch .arrow_right").hover(function() {
		$(this).css("background-position-x", "-39px")
	}, function() {
		$(this).css("background-position-x", "-13px")
	})
	$(".seal_watch .arrow_left").click(function() {
		$(this).parent(".picbox").fadeOut("slow")
		$(this).parent(".picbox").fadeIn("slow")
	})

})