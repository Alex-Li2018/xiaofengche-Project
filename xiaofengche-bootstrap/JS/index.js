
// 定义成一个工具类	
var xfc_tools =  {

	scrollHighLight : function () {
		// 点击对应的nav里的li标签,页面就滚动到哪里
		$('.navbar-nav > li').click(function(event) {

			//li标签里面有a标签,可以阻止到a标签的默认行为
			event.preventDefault();
			//这里找到的是target #后面的内容
			var target = $(this).find('a').prop('hash');
			//将页面动画滚动到指定位置
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
		});

		//页面滚动到哪,对应的nav里的li就高亮
		  $(window).on('scroll',function(){

		 	//获取页面滚动高度
		 	var pageScrollTop = $('html,body').scrollTop();
		 	
		 	//获取遍历a标签找到hash值
		 	$('.navbar-right > li > a').each(function(index,ele){

		 			// 页面最后一个a不是高亮的内容,所以直接跳出函数
		 			if(index == $('.navbar-right > li > a').length - 1) return;
		 			
		 			// 获取hash值
		 			var target = $(this).prop('hash');
		 			// 判断section距离页面的高度与页面滚动高度比较
					if($(target).offset().top - pageScrollTop  < 0) {
						// 给对应的li高亮操作
						$(this).parent('li').siblings().removeClass('active');
						$(this).parent('li').addClass('active');
					};
		 	});
 		});
	},

	switchoverClass : function () {
		//-----------active类的切换---------------
		$('.navbar-nav li').on('mouseenter',function () {

			// 移入到上方的时候给一个active类,并清除原来的类
			$(this).addClass('active').siblings('li').removeClass('active');

		});
	},

	carousel : function () {
		// 轮播图的参数配置
		$('.carousel').carousel({
			//轮播图的切换时间
			  interval: 2000,
			  // 设置鼠标悬停后是否暂停
			  pause : 'hover'
		});
	}
}

//------------------工具调用-----------------------------


// 切换active类
   xfc_tools.switchoverClass();
// 滚动高亮实现
	xfc_tools.scrollHighLight();
// 轮播图的切换
   xfc_tools.carousel();
