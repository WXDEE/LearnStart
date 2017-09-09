$(function () {
	
	//头部、底部、悬浮栏代码
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
	
/////////////////////////////////////////////////////////////////////////////////////
	
	//购物车商品代码
	var $checkAll = $(".content .shop_car .check_all");
	var $check = $("input[name='check_one']");
	var $priceAdd = $(".content .shop_car .count .add");
	var $priceReduce = $(".content .shop_car .count .reduce");
	var $delete = $(".content .shop_car .delete img");
	var $all = $(".content .shop_car #all");
	var numCount;
	var onePrice;

	//全选按钮是否选中
	$checkAll.click(function() {
		if($checkAll.prop("checked")) {
			$check.prop("checked", true);
		} else {
			$check.prop("checked", false);
		}
		allPrice();
		colorChange()
	})
	//选中商品变色
	function colorChange() {
		$check.each(function () {
			if($(this).prop("checked")){
				$(this).parents("tr").css("background-color","#f3efe7");
			}else{
				$(this).parents("tr").css("background-color","#fff");
			}
		})
	}
	//商品被选中
	$check.click(function() {
		isCheckAll();
		allPrice();
		colorChange();
	})
	//判断商品是否全选
	function isCheckAll() {
		var num = 0;
		$check = $("input[name='check_one']");
		$check.each(function(i) {
			if($(this).prop("checked"))
				num++;
		})
		if(num == $check.length) {
			$checkAll.prop("checked", true);
		} else {
			$checkAll.prop("checked", false);
		}
	}
	//数量增加
	$priceAdd.click(function() {
		numCount=parseFloat($(this).siblings(".count_num").val());
		onePrice=parseFloat($(this).parent().siblings(".price").text().slice(1));
		numCount++;
		onePrice*=numCount;
		$(this).siblings(".count_num").val(numCount);
		$(this).parent().siblings(".total").text("￥"+onePrice.toFixed(2));
		allPrice();
	})
	//数量减少
	$priceReduce.click(function() {
		numCount=parseInt($(this).siblings(".count_num").val());
		onePrice=parseFloat($(this).parent().siblings(".price").text().slice(1));
		if(numCount>1){
			numCount--;
		}else{
			numCount=1;
		}		
		$(this).siblings(".count_num").val(numCount);
		$(this).parent().siblings(".total").text("￥"+onePrice.toFixed(2));
		allPrice();
	})
	//删除
	$delete.click(function() {
		$(this).parents('tr').remove();
		isCheckAll();
		allPrice();
	})
	//总价
	function allPrice() {
		$check = $("input[name='check_one']");
		var sum = 0
		$check.each(function(i) {
			if($(this).prop("checked")) {
				var num = parseFloat($(this).parent().siblings(".total").text().slice(1));
				sum += num;
			}
		})
		$all.text('¥' + sum.toFixed(2));
	}
})
