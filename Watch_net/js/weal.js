$(document).ready(function() {
			$(function() {
				var timer = null;
				var i = 0;
				$(".slider_main li").eq(i).css("z-index", 1);
				//移除/重启定时器
				$(".slider_main li").hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(setTime, 1500);;
				});

				//生成指示器（圆点），根据轮播图片的数量来生成
				$(".slider_main li").each(function() {
					$(".kkg").append("<i class='kkg_one'></i>");
					$(".kkg i").eq(0).css("background-color", "#DB192A");
				})

				$(".kkg").mouseover(function() {
					$(".conner").css("display", "block");
				});
				//小圆点绑定事件
				$(".kkg i").hover(function() {
					clearInterval(timer);
					$(".slider_main li").css("z-index", 0);
					$(".kkg i").css("background-color", "#fff");
					$(this).css("background-color", "#DB192A");
					i = $(this).index();
					$(".slider_main li").eq(i).css("z-index", 1);
				}, function() {
					timer = setInterval(setTime, 1500);
				});
				
				//图片右移
				function setTime() {
					if(i < 4) {
						i++;
					} else {
						i = 0;
					}
					$(".slider_main li").css("z-index", 0);
					$(".kkg i").css("background-color", "#fff");
					$(".slider_main li").eq(i).css("z-index", 1);
					$(".kkg i").eq(i).css("background-color", "#DB192A");
				}
				//图片左移
				function flag() {
					if(i > 0) {
						i--;
					} else {
						i = 4;
					}
					$(".slider_main li").css("z-index", 0);
					$(".kkg i").css("background-color", "#fff");
					$(".slider_main li").eq(i).css("z-index", 1);
					$(".kkg i").eq(i).css("background-color", "#DB192A");
				}

			})

		})