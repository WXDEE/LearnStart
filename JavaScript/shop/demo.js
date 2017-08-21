window.onload = function() {
	var oChkAll = document.getElementById("checkAll");
	var oChk = document.getElementsByName("check");
	var oTbd = document.getElementsByTagName("tbody")[0];
	var oBtn = document.getElementById("btn");
	var oPri = document.getElementsByClassName("price");

	//价格排序
	oBtn.onclick = function() {
		for(var i = 0; i < oPri.length; i++) {
			for(j = i + 1; j < oPri.length; j++) {
				if(parseFloat(oPri[i].innerText.slice(1, oPri[i].innerText.length)) > parseFloat(oPri[j].innerText.slice(1, oPri[j].innerText.length))) {
					var temp = oPri[i].parentNode.innerHTML;
					oPri[i].parentNode.innerHTML = oPri[j].parentNode.innerHTML;
					oPri[j].parentNode.innerHTML = temp;
				}
			}
		}
	}

	//判断全选按钮是否选中
	for(var i = 0; i < oChk.length; i++) {
		oChk[i].onclick = function() {
			if(isChkAll())
				oChkAll.checked = true;
			else
				oChkAll.checked = false;
		}
	}

	//全选按钮
	oChkAll.onclick = function() {
		for(var i = 0; i < oChk.length; i++) {
			oChk[i].checked = this.checked;
		}
	}

	//判断是否全选
	function isChkAll() {
		var num = 0;
		for(var i = 0; i < oChk.length; i++) {
			if(oChk[i].checked == true)
				num++;
		}
		if(num == oChk.length)
			return true;
		else
			return false;
	}

	//删除	
	oTbd.onclick = function(event) {
		console.log(event.target.className);
		if(event.target.className == "button") {
			oTbd.removeChild(event.target.parentNode.parentNode);
		}
		if(isChkAll())
			oChkAll.checked = true;
		else
			oChkAll.checked = false;
	}

	//判断价格

}