require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"menu_top":"menu_top",
		"banner":"banner",
		"best":"best",
		"ted":"ted",
		"popup":"popup"
	}
})

require(["jquery","menu_top","banner","best","ted","popup"],function($,menu_top,banner,best,ted,popup){
	//菜单
	menu_top.fn()
	
	//轮播
	banner.fn()
	//选项卡
	best.fn()
	//首页商品
	ted.fn()
	
	//首页弹出
	popup.fn()
	
	
})
