$(document).ready(function(){

//	line6选款式
	$(".f1-line6 ul li:first").css({"border":"1px solid #aa1313"});
	$(".f1-line6 ul li").click(function(){
		var index=$(this).index();
		$(this).css({"border":"1px solid #aa1313"}).siblings().css({"border":"1px solid #fff"});
		$(".f1-line6>i").css({"margin-left":74*index+"px"});
		console.log(index);
	});
	

//	line7商品数量
	$(".mipl .num>input").blur(function(){
		var num=$(".mipl .num>input").val();
		if(num>=235){
			num=235;
			$(".f1-line7 ul>.plus").css({"background":"#ecedec","color":"#666"});
			$(".f1-line7 ul>.minus").css({"background":"#aa1313","color":"#fff"});
		}else if(num<=1){
			num=1;
			$(".f1-line7 ul>.minus").css({"background":"#ecedec","color":"#666"});
			$(".f1-line7 ul>.plus").css({"background":"#aa1313","color":"#fff"});
		}else{
			$(".f1-line7 ul>.plus").css({"background":"#aa1313","color":"#fff"});
			$(".f1-line7 ul>.minus").css({"background":"#aa1313","color":"#fff"});
		}
		$(".mipl .num>input").val(num);
	});
	$(".mipl .plus").click(function(){
		var num=$(".mipl .num>input").val();
		if(num>=1){
			$(".f1-line7 ul>.minus").css({"background":"#aa1313","color":"#fff"});
		};
		if(num>=234){
			num=235;
			$(".f1-line7 ul>.plus").css({"background":"#ecedec","color":"#666"});
		}else{
		num++;
		}
		$(".mipl .num>input").val(num);
	});
	$(".mipl .minus").click(function(){
		var num=$(".mipl .num>input").val();
		if(num>=235){
			$(".f1-line7 ul>.plus").css({"background":"#aa1313","color":"#fff"});
		}
		if(num<=2){
			num=1;
			$(".f1-line7 ul>.minus").css({"background":"#ecedec","color":"#666"});
		}else{
			num--;
		}
		$(".mipl .num>input").val(num);
	});
	
//	line8二维码
	$(".f1-line8>.swap>span").hide();
	$(".f1-line8>.swap").hover(function(){
		$(this).children("span").slideDown();
		$(this).children("i").addClass("rotate");
	},function(){
		$(this).children("span").fadeOut();
		$(this).children("i").removeClass("rotate");
	});
//	.floor2换一批
	$(".floor2 ul>li:last").hover(function(){
		console.log("ok");
		$(this).css({"color":"#ce0000","font-weight":"bold"});
		$(this).children("span").addClass("rotateB");
	},function () {
		$(this).css({"color":""});
		$(this).children("span").removeClass("rotateB");
	})
	$(".floor2 ul>li:last").click(function(){
		console.log("你好");
		$(".floor2 ul li.watch").each(function(){
			if(Math.round(Math.random())==0){
				$(".floor2 ul").prepend($(this));
			}
		});
	});

	
	
//	侧边跳转导航 出现/消失
//	+ 点击滚屏
	$(window).scroll(function(){
		var delta=$(window).scrollTop();
		var hMin=$(".floor3-1>p").offset().top;
		var hMax=$(".floor3-1>#lastimg").offset().top+200;
		var h0=hMin;

//		var h1=$("a#1").offset().top;
//		var h2=$("a#2").offset().top;
//		var h3=$("a#3").offset().top;
//		var h4=$("a#4").offset().top;
//		var h5=$("a#5").offset().top;
//		var h6=$("a#6").offset().top;
		if(delta<hMin||delta>hMax){
			$(".block3 .fixed").fadeOut();
		}else{
			$(".block3 .fixed").fadeIn();
		};
		$(".floor3-1>a.anchor").each(function(i){
			if(delta>$(this).offset().top-200){
				$(".fixed dd").eq(i).css({"background":"#aa1313"});
				$(".fixed dd").eq(i).siblings().css({"background":""});
			};
		});
		
		//点击滚动一张图片的高度
		$(".floor3-1 img").click(function(){
			console.log(314);
			var deltaA=$(window).scrollTop();
			var imgHeight=$(this).height();
			var h=deltaA+imgHeight;
			$("body").stop().animate({scrollTop:h},200,"linear");
		});
		//	点击自动滚动
//		$(window).scroll(function(){
//			var deta2=$(window).scrollTop();
//			var h6=deta+800;
//				$("body").animate({scrollTop:h6},200,"linear");
//		});
	});

	
//	block3,floor3下的标签
//	$(".floor3-1").css("display","none");
	$(".floor3-2").css("display","none");
	$(".floor3-3").css("display","none");
	$(".floor3-4").css("display","none");
	$(".fx-head ul>li").eq(0).addClass("f3Tab");
	$(".fx-head ul>li").click(function(){
		var index=$(this).index();
		console.dir(index);
		$(this).addClass("f3Tab").siblings().removeClass("f3Tab");
		
		$(".floor3").eq(index).show().siblings(".floor3").hide();
	});


	
	
//	.f34-cont的标签切换
	$(".f34-cont ul li").click(function(){
		$(this).css({"color":"#aa1313","border-bottom":"2px solid #aa1313"});
		$(this).siblings().css({"color":"","border-bottom":""});
	})
	$(".f34-cont .words>span>img").click(function(){
		alert("shuai");
	})
//	查看更多评论.f34-cont
	$(".f34-cont>button").click(function(){
		$(".f34-cont>ol>li").css({"display":"block"})
	});
	
	$(".f34-cont>button").click(function(){
		$(".f34-cont>ol>li").each(function(i){
			var rand=Math.random()*10;
			rand=Math.floor(rand);
			$(this).clone();
			
			console.log(rand);
			$(".f34-cont>ol").append($(".f34-cont>ol>li").eq(rand));
		});
		$(".f34-cont>ol").append($(".f34-cont>ol>li").each(function(i){}));
	});
	
	//其他效果--改变链接
	//锁死
	$(".f2-main>ul>li").hover(function(){
		$(this).children("a").attr("href","javascript:void(");
	});
	$(".aside3>ul>li").hover(function(){
		$(this).children("a").attr("href","javascript:void(");
	});
	
	//添加
	$(".f2-main>ul>li>a").click(function(){
		window.location.href="detail-2.html";
	});
	$(".aside3>ul>li").click(function(){
		window.location.href="detail-2.html";
	});
});
	


	
	
