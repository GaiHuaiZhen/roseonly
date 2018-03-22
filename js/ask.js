require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"cookie":"jquery.cookie",
		"menu_top":"menu_top"
		
		
	},
	
	shim:{
		"flyto":{
			deps:["jquery"]
		}
	}
	
})



require(["jquery","cookie","menu_top","flyto"],function($,cookie,menu_top){
	
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
	
	//加入购物车
	$(".ask_right p:eq(3) em:eq(1)").click(function(){
		//alert()
		//图片
		var img=escape($(".ask_left dl dt img:eq(0)").attr("src"))
		//商品名
		var name=escape($(".ask_right p:eq(0)").html())
		//价格
		var price=escape($(".ask_right p:eq(1) b").html())
		//数量
		var index=$(".ask_right p:eq(2) delete span:eq(0)").text()
		//总价
		var ps=($(".ask_right p:eq(2) delete span:eq(0)").text()*parseInt($(".ask_right p:eq(1) b").text().split("￥")[1])).toFixed(2)
		
		//console.log(ps)
		
	     var shop=$.cookie("key")?JSON.parse($.cookie("key")):{}
	     
	     
	     
	     
	     
	     
//	     for (attr in shop) {
//	     	
//	     	if(attr==img){
//	     		 shop[img]={
//					     	"name":name,
//					     	"price":price,
//					     	"index":index,
//					     	"ps":ps
//						     }
//	     		 
//	     		 console.log(attr)
//	     	}else{
//	     		alert()
//	     		 shop[img]={
//					     	"name":name,
//					     	"price":price,
//					     	"index":index,
//					     	"ps":ps
//						     }
//	     		 
//	     	}
//	     }
	     
	     
	     
	     
	     
	     shop[img]={
	     	"name":name,
	     	"price":price,
	     	"index":index,
	     	"ps":ps
	     }
	     $.cookie("key",JSON.stringify(shop))
	     
	    // console.log($.cookie("key"))
	    var clo=$(".ask_left dl dt img:eq(0)").clone()
	    //插件啊啊啊啊
	    clo.fly({ 
            start: { 
                left: $(".ask_left dl dt img:eq(0)").offset().left, //开始位置（必填）#fly元素会被设置成position: fixed 
                top: $(".ask_left dl dt img:eq(0)").offset().top //开始位置（必填） 
            }, 
            end: { 
                left: $(".num").offset().left, //结束位置（必填） 
                top: $(".num").offset().top, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            }, 
            onEnd: function(){ //结束回调 
//              $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
//              addcar.css("cursor","default").removeClass('orange').unbind('click'); 
//              this.destory(); //移除dom 
location.href="shopping.html"
            } 
        });
	    
	    
	    
	     
	     
//	     for(attr in shop){
//	     	alert(attr)
//	     }
		
		//console.log(shop)
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//var shop=[name,price,index,ps]
		//console.log(JSON.stringify(shop))
		
		//$.cookie(img,JSON.stringify(shop))
		//console.log($.cookie(img))
		
//		if($.cookie(img)==undefined){
//			$.cookie(img,JSON.stringify(shop))
//		}else{
//			$.cookie(img,JSON.stringify(shop))
//		}
//		
//		shop={"img":img,"name":escape(name),"price":escape(price),"index":index,"ps":ps}
//				 if($.cookie("key")==undefined){
//				 	$.cookie("key",shop)
//				 	}
//				 if(JSON.parse($.cookie("key")).img==img){
//				 	
//				 }
				 


//var index={
//	{},{},{}
//}
		
//		
//		for (attr in JSON.parse($.cookie("key"))) {
//			
//			for (let i=0;i<JSON.parse($.cookie("key")).img.length;i++) {
//				console.log(JSON.parse($.cookie("key")).img[i])
//				console.log(img)
//				console.log(JSON.stringify(shop.img[0]))
////				if(JSON.parse($.cookie("key")).img[i]==JSON.stringify(shop.img[0])){
////					
////					JSON.parse($.cookie("key")).attr[i]=shop.attr[1]
////			
////		}
////				else{
////					JSON.parse($.cookie("key")).attr[i+1]=shop.attr
////				}
//			
//			}
//			
//			
//			
//		}
		
		
		
		
		
	//	$.cookie("key",JSON.stringify(shop))
		//console.log(unescape(JSON.parse($.cookie("key")).name))
		
		
		
		
		
		
		 
		 //console.log(shop)
		// console.log(JSON.stringify(shop))
		 //console.log($.cookie("key"))
		 
		// console.log(JSON.stringify(shop))
		 
		// console.log(shop.img)
		 
//		 if($.cookie("key")==undefined){
//		 	$.cookie("key",shop)
//		 }else{
//		 	
//		 	
//		 	$.cookie("key",	$.cookie("key")+","+shop)
//		 }
		 
		 
		 
		 //alert($.cookie("key"))
//		$.cookie("key",shop)
//		var i=$.cookie("key")
//		console.log(i)



//解析cookie

//function oj(a){
//	return JSON.parse(a)
//}
//console.log(oj($.cookie("key")))





	})
	
})
