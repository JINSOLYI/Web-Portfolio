$(document).ready(function(){

  $('#button1,.event_banner').addClass("active");

  $("#button2").on("click",function(e){
      e.preventDefault();
      $("#button1,.event_banner").removeClass("active");
      $("#button2,.board").addClass("active");
  });
  $("#button1").on("click",function(e){
      e.preventDefault();
      $("#button2,.board").removeClass("active");
      $("#button1,.event_banner").addClass("active");
  });


});
