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
			
			
			
		}
		
	});
	
	

	}
	
	return {
		 fn:fn,
		 
	}
	
})
