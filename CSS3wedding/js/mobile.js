$(function() {
	//logo隐藏
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if(st > 135) {
			$(".header").addClass("mini");
		}
		if(st < 135) {
			$(".header").removeClass('mini');
		}
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