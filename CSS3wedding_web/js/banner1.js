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
			this.bot.children().css("background-color", "#fff");
			this.con.eq(this.i).css("z-index", 1);
			this.bot.children().eq(this.i).css("background-color", "#b59f66");
		},
		//向左移
		setTime1: function() {
			if(this.i > 0) {
				this.i--;
			} else {
				this.i = this.con.size()-1;
			}
			this.con.css("z-index", 0);
			this.bot.children().css("background-color", "#fff");
			this.con.eq(this.i).css("z-index", 1);
			this.bot.children().eq(this.i).css("background-color", "#b59f66");
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
				self.bot.children().eq(0).css("background-color", "#b59f66");
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
				self.bot.children().css("background-color", "#fff");
				$(this).css("background-color", "#b59f66");
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
})