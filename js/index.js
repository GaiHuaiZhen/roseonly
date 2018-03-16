require.config({
	paths:{
		"jquery":"jquery-1.8.3",
		"menu_top":"menu_top",
		"banner":"banner",
		"best":"best",
		"ted":"ted"
	}
})

require(["jquery","menu_top","banner","best","ted"],function($,menu_top,banner,best,ted){
	//菜单
	menu_top.fn()
	
	//轮播
	banner.fn()
	//选项卡
	best.fn()
	
	ted.fn()
	
})
