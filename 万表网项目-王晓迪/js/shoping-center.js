$(document).ready(function() {
	var mySlider1 = new slider1({
		wrap: '.slider_main',
		//轮播间隔
		duration: 2000,
		//轮播速度
		speed: 500
	});

	var mySlider = new slider({
		wrap: '#slider',
		//轮播间隔
		duration: 2000,
		//轮播速度
		speed: 500
	});
	var mySlider2 = new slider({
		wrap: '#slider2',
		//轮播间隔
		duration: 2000,
		//轮播速度
		speed: 500
	});
	var mySlider3 = new slider({
		wrap: '#slider3',
		//轮播间隔
		duration: 2000,
		//轮播速度
		speed: 500
	});

	new tabs("tab1", 0, "hover");
	new tabs("tab2", 0, "hover");
	//右侧导航栏下拉菜单
	var m = 0;
	$(".toggle_btn").click(function() {
		m++
		if(m % 2 == 1) {
			$(".brand").css("display", "block");
			$(this).text("收起∧")
			$(this).css("margin-left", "449px")
		}
		if(m % 2 == 0) {
			$(".brand").css("display", "none");
			$(".brand").eq(0).css("display", "block");
			$(".brand").eq(1).css("display", "block");
			$(".brand").eq(2).css("display", "block");
			$(this).text("更多选项（表盘、表带、功能、防水等）∨")
			$(this).css("margin-left", "375px")
		}
	});
	
	$(".con-sort").eq(0).click(function () {
		
		$(".con-sort").find(".icon-d").css("background-position", "-2px -91px");
		$(this).find(".icon-d").css("background-position", "-2px -113px");
		$(".con-sort").find(".icon-ud").css("background-position", "-75px -90px");

	});
	$(".con-sort").eq(3).click(function () {
		$(".con-sort").find(".icon-d").css("background-position", "-2px -91px");
		$(this).find(".icon-d").css("background-position", "-2px -113px");
		$(".con-sort").find(".icon-ud").css("background-position", "-75px -90px");

	})
	//价格排序
	
	var m = 0;
	$(".con-sort").eq(1).click(function() {
		$(".con-sort").removeClass("act");
		$(this).addClass("act")
		$(".s-pic3").css("display", "none");
		$(".con-sort").find(".icon-d").css("background-position", "-2px -91px");
		$(".con-sort").find(".icon-ud").css("background-position", "-75px -90px");

		++m;
		console.log(m);

		if(m % 2 == 1) {
			$(".act .icon-ud").css("background-position", "-2px -113px")
			var oDiv = $(".s-price b")

			var arr3 = [];
			$.each($(".s-price b"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("￥");
				var b = span2.innerHTML.split("￥")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n1 - n2;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		} else {
			$(".act .icon-ud").css("background-position", "-2px -136px")
			var oDiv = $(".s-price b")

			var arr3 = [];
			$.each($(".s-price b"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("￥");
				var b = span2.innerHTML.split("￥")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n2 - n1;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		}
	})
	//销量排序

	var m = 0;
	$(".con-sort").eq(2).click(function() {
		$(".con-sort").removeClass("act");
		$(this).addClass("act")
		$(".s-pic3").css("display", "none");
		$(".con-sort").find(".icon-d").css("background-position", "-2px -91px");
		$(".con-sort").find(".icon-ud").css("background-position", "-75px -90px");
			++m;
		console.log(m)
		if(m % 2 == 1) {
			$(".act .icon-d").css("background-position", "-2px -113px")
			var oDiv = $(".s-price span")

			var arr3 = [];
			$.each($(".s-price span"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("销量");
				var b = span2.innerHTML.split("销量")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n1 - n2;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		} else {
			$(".act .icon-d").css("background-position", "-2px -136px")
			var oDiv = $(".s-price span")

			var arr3 = [];
			$.each($(".s-price span"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("销量");
				var b = span2.innerHTML.split("销量")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n2 - n1;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		}
	})
	//折扣排序

	var m = 0;
	$(".con-sort").eq(4).click(function() {
		$(".con-sort").removeClass("act");
		$(this).addClass("act")
		$(".s-pic3").css("display", "none");
		$(".con-sort").find(".icon-d").css("background-position", "-2px -91px");
		$(".con-sort").find(".icon-ud").css("background-position", "-75px -90px");
			++m;
		console.log(m)
		if(m % 2 == 1) {
			$(".act .icon-ud").css("background-position", "-2px -113px")
			var oDiv = $(".s-price i")

			var arr3 = [];
			$.each($(".s-price i"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("【");
				var b = span2.innerHTML.split("【")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n1 - n2;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		} else {
			$(".act .icon-ud").css("background-position", "-2px -136px")
			var oDiv = $(".s-price i")

			var arr3 = [];
			$.each($(".s-price i"), function(i) {
				arr3[i] = oDiv[i];
			});

			arr3.sort(function(span1, span2) {
				var a = span1.innerHTML.split("【");
				var b = span2.innerHTML.split("【")
				var n1 = parseInt(a[1]);
				var n2 = parseInt(b[1]);

				return n2 - n1;

			});
			for(var i = 0; i < arr3.length; i++) {
				$(".shoping-pic").after(arr3[i].parentNode.parentNode.parentNode.parentNode);

			}

		}
	})
	//下拉列表
	$(".model-up").click(function() {
		$(".model-down").css("display", "block")
	})
	$(".model-up").hover(function() {

	}, function() {
		$(".model-down").css("display", "none")
	})

	$(".model-up1").click(function() {
		$(".model-down1").css("display", "block")
	})
	$(".model-up1").hover(function() {

	}, function() {
		$(".model-down1").css("display", "none")
	})

	$(".model-up2").click(function() {
		$(".model-down22").css("display", "block")
	})
	$(".model-up2").hover(function() {

	}, function() {
		$(".model-down22").css("display", "none")
	})

	$(".model-up3").click(function() {
		$(".model-down3").css("display", "block")
	})
	$(".model-up3").hover(function() {

	}, function() {
		$(".model-down3").css("display", "none")
	})

	$(".model-up4").click(function() {
		$(".model-down4").css("display", "block")
	})
	$(".model-up4").hover(function() {

	}, function() {
		$(".model-down4").css("display", "none")
	})

	$(".model-up5").click(function() {
		$(".model-down5").css("display", "block")
	})
	$(".model-up5").hover(function() {

	}, function() {
		$(".model-down5").css("display", "none")
	})

	$(".con-sort").eq(0).click(function() {
		$(".con-sort").removeClass("act");
		$(this).addClass("act");
	})
	$(".con-sort").eq(3).click(function() {
		$(".con-sort").removeClass("act");
		$(this).addClass("act");
	})
	//更多
	var a = 0;
	$(".table-more").eq(0).click(function() {
		a++
		if(a % 2 == 1) {
			$(this).text("∧收起");
			$(".table-1 tr").eq(4).removeClass("tab-act");
			$(".table-1 tr").eq(5).removeClass("tab-act");
		} else {
			$(this).text("∨更多");
			$(".table-1 tr").eq(4).addClass("tab-act");
			$(".table-1 tr").eq(5).addClass("tab-act");
		}
	})
	var b = 0;
	$(".table-more").eq(8).click(function() {
		b++
		if(b % 2 == 1) {
			$(this).text("∧收起");
			$(".brand-content").eq(7).removeClass("tab-act");
		} else {
			$(this).text("∨更多");
			$(".brand-content").eq(7).addClass("tab-act");
		}
	})
	var c = 0;
	$(".table-more").eq(13).click(function() {
		c++
		if(c % 2 == 1) {
			$(this).text("∧收起");
			$(".brand-content").eq(12).removeClass("tab-act");
		} else {
			$(this).text("∨更多");
			$(".brand-content").eq(12).addClass("tab-act");
		}
	})
	var pag1 = $(".con-pages b").text();
	var pag = parseInt(pag1);

	$(".p_pre").click(function() {

		console.log(pag)
		if(pag == 1) {
			$(".con-pages b").text(pag);
			$(".p_pre").css("background-color", "#f1f1f1")

		}
		--pag;
		if(pag < 1) {
			$(".con-pages b").text(1);
			pag = 1;
			$(".p_pre").css("background-color", "#f1f1f1")
		} else {
			$(".con-pages b").text(pag);
			$(".p_pre").css("background-color", "#ffffff")
		}
	});
	$(".p_next").click(function() {
		++pag;
		console.log(pag)
		if(pag == 1) {
			$(".con-pages b").text(pag);
			$(".p_pre").css("background-color", "#f1f1f1")
		}
		if(pag < 1) {
			pag = 1;
			$(".con-pages b").text(1);
			$(".p_pre").css("background-color", "#f1f1f1")
		} else {
			$(".con-pages b").text(pag);
			$(".p_pre").css("background-color", "#ffffff")
		}
	});

	$(".model-down0").click(function() {
		var dot = $(this).text()
		$(this).parent().parent().css("border-color", "#b01330").find("c").text(dot).css("color", "#b01330")

	})
	$(".model-down21").click(function() {
		var dot = $(this).text()
		$(this).parent().parent().css("width", "127px").css("border-color", "#b01330").find("c").text(dot).css("color", "#b01330")

	})

});