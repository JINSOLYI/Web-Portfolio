$(function(){	
	
	//스킵네비게이션
	$("#skipNavi a").on("focusin",function(){
		$(this).css({"top":"0px"});
	});
	$("#skipNavi a").on("focusout",function(){
		$(this).css({"top":"-48px"});
	});
	
});










