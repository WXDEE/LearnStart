$(document).ready(function() {

	$(".passwd").click(function() {

		if(($(".pinkbox .new_pswd").prop("value").length) > 6 && ($(".pinkbox .new_pswd").prop("value").length) <= 9) {
			$(".light").removeClass("range1").addClass("range")
			$(".normal").removeClass("range").addClass("range1")
			$(".stronger").removeClass("range").addClass("range1")
		}
		if(($(".pinkbox .new_pswd").prop("value").length) > 9 && ($(".pinkbox .new_pswd").prop("value").length) <= 12) {
			$(".light").removeClass("range").addClass("range1")
			$(".normal").removeClass("range1").addClass("range")
		 $(".stronger").removeClass("range").addClass("range1")
		}
		if(($(".pinkbox .new_pswd").prop("value").length) > 12 && ($(".pinkbox .new_pswd").prop("value").length) <= 15) {
			$(".light").addClass("range1").removeClass("range")
			$(".normal").removeClass("range").addClass("range1")
			$(".stronger").removeClass("range1").addClass("range")
		}
	})

	//表单验证

	$(".pinkbox").Validform({
		btnSubmit: ".submit_btn",
		tiptype: 3,

	});

})