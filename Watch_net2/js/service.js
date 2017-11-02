
$(document).ready(function () {
	//底部二维码显示
	var footcode1=$(".footer .foot_mid .code01").find("li");
	var footcode2=$(".footer .foot_mid .code02").find("li");
	var footcodeImg01=$(".footer .foot_mid .code01 .code_img");
	var footcodeImg02=$(".footer .foot_mid .code02 .code_img");
	
	
	//底部二维码显示
	footcode1.mouseover(function () {
		footcode1.removeClass("code_in");
		$(this).addClass("code_in");
		num1=$(this).index();
		footcodeImg01.removeClass("display");
		footcodeImg01.eq(num1).addClass("display");
	})
	footcode2.mouseover(function () {
		footcode2.removeClass("code_in");
		$(this).addClass("code_in");
		num1=$(this).index();
		footcodeImg02.removeClass("display");
		footcodeImg02.eq(num1).addClass("display");
	})
	
	$(".rmsg2_hover").hover(function () {
		$(this).find("img").css({"display":"block","z-index":10})
	},function () {
		$(this).find("img").css("display","none")
	})
	$(".big_msg").find("li").hover(function () {
		$(this).removeClass("bigheader_msg1").addClass("bigheader_msg")
		
	},function () {
		$(this).removeClass("bigheader_msg").addClass("bigheader_msg1")
	})
	$(".information").find("h5").hover(function () {
		$(this).css("color","crimson")
	},function () {
		$(this).css("color","#666")
	})
	$(".question").find("a").hover(function () {
		$(this).css("color","crimson")
	},function () {
		$(this).css("color","#666")
	})
	$(".fix").find(".back").click(function () {
		var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
	})
	$(".shadow").hover(function () {
		$(this).css("background-color","deepskyblue")
	},function () {
		$(this).css({"background-color":"black","opacity":0.8})
	})
	$(".thead_msg ").hover(function () {
		$(this).css("border-bottom","2px solid saddlebrown")
	},function () {
		$(this).css("border","none")
	})
	
	
	$(".information .information_box ").hover(function () {
				$(this).siblings(".information_box ").find("img").stop().animate({
					opacity:0.5
				})
				$(this).siblings(".information_box1 ").find("img").stop().animate({
					opacity:0.5
				})
			},function () {
				$(this).siblings(".information_box").find("img").stop().animate({
					opacity:1
				})
				$(this).siblings(".information_box1").find("img").stop().animate({
					opacity:1
				})
			})
		$(".information .information_box1 ").hover(function () {
				$(this).siblings(".information_box ").find("img").stop().animate({
					opacity:0.5
				})
				$(this).siblings(".information_box1 ").find("img").stop().animate({
					opacity:0.5
				})
			},function () {
				$(this).siblings(".information_box").find("img").stop().animate({
					opacity:1
				})
				$(this).siblings(".information_box1").find("img").stop().animate({
					opacity:1
				})
			})
	
})
