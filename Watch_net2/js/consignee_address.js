$(document).ready(function() {
	//	$(".newbox .select1").click(function() {
	//		var option = $(this).find("option")
	//		option.each(function() {
	//			if($(this).prop("selected")) {
	//				msg = $(this).prop("value")
	//				title = $(this).prop("title")
	//			}
	//		})
	//		if(msg != "请选择") {
	//			select3 = $(this).siblings(".select3")
	//			select2 = $(this).siblings(".select2")
	//			select3.each(function() {
	//				$(this).css("visibility", "hidden")
	//				if($(this).prop("title") == title) {
	//					$(this).css("visibility", "visible")
	//					//					$(this).css("z-index", 15)
	//				}
	//
	//			})
	//			select2.each(function() {
	//				$(this).css("visibility", "hidden")
	//				if($(this).prop("title") == title) {
	//					$(this).css("visibility", "visible")
	//				}
	//			})
	//		} else {
	//			select2 = $(this).siblings(".select2")
	//			select2.each(function() {
	//				$(this).css("visibility", "hidden")
	//				if($(this).prop("title") == 0) {
	//					$(this).css("visibility", "visible")
	//				}
	//
	//			})
	//			$(this).siblings(".select3").css("visibility", "hidden")
	//		}
	//	})
	$(".newbox .select2").click(function() {
		var option = $(this).siblings(".select1").find("option")
		option.each(function() {
			if($(this).prop("selected"))
				msg = $(this).prop("value")
		})
		if(msg == "请选择") {
			$(this).parent("li").siblings(".choose").css("visibility", "visible")
			$(this).parent("li").siblings(".choose").text("请选择省份")
		} else {
			$(this).parent("li").siblings(".choose").css("visibility", "hidden")
		}
	})

	$(".newbox .check").click(function() {
		if($(this).prop("checked")) {
			$(".newbox .phonenum").css("display", "block")
		} else {
			$(".newbox .phonenum").css("display", "none")

		}
	})
	$(".new").click(function() {
		$(".newbox").css("display", "block")
	})

	//添加地址

	$(".keep").click(function() {
		var arr = []
		//表单验证
		$(".newbox").Validform({
			btnSubmit: ".keep",
			tiptype: 3,
			ajaxPost: true,
			beforeSubmit: function(curform) {
				//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
				//这里明确return false的话表单将不会提交;	
				var userName = $(".newbox .name ").val()
				//地址
				var userArea = $(".bigform option:selected").text()

				//街道
				var userLoand = $(".address1").val()
				//邮编
				var eamil = $(".ema1").val()
				//手机号
				var userTel = $(".iphone").val()
				var userempty = ''
				var box = ''
				box = '<div class="box02 clearfix">' + '<div class="msg fl">' + userName + '</div>' +
					'<div class="msg fl">' + userArea + '</div>' + '<div class="msg fl">' + userLoand + '</div>' +
					'<div class="msg fl">' + eamil + '</div>' + '<div class="msg fl">' + userTel + '</div>' +
					'<div class="fl">' + '<a class="bianji" href="#">' + "编辑" + '</a>' + '</div>' +
					'<div class="fl">' + '<a class="del01" href="#">' + "删除" + '</a>' + '</div>' +
					'<div class="msg1 fl">' + '<input type="radio" name="" id="" value="" />' + '默认地址' + '</div>' + '</div>'

				$(".right .msg_border").append(box);

				return false;
			},

		});
		$(".right .newbox").css("display", "none")

	})

	//$(".box02 .del").click(function () {
	//	
	//	$("div").remove(".box02")
	//	
	//})	
	//删除
//	var btn = $(".right .msg_border")
	  $(".right .msg_border").on("click","a",function(e){
	  	if(e.target.tagName=="A"){
	  		
	  		if($(e.currentTarget).text()=="删除"){
	  			$(e.currentTarget.parentNode.parentNode).empty()
	  		}
	  		if($(e.currentTarget).text()=="编辑"){
	  			$(".right .newbox").css("display", "block")
	  		}
	  		
	  	}

            })
	//编辑
//	  $(".right .msg_border").on("click","a",function(e){
//	  	if(e.target.tagName=="A"){
//	  		
//	  		$(e.currentTarget.parentNode.parentNode).empty()
//	  	}
//
//          })
		


})

//删除评论--事件委托
//event事件对象
//				oResult.onclick = function(e) {
//					//删除
//					if(e.target.tagName == "B") {
//						this.removeChild(e.target.parentNode);
//					}
//				}