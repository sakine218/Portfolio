$(function () {
  $(".parallax").paroller({
    factor: 0.5,
    factorXs: 0.5,
    type: 'background',
    direction: 'vertical'
  });

  var target1 = $("#parallax-01");
  var target1Gray = $("#parallax-01-gray");
  var target2 = $("#parallax-02");
  var target2Gray = $("#parallax-02-gray");
  var target3 = $("#parallax-03");
  var target3Gray = $("#parallax-03-gray");
  var target4 = $("#parallax-04");
  var target4Gray = $("#parallax-04-gray");
  var target5 = $("#parallax-05");
  var target5Gray = $("#parallax-05-gray");
  var target6 = $("#parallax-06");
  var target6Gray = $("#parallax-06-gray");
  var target7 = $("#parallax-07");
  var target7Gray = $("#parallax-07-gray");

  var targetPosOT1 = target1.offset().top;
  var targetPosOT2 = target2.offset().top;
  var targetPosOT3 = target3.offset().top;
  var targetPosOT4 = target4.offset().top;
  var targetPosOT5 = target5.offset().top;
  var targetPosOT6 = target6.offset().top;
  var targetPosOT7 = target7.offset().top;

  var targetFactor = 0.5;
  var windowH = $(window).height();

  var scrollYStart1 = targetPosOT1 - windowH;
  var scrollYStart2 = targetPosOT2 - windowH;
  var scrollYStart3 = targetPosOT3 - windowH;
  var scrollYStart4 = targetPosOT4 - windowH;
  var scrollYStart5 = targetPosOT5 - windowH;
  var scrollYStart6 = targetPosOT6 - windowH;
  var scrollYStart7 = targetPosOT7 - windowH;

  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();
    if(scrollY > scrollYStart1){
      target1Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart2){
      target2Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart3){
      target3Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart4){
      target4Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart5){
      target5Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart6){
      target6Gray.css('opacity','100')
    }
    if(scrollY > scrollYStart7){
      target7Gray.css('opacity','100')
    }

    if(scrollY == targetPosOT1){
      target1Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT2 + 100 && scrollY > targetPosOT2 - 100){
      target2Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT3 + 100 && scrollY > targetPosOT3 - 100){
      target3Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT4 + 100 && scrollY > targetPosOT4 - 100){
      target4Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT5 + 100 && scrollY > targetPosOT5 - 100){
      target5Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT6 + 100 && scrollY > targetPosOT6 - 100){
      target6Gray.css('opacity','0')
    }
    if(scrollY < targetPosOT7 + 100 && scrollY > targetPosOT7 - 100){
      target7Gray.css('opacity','0')
    }
  });
});
