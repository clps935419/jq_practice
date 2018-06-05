
$(document).ready(function() {
	$(window).load(function(){
        $('#slider').nivoSlider();
	});
	//$('.topmenu>ul>li>a').click(function(event){
//	event.preventDefault();//ㄑ使A連結失效
//		$(this).parent().siblings().find('ul').slideUp();
//		//A連結以外的UL都合起來
//		
//		$(this).parent().find('ul').slideToggle();
		
		//自己階層的UL做收合
//	});
	$('.top a').click(function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop:0
		} ,1700);
	});
	//上面是廣告往上按鈕
	
	$('td').click(function(event){
		$(this).toggleClass('select');
	});
	
});