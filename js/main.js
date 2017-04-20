$(document).ready(function(){


  // $("#watch-demo-cta").mouseenter(function(){
  //     $("#preview-container").fadeIn("fast", function() {
  //     	$("#preview-container").show();
  //     });
  // });
  // $("#watch-demo-cta, #preview-container").mouseleave(function(){
  //     $("#preview-container").fadeOut("fast", function() {
  //     	$("#preview-container").hide();
  //     });
  // });

$("#preview-container").delay(2000).fadeIn();

function loop() {
    $('#preview-container').animate({'top': '467'}, {
        duration: 800, 
        complete: function() {
            $('#preview-container').animate({top: 457}, {
                duration: 800, 
                complete: loop});
        }});
    
}
loop();


});