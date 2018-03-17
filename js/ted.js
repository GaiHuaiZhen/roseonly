define(["jquery"],function($){
	
	function fn(){
		$(".ted_one img").mouseenter(function(){
			
			
			
			
			//console.log($(this).width())
			var disx=$(this).width()
			var disy=$(this).height()
			var div=$("<div></div>")
			
			var posl=$(this).offset().left
			var post=$(this).offset().top
			//console.log(post)
			//console.log(posl)
			
			
			div.css({"width":disx,"height":disy,"position":"absolute","background":"#fff","left":posl,"top":post,"z-index":"999","opacity":".5"})
			$("html").append(div)
			
			//console.log(div)
			
			div.mouseleave(function(){
				div.fadeOut(500,function(){
					div.remove()
				})
				
			})
			
		})
		
		//22222
				$(".ted_two img").mouseenter(function(){
			
			
			
			
			//console.log($(this).width())
			var disx=$(this).width()
			var disy=$(this).height()
			var div=$("<div></div>")
			
			var posl=$(this).offset().left
			var post=$(this).offset().top
			//console.log(post)
			//console.log(posl)
			
			
			div.css({"width":disx,"height":disy,"position":"absolute","background":"#fff","left":posl,"top":post,"z-index":"999","opacity":".5"})
			$("html").append(div)
			
			//console.log(div)
			
			div.mouseleave(function(){
				div.fadeOut(500,function(){
					div.remove()
				})
				
			})
			
		})
				
				//3333
				
						$(".ted_three img").mouseenter(function(){
			
			
			
			
			//console.log($(this).width())
			var disx=$(this).width()
			var disy=$(this).height()
			var div=$("<div></div>")
			
			var posl=$(this).offset().left
			var post=$(this).offset().top
			//console.log(post)
			//console.log(posl)
			
			
			div.css({"width":disx,"height":disy,"position":"absolute","background":"#fff","left":posl,"top":post,"z-index":"999","opacity":".5"})
			$("html").append(div)
			
			//console.log(div)
			
			div.mouseleave(function(){
				div.fadeOut(500,function(){
					div.remove()
				})
				
			})
			
		})
						
						//444
		
				$(".ted_four img").mouseenter(function(){
			
			
			
			
			//console.log($(this).width())
			var disx=$(this).width()
			var disy=$(this).height()
			var div=$("<div></div>")
			
			var posl=$(this).offset().left
			var post=$(this).offset().top
			//console.log(post)
			//console.log(posl)
			
			
			div.css({"width":disx,"height":disy,"position":"absolute","background":"#fff","left":posl,"top":post,"z-index":"999","opacity":".5"})
			$("html").append(div)
			
			//console.log(div)
			
			div.mouseleave(function(){
				div.fadeOut(500,function(){
					div.remove()
				})
				
			})
			
		})
		
		
		//footer 添加功能 footer_top
		
		$(".footer .footer_top img").mouseenter(function(){
			
			
			
			
			//console.log($(this).width())
			var disx=$(this).width()
			var disy=$(this).height()
			var div=$("<div></div>")
			
			var posl=$(this).offset().left
			var post=$(this).offset().top
			//console.log(post)
			//console.log(posl)
			
			
			div.css({"width":disx,"height":disy,"position":"absolute","background":"#fff","left":posl,"top":post,"z-index":"999","opacity":".5"})
			$("html").append(div)
			
			//console.log(div)
			
			div.mouseleave(function(){
				div.fadeOut(500,function(){
					div.remove()
				})
				
			})
			
		})
		
		
		
	}
	
	return {
		fn:fn
	}
	
})
