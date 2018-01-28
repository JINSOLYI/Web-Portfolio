(function(){	


	$.fn.myTab = function(options){
		
		//옵션 설정			
		var $this = $(this);	
		var name = "#"+$this.attr("id");
		var $btns = $(name).children("ul").find("a");
		var $divs = $(name).children("div");
		var defaults = { duration: 500, duration_hide:300, isOn :"on", effect:"none", callback :null };		
		var ext = $.extend( {}, defaults, options); 				
		
		
		//탭 초기화
		$this.children("ul").children("li").first().children("a").addClass(ext.isOn);
		$this.children("div").hide().first().show();
		$("body").append('<div class="mk"></div>');
		var $mk = $(".mk");
		$mk.css({"position":"fixed", "width":"100%","height":"100%","z-index":"99999","display":"none"});	
		
		
		//탭 이벤트 실행
		$btns.on("click, focusin",function(){
			evtBlock();
			
			
			var tg = $(this).attr("href");
			var result = $(this).hasClass(ext.isOn);
			
			if(result){
				return false;
			}else{				
				$btns.removeClass(ext.isOn);
				$(this).addClass(ext.isOn);		
				
				if( ext.effect == "fade"){
					$divs.stop().fadeOut(ext.duration_hide);
					$(tg).stop().fadeIn(ext.duration, ext.callback);	
				}else{
					$divs.hide(0);
					$(tg).show(0, ext.callback);	
				}				
			}
						
		});			
		
		//이벤트 중복방지 함수 정의
		function evtBlock(){		
			
			$mk.show();
			setTimeout(function(){
				$mk.hide();
			},ext.duration);
		}
		
		
	};		
		
})(jQuery);
	
	
	











