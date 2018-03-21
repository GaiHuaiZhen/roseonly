define(["jquery"],function($){
	
	function fn(){
	
	$.ajax({
		type:"get",
		url:"./ajax/img.json?id="+new Date().getTime(),
		async:true,
		success:function(res){
		//整理ajax返回的数据	
			//console.log(res)
			 for (let i=0;i<$(".nav li").length;i++) {
	if(!i==0){$(".nav li").eq(i).find("a").mouseenter(function(){
			$(".nav li").eq(i).find("a").css({"background":"#fff","color":"#000"}).parent("li").siblings().not(	$(".nav li").eq(0)).find("a").css({"background":"#000","color":"#fff"})
			
			//第一个的颜色
			$(".nav li").eq(0).find("a").css({"background":"red","color":"#fff"})
			$(".menu img").remove()
			var img =$("<img>")
			img.attr("src",res.img[i])
			$(".menu").append(img)
			$(".menu").css("display","block")
			$("#nav").mouseleave(function(){
				$(".menu").css("display","none")
				$(".nav li").eq(i).find("a").css({"background":"#000","color":"#fff"})
			})
		})
	}if(i==0){
		
		$(".nav li").eq(i).find("a").mouseenter(function(){
			
			$(".nav li").eq(i).find("a").css({"background":"#fff","color":"#000"}).parent("li").siblings().find("a").css({"background":"#000","color":"#fff"})
			$(".menu img").remove()
			var img =$("<img>")
			img.attr("src",res.img[i])
			$(".menu").append(img)
			$(".menu").css("display","block")
			$("#nav").mouseleave(function(){
				$(".menu").css("display","none")
				$(".nav li").eq(i).find("a").css({"background":"red","color":"#fff"})
			})
		
		})
		
			
	}
	}
			
			
			//本来写在popupjs里的，如果发生模块冲突就放回去
			//吸顶
			
			$(document).scroll(function(){
				
				if($(document).scrollTop()>$("#nav").offset().top){
					$(".nav").css({"position":"fixed","top":0,"z-index":"99999"})
					$(".menu").css({"position":"fixed","top":"40"})
					
				}else{
					$(".nav").css("position","static")
					$(".menu").css({"position":"absolute"})
				}
				
				
				
			})
			
			
			$("#nav").click(function(){
		location.href="list.html"
	})
			
		}
		
	});
	
	

	}
	
	return {
		 fn:fn,
		 
	}
	
	

	
})
