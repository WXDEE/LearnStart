
		window.onload = function() {
			var oName = document.getElementById("name")
			var oIp = document.getElementById("ip")
			var oYzm = document.getElementById("yzm")
			var oIphone = document.getElementById("iphone")
			var oDress = document.getElementById("adress")
			//手机验证
			oIphone.onclick = function() {
				if(iphone.length == 0) {
					alert('请输入手机号码！');
					document.form1.iphone.focus();
					return false;
				}
				if(iphone.length != 11) {
					alert('请输入有效的手机号码！');
					document.form1.iphone.focus();
					return false;
				}

				var myreg = /^(((1[0-9][0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				if(!myreg.test()) {
					alert('请输入有效的手机号码！');
					document.form1.iphone.focus();
					return false;
				}
			}

			oDress.onclick = function() {
				if(oYzm.value = "null") {
					alert("请输入正确的信息");
				}

			}

		}
	
