(function(){	

	$.fn.mySlider = function(options){
		var defaults = { 
			type:"slide", 
			duration: 500, 
			ease:"swing", 
			isOn :"on", 
			panel:"#panel", 
			prev: "#prev", 
			next:"#next", 
			navi:"#navi", 
			start:"#start",
			stop:"#stop",
			rolling_gap : 4000,
			auto : true,
			callback :null 
		};		
		var ext = $.extend( {}, defaults, options); 				
	
		var $panel = $(ext.panel);
		var $panel_li = $panel.children("li");
		var $prev = $(ext.prev);
		var $next = $(ext.next);
		var $navi = $(ext.navi);
		var $navi_li = $navi.children("li");	
		var $navi_li_a = $navi_li.children("a");
		var $start = $(ext.start);
		var $stop = $(ext.stop);
		var ease = ext.ease;
		var type = ext.type;
		var callback = ext.callback;
		var isOn = ext.isOn
		var duration = ext.duration;
		var rollingGap = ext.rolling_gap;
		var auto = ext.auto;
		var $window = $(window);
		var i = 0;	
		var timer;
		var num = $panel_li.length;		
		var panel_name = ext.panel;
		var panel_id = $(this).find($panel).attr("id");
		var wrap_txt = $(this).attr("id");
		var wrap_name = "#"+wrap_txt;	
		var panel_ul_width;
		var panel_width;			
				
		//panel, panel_li 넓비값 설정
		panel_width = $(wrap_name).width();
		panel_ul_width = $(wrap_name).width()*2;		
		$panel.width(panel_ul_width);
		$panel_li.width(panel_width);
					
		
		//브라우저 리사이즈시 panel, panel_li 넓이값 갱신
		$window.on("resize",function(){
			panel_width = $(wrap_name).width();
			panel_ul_width = $(wrap_name).width()*2;		
			$panel.width(panel_ul_width);
			$panel_li.width(panel_width);
		});			
		
		
		//각각의 패널 li와 navi li에 아이디값 부여
		$panel_li.each(function(index){
			$(this).attr({ "id" : panel_id+(index+1) , "title" : index+1 });
		});
		$navi_li.each(function(index){
			$(this).children("a").attr( "href", "#"+panel_id+(index+1) );
		});	
		
		
		//첫번째 패널, 버튼 활성화
		$panel_li.hide();
		$panel_li.first().show();
		$panel_li.first().addClass(isOn);
		$navi_li.children("a").removeClass(isOn);
		$navi_li.first().children("a").addClass(isOn);		
		
		
		//입력받은 옵션값이 true이면 자동롤링 시작
		if(auto){
			timer = setInterval(function(){
				$next.click();
			},rollingGap);
			$start.hide();
			$stop.show();
		}else{
			$start.show();
			$stop.hide();
		}
		
		//마스크 생성
		$("body").append('<div class="mk"></div>');
		var $mk = $(".mk");
		$mk.css({
			"position":"fixed", "top":"0px", "left":"0px",
			"width":"100%","height":"100%",
			"z-index":"99999","display":"none"
		});	
		
		
		/* ----------------------모션 타입별 함수 시작----------------------------*/
		/* --------------모션타입이 slide 일때---------------------------*/
		if(type == "slide"){	
			
			//첫번째 패널 활성화
			$(panel_name+"1").addClass(isOn);
			$(panel_name+"1").show();
			$panel_li.css({"position":"relative", "top":"0px", "left":"0px"});
			
			//다음 버튼 클릭시
			$next.on("click",function(e){
				e.preventDefault();					
				evtBlock();
				$panel_li.css({"float":"left"});
				$panel.css({"margin-left":0});		
				i = parseInt( $(panel_name+" li:first").attr("title") ) +1;					
				if(i==num+1){ i=1;}	
				
				$navi_li_a.removeClass(isOn);
				$navi_li.eq(i-1).children("a").addClass(isOn);				
				
				$(panel_name+ i).show();
				$panel.stop().animate({"margin-left": -panel_width},duration, ease, function(){
					$(panel_name+" li:first").appendTo(panel_name);
					$(panel_name+" li:last").hide(callback);
					$(panel_name+i).prependTo(panel_name);
					$panel.css({"margin-left":0});						
					$panel_li.removeClass(isOn);
					setTimeout(function(){
						$(panel_name+i).addClass(isOn);
					},100);					
					//$(wrap_name).removeClass();
					//$(wrap_name).addClass(wrap_txt+i);
				});				
			});		
				
			//이전 버튼 클릭시
			$(prev).on("click",function(e){
				e.preventDefault();					
				evtBlock();			
				$panel_li.css({"float":"right"});
				$panel.css({"margin-left":-panel_width});				
				i= parseInt($(panel_name+" li:first").attr("title")) - 1;	
				if(i==0){ i=num;}
				
				$navi_li_a.removeClass(isOn);
				$navi_li.eq(i-1).children("a").addClass(isOn);						
				
				$(panel_name+i).show();
				$(panel_name+i).appendTo(panel_name);	
				$panel.stop().animate({"margin-left":0},duration, ease, function(){
					$(panel_name+" li:first").appendTo(panel_name);
					$(panel_name+" li:last").hide(callback);
					$(panel_name+i).prependTo(panel_name);
					$panel.css({"margin-left":-panel_width});		
					$panel_li.removeClass(isOn);
					setTimeout(function(){
						$(panel_name+i).addClass(isOn);
					},100);
				});				
			});
			
			
			$navi_li.on("click",function(e){
				e.preventDefault();		

				evtBlock();					
				$panel_li.css({"float":"left"});
				$panel.css({"margin-left":0});						
				
				var tg = $(this).children("a").attr("href");
				i = parseInt($(tg).attr("title"));					
				
				$navi_li_a.removeClass(isOn);
				$(this).children("a").addClass(isOn);						
				
				var index = $(this).index();
				var first_item = parseInt($(panel_name+" li").attr("title")) -1; 				
			
				if(index==first_item){				
					return false;			
				}else{		
					$(panel_name+i).show();
					$(panel_name+i).appendTo(panel_name);	
					$panel.stop().animate({"margin-left": -panel_width},duration, ease, function(){
						$(panel_name+" li:first").appendTo(panel_name);
						$(panel_name+" li:last").hide(callback);
						$(panel_name+i).prependTo(panel_name);
						$panel.css({"margin-left":0});
						$panel_li.removeClass(isOn);
						setTimeout(function(){
							$(panel_name+i).addClass(isOn);		
						},100);										
					});			
				}			

			});
		
		/* --------------모션타입이 fade 일때---------------------------*/
		}else if( type == "fade"){			
		
			$panel_li.css({"position":"absolute", "display":"none"});
			$panel_li.first().show();			
			
			$prev.on("click",function(e){
				e.preventDefault();			
				
				 if(i==0){
					 i= num-1;
				 }else{
					 i-=1;
				 }	
				 showSlide(i);			 
			});
			
			
			$next.on("click",function(e){
				e.preventDefault();			
				
				 if(i==num-1){
					 i= 0;
				 }else{
					 i+=1;
				 }		
				 showSlide(i);			 
			});
			
		
			$navi_li.on("click",function(){
				var clicked = $(this).children("a").hasClass(isOn);
				if( clicked ){
					return false;
				}else{
					i = $(this).index();		
					showSlide(i);
				}
				
			});				
		
			function showSlide(index){
				$navi_li_a.removeClass(isOn);
				$navi_li.eq(index).children("a").addClass(isOn);
				
				$panel_li.removeClass(isOn).fadeOut(duration);	
				$panel_li.eq(index).fadeIn(duration, callback);
				setTimeout(function(){
					$panel_li.eq(index).addClass(isOn);
				},100);						
			}
		
		/* --------------모션타입이 none 일때---------------------------*/
		}else{
	
			$panel_li.css({"position":"absolute", "display":"none"});
			$panel_li.first().show();
			
			
			$prev.on("click",function(e){
				e.preventDefault();			
				
				 if(i==0){
					 i= num-1;
				 }else{
					 i-=1;
				 }	
				 showSlide(i);			 
			});
			
		
			$next.on("click",function(e){
				e.preventDefault();			
				
				 if(i==num-1){
					 i= 0;
				 }else{
					 i+=1;
				 }		
				 showSlide(i);			 
			});
			
			
			$navi_li.on("click",function(){
				var clicked = $(this).children("a").hasClass(isOn);
				if( clicked ){
					return false;
				}else{
					i = $(this).index();		
					showSlide(i);
				}
				
			});	
			
		
			function showSlide(index){
				$navi_li_a.removeClass(isOn);
				$navi_li.eq(index).children("a").addClass(isOn);
				
				$panel_li.hide(callback);	
				$panel_li.removeClass(isOn);
				setTimeout(function(){
					$panel_li.eq(index).show();	
					$panel_li.eq(index).addClass(isOn);	
				},100);
					
			}
		}
		/* ----------------------모션 타입별 함수 종료------------------------------*/
		
		
		
		function evtBlock(){				
			$mk.show();
			setTimeout(function(){
				$mk.hide();
			},ext.duration);
		}			
		
		
		$start.on("click",function(e){
			e.preventDefault();
			clearInterval(timer);
			
			timer = setInterval(function(){
				$next.click();
			},rollingGap);	
			
			$(this).hide();
			$stop.show();		
		});
		
		
		$stop.on("click",function(e){
			e.preventDefault();			
			clearInterval(timer);	
			$(this).hide();
			$start.show();
		});			
		
		
	}; //플러그인 패키지 종료

	
	

	
	
	
})(jQuery);















