require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"cookie":"jquery.cookie",
		"menu_top":"menu_top"
	}
})


require(["jquery","cookie","menu_top"],function($,cookie,menu_top){
	
	
	//导入cookie
	var shop=JSON.parse($.cookie("key"))
	var i=0
	var num=0
	for (attr in shop) {
		i++
		//console.log(i)
		$(".shopping table").append(`<tr>
					<td>${i}</td>
					<td>roseolny</td>
					<td><img src="${attr}"/></td>
					<td>${unescape(shop[attr].name)}</td>
					<td>${unescape(shop[attr].price)}</td>
					<td>${unescape(shop[attr].index)}</td>
					<td class="tdd">删除</td>
					
				</tr>`)
		
		
		//总价
		num+=parseInt(shop[attr].ps)
		//console.log(shop)
		
	}
	$(".js b").html(num.toFixed(2))
	//console.log(num)
	
	
	
	//console.log(shop)
	
	
	
	menu_top.fn()
	//
	
	$(".tdd").click(function(){
		var flag= confirm("确认删除")
		//alert()
		if(flag){
			$(this).parent("tr").remove()
		
		var remo=$(this).siblings("td").find("img").attr("src")
		//console.log(remo)
		delete shop[remo]
		
		//$(".shopping table").find("tr").siblings(":eq(0)").empty()
		
		var i=0
	var num=0
	for (attr in shop) {
		i++
		//console.log(i)
//		$(".shopping table").append(`<tr>
//					<td>${i}</td>
//					<td>roseolny</td>
//					<td><img src="${attr}"/></td>
//					<td>${unescape(shop[attr].name)}</td>
//					<td>${unescape(shop[attr].price)}</td>
//					<td>${unescape(shop[attr].index)}</td>
//					<td class="tdd">删除</td>
//					
//				</tr>`)
		
		
		//总价
		num+=parseInt(shop[attr].ps)
		//console.log(shop)
		
	}
		
		$(".js b").html(num.toFixed(2))
		
		
		$.cookie("key",JSON.stringify(shop))
		}
		
	})
	
	
	
	
})
