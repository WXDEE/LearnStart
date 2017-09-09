$(document).ready(function () {
	$(".msg a").hover(function () {
		$(this).find(".head_my").css({"color":"#b01330","border-bottom":"1px solid #b01330"})
	},function () {
		$(this).find(".head_my").css({"color":"#666","border":"none"})
	})
	$(".border_bottom a").hover(function () {
		$(this).find("span").css({"color":"#b01330","border-bottom":"1px solid #b01330"})
	},function () {
		$(this).find("span").css({"color":"#0e7dda","border":"none"})
	})



})
