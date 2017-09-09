$(function() {
	//logo隐藏
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if(st > 64) {
			$(".header").addClass("mini");
		}
		if(st < 64) {
			$(".header").removeClass('mini');
		}
	})
	//content向上滑动
	var a = $(window).height();
	$(window).scroll(function() {
		var b = $(this).scrollTop();
		var pro = $(".content .mproject div");
		var pro_img = $(".content .mproject .pro_item li");
		var ser = $(".content .mservice div");
		var ser_li = $(".content .mservice .serlist li");
		var page = $(".content .mpage .fadeInUp");
		var page_box = $(".content .mpage .box div");
		var news = $(".content .mnews .fadeInUp");
		var new_list = $(".content .mnews .new_list .list");
		var foot_left = $(".footer .fadeInUp");
		var foot_right = $(".footer .fadeInLeft");

		pro.each(function() {
			var c = $(this).offset().top - 50;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
		pro_img.each(function() {
			var c = $(this).offset().top - 400;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})

		ser.each(function() {
			var c = $(this).offset().top - 60;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
		ser_li.each(function() {
			var c = $(this).offset().top - 500;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})

		page.each(function() {
			var c = $(this).offset().top;
			if($(this).index() == 0) {
				c -= 450;
			}
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
		page_box.each(function() {
			var c = $(this).offset().top - 150;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})

		news.each(function() {
			var c = $(this).offset().top - 50;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
		new_list.each(function() {
			var c = $(this).offset().top - 300;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})

		foot_left.each(function() {
			var c = $(this).offset().top - 100;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
		foot_right.each(function() {
			var c = $(this).offset().top + 100;
			if(a + b > c) {
				$(this).addClass("move");
			}
			if(a + b < c) {
				$(this).removeClass("move");
			}
		})
	})
	//微信跳出
	var weixin = $(".footer .foot_ikon a").eq(2);
	weixin.click(function() {
		$(".weixin").css("display", "block");

	})
	$(".weixin").click(function() {
		$(this).css("display", "none");
	})
	
	//手机跳出
	var phone = $(".suspend a").eq(1);
	phone.click(function() {
		$(".phone").css("display", "block");

	})
	$(".phone").click(function() {
		$(this).css("display", "none");
	})
})