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
	
	//取cookie，图片叫imgck，价格叫priceck，名字nameck
	$(function(){
		ck()
	})
	
	
	//取cookie填充页面
	function ck(){
		
		var imgck=unescape($.cookie("imgck"))
		var priceck=unescape($.cookie("priceck"))
		var nameck=unescape($.cookie("nameck"))
		$(".ask_left dl dt img:eq(0)").attr("src",imgck)
		$(".ask_right p:eq(0)").html(nameck)
			$(".ask_right p:eq(1) b").html(priceck)
		
		
	}
	
//商品点击加减
	$(".ask_right p:eq(2) delete span:eq(1) i:eq(0)").click(function(){
		//alert()
		var num=$(".ask_right p:eq(2) delete span:eq(0)").text()
		
		 ++num
		 
		 num>99?num=99:num
		 $(".ask_right p:eq(2) delete span:eq(0)").text(num)
	})
	
	$(".ask_right p:eq(2) delete span:eq(1) i:eq(1)").click(function(){
		
		var num=$(".ask_right p:eq(2) delete span:eq(0)").text()
		 --num
		 num<1?num=1:num
		 $(".ask_right p:eq(2) delete span:eq(0)").text(num)
		
	})
	
	//立即购买
	$(".ask_right p:eq(3) em:eq(0)").click(function(){
		//alert()
		if(!isNaN(parseInt($(".ask_right p:eq(2) delete span:eq(0)").text()))){
		$(document).scrollTop($(".alipay").offset().top)
		$(".alipay p:eq(0) span").html($(".ask_right p:eq(2) delete span:eq(0)").text())
		$(".alipay p:eq(1) span").html(($(".ask_right p:eq(2) delete span:eq(0)").text()*parseInt($(".ask_right p:eq(1) b").text().split("￥")[1])).toFixed(2))
		}
		
		//console.log(parseInt($(".ask_right p:eq(1) b").text().split("￥")[1]).toFixed(2))
		//console.log(typeof(parseInt($(".ask_right p:eq(2) delete span:eq(0)").text())))
		
		//console.log(typeof(parseInt($(".ask_right p:eq(2) delete span:eq(0)").text()))==Number)
	})
	
})
