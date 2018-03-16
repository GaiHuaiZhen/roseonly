define(["jquery"],function($){
	function fn(){
		
		var i=0;
		var im=$(".banner>div img").eq(i)
		//轮播运动
		function play(){
			
			
			$(".banner p i").eq(i).css("background","red").siblings().css("background","#fff")
			
			$(".banner div").animate({"left":i*-1240},1000)
			
			i++
			
			
			i>3?i=0:i
	
		}
		
		
		var timer=setInterval(play,1500)
		
		
		
				//移入停止
		$(".banner>div").mouseenter(function(){
			
			clearInterval(timer)
		
			$(".banner>div").mouseleave(function(){
				clearInterval(timer)
			timer=setInterval(play,1500)
				
			})
	
		})
		
		//移入选项快停止
		$(".banner>p>i").mouseenter(function(){
			
			clearInterval(timer)
			
			
			
				
				
				
			$(this).css("background","red").siblings().css("background","#fff")
			
			$(".banner div").animate({"left":$(this).index()*-1240},500)
			
			
			
			
		})
		
	}
	
	return{
		fn:fn
	}
})
