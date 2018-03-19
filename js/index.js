require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"menu_top":"menu_top",
		"banner":"banner",
		"best":"best",
		"ted":"ted",
		"popup":"popup",
		"cookie":"jquery.cookie"
	
	}
})

require(["jquery","menu_top","banner","best","ted","popup","cookie"],function($,menu_top,banner,best,ted,popup,cookie){
	//菜单
	menu_top.fn()
	
	//轮播
	banner.fn()
	//选项卡
	best.fn()
	//首页商品
	ted.fn()
	
	//首页弹出
	popup.fn()
	
	
	//首页登陆的信息
	$(function(){
		
		if($.cookie("name")){
			$(".header_right ul li:eq(0) a").text("欢迎用户："+$.cookie("name")+"  ").attr("href","javascript:;")
		}
//		$("header_right ul li:eq(0)").click(function(){
//			alert()
//		})
		
	})
	
	//alert($("header_right ul li:eq(0) a").text())
})
