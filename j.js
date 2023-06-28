



$(document).ready(function(){
  
  var interval;
  $(".slides").css("margin-left", "-5760px");
  var currentSlide=1;

  function startSlider(){
    
    
    
    interval=setInterval(function()
    {
      $(".slides").animate({"margin-left": '+=720px'},1000,function()
        {
          currentSlide++;
          if (currentSlide==9)
          {
            currentSlide=1;
            $(".slides").css("margin-left", "-5760px");
          }
        }
      );
    },2000)
  }
  
  

  
  function stopSlider()
  {
    clearInterval(interval);
  }

  



  $('.slide').click(function(){
    stopSlider();
    $('.popup-overlay').show();
    $('.popup-content').html('<img src="'+$(this).find('img').attr('src')+'">').show();
    return false;
  });
  $('.popup-overlay').click(function(){
    startSlider();
    $('.popup-overlay, .popup-content').hide();
  });
  
  startSlider();
  //$(document).on('click',startSlider);

});




