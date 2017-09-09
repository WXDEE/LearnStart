$(function () {
	//手机万表
	var phone = $(".header .top_contain li").eq(3);
	//二维码
	var twoCode = $(".header .top_contain .phone_watch");
	//右侧悬浮栏
	var susRight=$(".suspend a  .sus_right");
	var susLeft=$(".suspend a  .sus_left");
	//底部二维码显示
	var footcode1=$(".footer .foot_mid .code01").find("li");
	var footcode2=$(".footer .foot_mid .code02").find("li");
	var footcodeImg01=$(".footer .foot_mid .code01 .code_img");
	var footcodeImg02=$(".footer .foot_mid .code02 .code_img");
	
	//手机万表二维码显示
	twoCode.css("left", phone.offset().left);
	phone.hover(function() {
		$(this).css({
			color: "#000",
			padding: "7px 10px",
			marginTop: "-7px",
			backgroundColor: "#fff"
		});
		twoCode.css("display", "block");
		twoCode.hover(function() {
			twoCode.css("display", "block");
		}, function() {
			twoCode.css("display", "none");
		})
	}, function() {
		$(this).css({
			color: "#ccbeb8",
			padding: "0 10px",
			marginTop: 0,
			backgroundColor: "#333"
		});
		twoCode.css("display", "none");
	})
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
	//右侧悬浮栏
	susRight.hover(function () {
		$(this).css("backgroundColor","#666");
		$(this).siblings().css("display","block");
	},function () {
		$(this).siblings().hover(function () {
			$(this).css("display","block");
			$(this).siblings().css("backgroundColor","#666");
		},function () {
			$(this).css("display","none");
			$(this).siblings().css("backgroundColor","#eee");
		})
		$(this).css("backgroundColor","#eee");
		$(this).siblings().css("display","none");
	})
})
