require.config({
	
	
	paths:{
		"jquery":"jquery-1.8.3",
		"cookie":"jquery.cookie",
		"menu_top":"menu_top"
		
		
	}
	
	
})


require(["jquery","cookie","menu_top"],function($,cookie,menutop){
	
	menutop.fn()
	
	
	//登陆操作
	
	$(document).keyup(function(){
		
		
		if($(".code form>input:eq(0)").val()!="" && $(".code form>input:eq(1)").val()!=""){
			
			$(".code form>input:eq(2)").css({"background":"red","color":"#fff"})
		}else{
			$(".code form>input:eq(2)").css({"background":"#e7e7e7","color":"#000"})
			
		}
		
	})
	
	
	$(".code form>input:eq(2)").click(function(){
		var name=$.cookie("name")
		var pwd=$.cookie("pwd")
		//console.log(pwd)
		if($(".code form>input:eq(0)").val()==name&&$(".code form>input:eq(1)").val()==pwd){
			location.href="index.html"
			
		}else{
			alert("账号或密码不正确")
		}
		
		
	})
	
	
})
