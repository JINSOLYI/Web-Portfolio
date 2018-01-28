$(document).ready(function(){

    var moves/*#drag가 움직일 px거리*/,now/*스크롤 할량*/,scroll;
    var wid = $(window).width();
    var dwid = $(document).width();

    //이벤트를 scroll이 아닌 mousewheel로 바꿔 중복이벤트로 인한 멈춤 현상을 극복
    $(window).on("mousewheel",function(){//마우스 휠시 스크롤과 #drag움직임
      scroll = $(this).scrollLeft();
      moves = scroll/(dwid-wid)*95*(wid/100);
      //도큐먼트 전체 넓이에 대한 스크롤한 거리의 비율 => 퍼센트
      //퍼센트를 픽셀로 바꿔주기 위해 화면 넓이/100한 값을 곱해준다.
      $("#bound #drag").css({"left":moves+"px"});
    });

    $("#drag").draggable({// 드래그시 스크롤
      drag: function( event, ui ) {
        now = $("#drag").offset().left - $("#bound").offset().left;
        //offest().left는 전체 도큐먼트기준으로 특정되기 때문에 화면넓이의 배운더리를 정해준다음
        //상대적거리를 구해줘야함.

        //위의 식을 토대로 scroll값을 구해주는 식을 만들고 moves를 now로 치환해준다.
        $(window).scrollLeft((now/(wid/100)/95*(dwid-wid)));
      }
    });

});
