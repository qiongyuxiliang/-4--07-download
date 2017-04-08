$(document).ready(function(){
	$('.act .girl2').eq(0).css('opacity',1);

		$('.act .girl2').on('click',function(){
			// 取得点击的index
			var index=$(this).index();
			$('.act .girl2').eq(index).css('opacity',1).siblings().css('opacity',0);
		})

	// 控制图层上下的阴影高度一样，适应机型
	function changeSize(){
		var h=$('.nav_beauty').height();
	$('.mask').height(h);
	$('.mask .girl').height(h);
	$('.bot').css({
		'top':30+h
	})
	}
changeSize();
// 通过监听宽度的变化及时适应不同机型，不用刷新
// 反思，通过该种方法便可以使用以前的Rem，便不用刷新浏览器，可以适应平板和手机电脑的网页
// 畅通无阻啊
$(window).resize(function() { 

  changeSize();
  // $('.div').html($(window).width());
//  alert($(window).width()); //浏览器时下窗口可视区域宽度 
//  alert($(window).height()); //浏览器时下窗口可视区域高度 
//  alert($(document).height()); //浏览器时下窗口文档的高度 
//  alert($(document.body).height());//浏览器时下窗口文档body的高度 
//  alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin 
//  
//  alert($(document).width());//浏览器时下窗口文档对于象宽度 
//  alert($(document.body).width());//浏览器时下窗口文档body的高度 
//  alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin 
 })
})


