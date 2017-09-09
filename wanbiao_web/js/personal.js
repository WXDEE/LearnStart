$(document).ready(function() {
	
		//右侧悬浮栏
	var susRight=$(".suspend a  .sus_right");
	var susLeft=$(".suspend a  .sus_left");
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
	
	
	$(".select1").click(function() {
		var option = $(this).find("option")
		option.each(function() {
			if($(this).prop("selected")) {
				msg = $(this).prop("value")
				title = $(this).prop("title")
			}
		})
		if(msg != "请选择") {
			select3 = $(this).siblings(".select3")
			select2 = $(this).siblings(".select2")
			select3.each(function() {
				$(this).css("visibility", "visible")
				$(this).css("z-index", 10)
				if($(this).prop("title") == title) {
					$(this).css("z-index", 15)
				}
			})
			select2.each(function() {
				$(this).css("visibility", "hidden")
				$(this).css("z-index", 10)
				if($(this).prop("title") == title) {
					$(this).css("visibility", "visible")
					$(this).css("z-index", 15)
				}
			})
		} else {
			$(this).siblings(".select3").css("visibility", "hidden")
		}
	})

	$(".rightbox").Validform({
		btnSubmit: ".bottom_btn",
		tiptype: 3,
		ajaxPost: true,
	});

})