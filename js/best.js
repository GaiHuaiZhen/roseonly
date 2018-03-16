define(["jquery"],function($){
	
	function fn(){
		$.ajax({
			type:"get",
			url:"ajax/best.json?id="+new Date().getTime(),
			async:true,
			success:function(res){
				//console.log(res)
				var timer=setInterval(play,1500)
				
				$(".best_menu i").mouseenter(function(){
					//alert($(this).index())
					clearInterval(timer)
					$(".best_box>ul li").empty()
					$(this).attr("class","best_hover").siblings("i").attr("class","best_hovertow")
					
					for (var i=0;i<$(".best_box ul li").length;i++) {
						//console.log($(".best_box ul li").length)
						
						var imgs=$("<img>")
						
						var h3=$("<h3>")
						
						var p=$("<p>")
						h3.text(res.name[$(this).index()*8+i])
						p.text(res.price[$(this).index()*8+i])
						
						imgs.attr("src",res.img[$(this).index()*8+i])
						imgs.appendTo($(".best_box>ul li").eq(i))
						h3.appendTo($(".best_box>ul li").eq(i))
						p.appendTo($(".best_box>ul li").eq(i))
						//console.log($(this).index()*8+i)
					}
					
					
					$(".best_box").mouseleave(function(){
						
						clearInterval(timer)
						 timer=setInterval(play,1500)
					})
					
				})
				
				
				//自行运动
				//var timer=setInterval(play,1000)
				
				var index=0
				function play(){
					$(".best_box>ul li").empty()
					$(".best_menu i").eq(index).attr("class","best_hover").siblings("i").attr("class","best_hovertow")
					index++
					index>3?index=0:index
					
					
					for (var i=0;i<$(".best_box ul li").length;i++) {
						//console.log($(".best_box ul li").length)
						
						var imgs=$("<img>")
						
						var h3=$("<h3>")
						
						var p=$("<p>")
						h3.text(res.name[index*8+i])
						p.text(res.price[index*8+i])
						
						imgs.attr("src",res.img[index*8+i])
						imgs.appendTo($(".best_box>ul li").eq(i))
						h3.appendTo($(".best_box>ul li").eq(i))
						p.appendTo($(".best_box>ul li").eq(i))
						
					}
					
				}
				
				
				
			}
		});
		
	}
	
	
	return {
		fn:fn
		
	}
})
