(function(){	

	$.fn.myGnb = function(options){
		
		//옵션 설정			
		var $this = $(this);	
		var name = "#"+$this.attr("id");
		var defaults = { 
			type :"single", 
			duration: 500, 
			duration_up : 300,
			isOn :"on", 
			effect:"slide", 
			parentName:"#header", 
			subMenu_bgColor:"#fff", 
			callback :null 
		};		
		var ext = $.extend( {}, defaults, options); 
		
		
		if(ext.type=="multi"){
			//서브메뉴갯수에 따른 서브메뉴배경 세로위치와 높이값을 계산
			var sub_height = [];
			var max_height=0;
			var posSub = $(name).offset().top + $(name+">li>a").outerHeight();			
			
			//gnb li의 반복을 돌면서 자식의 ul높이 값들중 가장 높은값으로 서브메뉴배경 높이로 설정
			$(name+">li").each(function(index){
				var ul_height = $(this).find("ul").height();		
				sub_height.push(ul_height);		
				max_height = Math.max(max_height,  sub_height[index]);	
				$(name+" ul").css({"height":max_height});
			});			
			
			//서브메뉴 배경 dom요소 생성및 css 적용
			$(ext.parentName).css({"z-index":"100"});
			$("<div id='gnbBg'></div>").insertAfter(ext.parentName);
			$("#gnbBg").css({
				"width":"100%", 
				"height":max_height, 
				"position":"absolute", 
				"left":"0px", 
				"top":posSub, 
				"z-index":"99", 
				"background":ext.subMenu_bgColor, 
				"display":"none"
			});
			$(name+" ul").css({"height":max_height});			
			
			//gnb에 마우스 호버 이벤트 적용
			$(name+">li").on("mouseenter",function(){
				if(ext.effect == "slide"){
					$(name+" ul:not(:animated)").slideDown(ext.duration, ext.callback);
					$("#gnbBg:not(:animated)").slideDown(ext.duration);
				}else if(ext.effect =="fade"){
					$(name+" ul:not(:animated)").fadeIn(ext.duration, ext.callback);
					$("#gnbBg:not(:animated)").fadeIn(ext.duration);
				}else{
					$(name+" ul:not(:animated)").show(0, ext.callback);
					$("#gnbBg:not(:animated)").show(0);
				}
				
				$(this).children("a").addClass(ext.isOn);
				$(this).children("ul").addClass(ext.isOn);
			});		
			$(name+">li").on("mouseleave",function(){
				$(this).children("a").removeClass(ext.isOn);
				$(this).children("ul").removeClass(ext.isOn);
			});	
			$(name).on("mouseleave",function(){
				if(ext.effect == "slide"){
					$(name+" ul").slideUp(ext.duration_up);
					$("#gnbBg").slideUp(ext.duration_up);	
				}else if(ext.effect =="fade"){
					$(name+" ul").fadeOut(ext.duration_up);
					$("#gnbBg").fadeOut(ext.duration_up);	
				}else{
					$(name+" ul").hide();
					$("#gnbBg").hide();	
				}
				
			});					
			
			//gnb 포커스 이벤트 적용
			$(name+">li>a").on("focusin",function(){
				$(name+" ul:not(:animated)").slideDown(ext.duration, ext.callback);
				$("#gnbBg:not(:animated)").slideDown(ext.duration);
			});
			$(name+" a:last").on("focusout",function(){
				$(name+" ul").slideUp(ext.duration_up);
				$("#gnbBg").slideUp(ext.duration_up);	
			});
		}else{
			$(name+">li").each(function(index){
				$(this).find("li").last().children("a").addClass("la");		
			});
			
			$(name+" li").on("mouseenter",function(){
				if(ext.effect == "slide"){
					$(this).children("ul:not(:animated)").slideDown(ext.duration, ext.callback);
				}else if(ext.effect =="fade"){
					$(this).children("ul:not(:animated)").fadeIn(ext.duration, ext.callback);	
				}else{
					$(this).children("ul:not(:animated)").show(0, ext.callback);
				}
				
				$(this).children("a").addClass(ext.isOn);
			});	
			$(name+" li").on("mouseleave",function(){
				if(ext.effect == "slide"){
					$(this).children("ul").slideUp(ext.duration_up);
				}else if(ext.effect =="fade"){
					$(this).children("ul").fadeOut(ext.duration_up);	
				}else{
					$(this).children("ul").hide();
				}
				
				$(this).children("a").removeClass(ext.isOn);
			});
			
			
			$(name+">li>a").on("focusin",function(){
				$(this).siblings("ul:not(:animated)").slideDown(ext.duration);
				$(this).addClass(ext.isOn);
			});
			$(name+" li").find("a.la").on("focusout",function(){
				$(this).parent("li").parent("ul").slideUp(ext.duration_up);
				$(this).parent("li").parent("ul").siblings("a").removeClass(ext.isOn);
			});
		}
	
		
		
		
		
		
		
		
	
	}

	
})(jQuery);










