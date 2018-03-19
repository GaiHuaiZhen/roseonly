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
				$("html").animate({"scrollTop":0},500)
				
			})
			
			
			
			
			
			
	}
	
	return {
		fn:fn
	}
	
})
