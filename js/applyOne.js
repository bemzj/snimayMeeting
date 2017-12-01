$(function(){
	$('.code').height($(window).height()-$('.title').height());
	//获取动态密码
	$('#getCode').on('click',function(){
		$(this).attr('disabled','disabled');
		var time = 60;
		$(this).html(time+'s重发');
		var timeSet = setInterval(function(){
			time--;
			if(time==-1)
			{
				clearInterval(timeSet);
				$('#getCode').html('重新发送');
				$('#getCode').removeAttr('disabled');
			}else{
				$('#getCode').html(time+'s重发');
			}
			
		},1000);
	});
	//关闭报名页
	$('.close').on('click',function(){
		$('#know').stop().animate({top:'50%',height:'0%'},500,function(){
			$(this).hide();
		});
	});
	//关闭报名页
	$('#know').on('click',function(){
		$('#know').stop().animate({top:'50%',height:'0%'},500,function(){
			$(this).hide();
		});
	});
});