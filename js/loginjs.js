require.config({
	paths:{
			"jquery":"jquery-1.8.3",
			"cookie":"jquery.cookie",
			"menu_top":"menu_top"
	}
	
	
	
})

require(["jquery","cookie","menu_top"],function($,cookie,menu_top){
	
	//菜单
	menu_top.fn()
	
	//注册验证
	function codes(){
		
		var flag1=false
		var flag2=false
		var flag3=false
		var flag4=false
		
		var reg=/^[1][3,5,7,8]\d{9}$/
		var reg2=/\d{6,}/
		
		$(".code form>input:eq(0)").bind("blur",function(){
			if(!reg.test($(this).val())){
				var index=$(this).val()
//				$(this).css("position","relative")
//				var box=$("<div>")
//				box.css({"width":"10px","height":"10px","position":"absolute","right":0,"background":"red"})
//				box.appendTo($(this))
				$(this).val(index+"        "+" 手机号不正确")
				$(this).click(function(){
					$(this).val("")
				})
				
			}else{
				flag1=true
			}
			
			
		})
		
		
		//密码框
		$(".code form>input:eq(1)").bind("blur",function(){
			
			if(!reg2.test($(this).val())){
				$(this).val("").attr("placeholder","密码要大于六位")
			}else{
				flag2=true
			}
		})
		
		
		$(".code form>input:eq(2)").bind("blur",function(){
			
			if(!$(this).val()==$(".code form>input:eq(1)").val()){
				$(this).val("").attr("placeholder","密码要一致")
			}else{
				flag3=true
			}
			
			
		})
		
		
		//验证码
		
		function sum(){
			
		return	(function getarr(){
		var arr=[]
		
		function rdrm(min,max){
			return Math.round(Math.random()*(max-min))+min
		}
		
		
		
		for(var i=0;i<4;i++){
			var num=rdrm(48,122);
			if(num>=58&&num<=64||num>=91&&num<=96){
				//console.log(num)
				i--
			}
			else{arr[i]=String.fromCharCode(num)
			//console.log(num)}
			
		}
			
	}
		var str=arr.join("")
		return str
		})()
			
			
		}
		
		//alert(sum())
		
		//点击更改验证码
		
		 var index=sum()
		
		$(".code_ps>div>span").text(index)
		
		
		$(".code u").click(function(){
			 var index=sum()
			$(".code_ps>div>span").text(sum())
			//console.log(index)
		})
		
		 
		
		
		$(".code_ps>p").bind("blur",function(){
			if($(".code_ps>p").text().toUpperCase()!=$(".code_ps>div>span").text().toUpperCase()){
				$(".code_ps>p").text("错误")
				$(this).click(function(){
					
					$(this).text("")
					
				})
				
			}else{
				flag4=true
			}
		})
		
		
		//提交
		
		$(".code form>input:eq(3)").bind("click",function(){
			if(flag1&&flag2&&flag3&&flag4){
				var d=confirm("确认注册")
				
				if(d){
					$.cookie("name",$(".code form>input:eq(0)").val())
					$.cookie("pwd",$(".code form>input:eq(1)").val())
					location.href="log.html"
				}
				
				
			}else{
				alert("请把信息填写完毕")
			}
			
			
		})
		
		
	}
	
	codes()
	
	
	
})
