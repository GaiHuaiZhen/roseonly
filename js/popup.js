define(["jquery"],function($){
	
	function fn(){
		$(".fix p:eq(0)").mouseenter(function(){
			$(".fixone").css("display","block")
			
			
				$(".fix p:eq(0)").mouseleave(function(){
				
				$(".fixone").css("display","none")
			})
			
			
			
		})
		
		
		//楼梯
		
		$(document).scroll(function(){
			if($(document).scrollTop()>$("#nav").scrollTop()){
				$(".fix p:eq(2)").css("display","block")
			}else{
				$(".fix p:eq(2)").css("display","none")
			}
			
			
		})
		
			$(".fix p:eq(2)").click(function(){
				$(document).scrollTop(0)
				
			})
			
			
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
			
			
			
	}
	
	return {
		fn:fn
	}
	
})
