require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"cookie":"jquery.cookie",
		"menu_top":"menu_top"
		
	}
	
	
})



require(["jquery","cookie","menu_top"],function($,cookie,menu_top){
	
	
	menu_top.fn()
	
	//列表
	$.ajax({
		type:"get",
		url:"ajax/list.json",
		async:true,
		success:function(res){
			
			
			//console.log(res)
			
			var str=""
			for (var i=0;i<res.img.length;i++) {
				str+=`<li><a href="javascript:;"><img src="img/list/${res.img[i]}.png"><h5>${res.name[i]}</h5><h6>${res.details[i]}</h6><p>${res.price[i]}</p></a></li>`
			}
			
			$(".list ul").html(str)
			
			$(".list ul li").click(function(){
				$.cookie("imgck",escape($(this).find("img").attr("src"))) 
				$.cookie("priceck",escape($(this).find("p").html()))
				$.cookie("nameck",escape($(this).find("h5").html()))
				//不能打开新窗口，cookie会混乱的
				//window.open("ask.html")
				location.href="ask.html"
			})
			
			
			//划过有轻微bug，因为显示在li上面，点击会影响取li内的数据，所以改用css加效果吧
//			$(".list li").mouseenter(function(){
//				$(".removediv").fadeOut(500,function(){
//						div.remove()
//						})
//				var disx=$(this).width()
//				var disy=$(this).height()
//				var left=$(this).offset().left
//				var top=$(this).offset().top
//				var div=$("<div>")
//				div.attr("class","removediv")
//				div.css({"width":disx,"height":disy,"position":"absolute","left":left,"top":top,"background":"#000","z-index":99999,"opacity":".1"})
//				div.appendTo($("html"))
//				
//				
//				div.mouseleave(function(){
//						$(this).fadeOut(500,function(){
//						div.remove()
//						})
//				})
//			})
			
		}
	})
	
	
	
	//列表划过
//	$(".list li").mouseenter(function(){
//		alert()
//		var disx=$(this).width()
//		var disy=$(this).height
//		var left=$(this).offset().left
//		var top=$(this).offset().top
//		var div=$("<div>")
//		div.css({"width":disx,"height":disy,"Position":"absolute","left":left,"top":top,"background":"#000"})
//		div.appendTo($("html"))
//		
		
//	})
	
	
	
})
