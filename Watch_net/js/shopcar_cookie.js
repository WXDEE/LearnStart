$(function() {
	console.log(Cookies.get());
	var onegood = Cookies.get("good");
	onegood=JSON.parse(onegood);
//	console.log(onegood);
//	console.log(onegood[0]);
	
	var $imgSrc = $(".content table tbody .goods img");
	if(Cookies.get("good")) {
		for(var i = 0; i < onegood.length; i++) {	
			var goods = $('<tr>' +
				'<td class="checkbox">' +
				'<input name="check_one" type="checkbox">' +
				'</td>' +
				'<td class="goods clearfix">' +
				'<a href="#">' +
				'<img src="img_shopCar/img1.jpg" alt="浪琴longines-嘉岚系列 L4.209.4.72.6 女士石英表">' +
				'<span>浪琴longines-嘉岚系列 L4.209.4.72.6 女士石英表</span>' +
				'</a>' +
				'</td>' +
				'<td class="price">￥6640.00</td>' +
				'<td class="count clearfix">' +
				'<span class="reduce fl">-</span>' +
				'<input class="count_num fl" type="text" value="1">' +
				'<span class="add fl">+</span>' +
				'</td>' +
				'<td class="total">￥6640.00</td>' +
				'<td class="delete">' +
				'<img src="img_shopCar/del.png" />' +
				'</td>' +
				'</tr>');
			console.log(goods);
			goods.find(".goods img").attr({
				src: onegood[i].imgSrc,
				alt: onegood[i].good,
			});
			var price = onegood[i].price;
			price = price.replace(",", "")+'.00';
			console.log(price);
			goods.find(".goods span").text(onegood[i].good);
			goods.find(".price").text(price);
			
			goods.find(".count,.count_num").val(onegood[i].num);
			var num=goods.find(".count,.count_num").val();
			num*=parseFloat(price.slice(1));
			goods.find(".total").text(num.toFixed(2));
			$(".content table tbody").prepend(goods);
			$(".content .delete img").click(function () {
			Cookies.remove('good');
		})
		}	
		
	}
	
})