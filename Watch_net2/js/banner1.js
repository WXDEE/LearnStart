//$(function() {
//	var timer = null;
//	var i = 0;
//	$(".ban1 li").eq(i).css("z-index", 1);
//	//图片往右移动
//	function setTime() {
//		if(i < 7) {
//			i++;
//		} else {
//			i = 0;
//		}
//		$(".ban1 li").css("z-index", 0);
//		$(".bot_line i").css("background-color", "#fff");
//		$(".ban1 li").eq(i).css("z-index", 1);
//		$(".bot_line i").eq(i).css("background-color", "#db192a");
//	}
//	//图片往左移动
//	function setTime1() {
//		if(i > 0) {
//			i--;
//		} else {
//			i = 7;
//		}
//		$(".ban1 li").css("z-index", 0);
//		$(".bot_line i").css("background-color", "#fff");
//		$(".ban1 li").eq(i).css("z-index", 1);
//		$(".bot_line i").eq(i).css("background-color", "#db192a");
//	}
//	//定时器
//	timer = setInterval(setTime, 3000);
//	//鼠标移入移出图片
//	$(".img li").hover(function() {
//		clearInterval(timer);
//		$(".lead").css("display", "block");
//	}, function() {
//		timer = setInterval(setTime, 3000);
//		$(".lead").css("display", "none");
//	})
//	//鼠标移入移出左右方向控制
//	$(".lead").hover(function() {
//		$(".lead").css("display", "block");
//		$(this).css("background-color", "rgba(0,0,0,.6)");
//	}, function() {
//		$(this).css("background-color", "rgba(0,0,0,.1)");
//	})
//	//鼠标点击左右方向控制
//	$(".lead").click(function() {
//		if($(this).hasClass("left")) {
//			setTime1();
//			clearInterval(timer);
//		} else {
//			setTime();
//			clearInterval(timer);
//		}
//	})
//	//根据图片数量插入小圆点
//	$(".ban1 li").each(function() {
//		$(".bot_line").append("<i class='dot'></i>");
//		$(".bot_line i").eq(0).css("background-color", "#db192a");
//	})
//	//设置小圆点外框位置
//	$(".bot_line").css("left", (790 - $(".bot_line").innerWidth()) / 2)
//	$(".bot_line").mouseover(function() {
//		$(".lead").css("display", "block");
//	})
//	//鼠标移入移出小圆点
//	$(".bot_line i").hover(function() {
//		clearInterval(timer);
//		$(".ban1 li").css("z-index", 0);
//		$(".bot_line i").css("background-color", "#fff");
//		$(this).css("background-color", "#db192a");
//		i = $(this).index();
//		$(".ban1 li").eq(i).css("z-index", 1);
//	}, function() {
//		timer = setInterval(setTime, 3000);
//	})
//})

//面向对象
$(function() {
	function Banner(elem) {
		this.elem=$(elem);
		this.con = $(elem).find("li");
		this.lead = $(elem).find(".lead");
		this.bot = $(elem).find(".bot_line");
		this.i = 0;
		this.time = null;
		this.con.eq(0).css("z-index", 1);
		this.con.eq(0).find("img").addClass("big");
		this.init();
	}

	Banner.prototype = {
		constructor: Banner,
		//定时器+向右移
		setTime: function() {
			if(this.i < this.con.length-1) {
				this.i++;
			} else {
				this.i = 0;
			}
			this.con.css("z-index", 0);
			this.con.find("img").removeClass("big");
			this.bot.children().css("background-color", "#fff");
			this.con.eq(this.i).css("z-index", 1);
			this.con.eq(this.i).find("img").addClass("big");
			this.bot.children().eq(this.i).css("background-color", "#db192a");
		},
		//向左移
		setTime1: function() {
			if(this.i > 0) {
				this.i--;
			} else {
				this.i = this.con.size()-1;
			}
			this.con.css("z-index", 0);
			this.con.find("img").removeClass("big");
			this.bot.children().css("background-color", "#fff");
			this.con.eq(this.i).css("z-index", 1);
			this.con.eq(this.i).find("img").addClass("big");
			this.bot.children().eq(this.i).css("background-color", "#db192a");
		},
		//调用定时器
		init: function() {
			var self = this;
			self.time = setInterval(function() {
				self.setTime();
			}, 3000);
			self.con.hover(function() {
				clearInterval(self.time);
				$(".lead").css("display", "block");
			}, function() {
				self.time = setInterval(function() {
					self.setTime();
				}, 3000);
				$(".lead").css("display", "none");
			})
			//鼠标移入移出左右方向控制
			self.lead.hover(function() {
				self.lead.css("display", "block");
				$(this).find(".ikon_banner").css("backgroundPositionY", "-106px");
			}, function() {
				$(this).find(".ikon_banner").css("backgroundPositionY", "-15px");
			})
			//鼠标点击左右方向控制
			self.lead.click(function() {
				if($(this).hasClass("left")) {
					self.setTime1();
					clearInterval(self.time);
				} else {
					self.setTime();
					clearInterval(self.time);
				}
			})
			//根据图片数量插入小圆点
			self.con.each(function() {
				self.bot.append("<i class='dot'></i>");
				self.bot.children().eq(0).css("background-color", "#db192a");
			})
			//设置小圆点外框位置
			self.bot.css("left", (this.elem.width() - self.bot.innerWidth()) / 2)
			self.bot.mouseover(function() {
				self.lead.css("display", "block");
			})
			//鼠标移入移出小圆点
			self.bot.children().hover(function() {
				clearInterval(self.time);
				self.con.css("z-index", 0);
				self.con.find("img").removeClass("big");
				self.bot.children().css("background-color", "#fff");
				$(this).css("background-color", "#db192a");
				$(this).find("img").addClass("big");
				self.i = $(this).index();
				self.con.eq(self.i).css("z-index", 1);
			}, function() {
				self.time = setInterval(function() {
					self.setTime();
				}, 3000);
			})
		}
	}
	new Banner(".banner");
	new Banner(".content .con_hot .con_img .banner01");
	new Banner(".content .con_flash .con_img .banner01");
	new Banner(".content .con_new .con_img .banner01");
})