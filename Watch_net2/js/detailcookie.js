$(function() {
	var $img = $("#jqzoom").attr("src");
	var $good = $("#jqzoom").attr("alt");
	var $price = $(".f1-right .f1-line1 p em").text();
	var arr=[];
	var goods={num:1};
	Cookies.remove('good');
	console.log(Cookies.get('good'));
	
	$(".addcart").click(function() {
		alert("添加购物车成功");
		goods.imgSrc=$img;
		goods.good=$good;
		goods.price=$price;
		var i= 0;
		while(i < arr.length) {
			if(arr[i].imgSrc!=goods.imgSrc){
				i++;
			}else{
				break;
			}			
		}
		if(i == arr.length){
			arr.push(goods);
		}else{
			arr[i].num++;
		}
		Cookies.set('good', JSON.stringify(arr));
		console.log(Cookies.get());
	})
})