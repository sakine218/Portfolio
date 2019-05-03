$(function () {
  $(".parallax").paroller({
    factor: 0.5,
    factorXs: 0.5,
    type: 'background',
    direction: 'vertical'
  });

  var target1 = $("#parallax-01");
  var targetPosOT1 = target1.offset().top;
  var target2 = $("#parallax-02");
  var targetPosOT2 = target2.offset().top;
  var target3 = $("#parallax-03");
  var targetPosOT3 = target3.offset().top;
  var target4 = $("#parallax-04");
  var targetPosOT4 = target4.offset().top;
  var target5 = $("#parallax-05");
  var targetPosOT5 = target5.offset().top;
  var target6 = $("#parallax-06");
  var targetPosOT6 = target6.offset().top;
  var target7 = $("#parallax-07");
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
      target1.addClass('bg-gray-01');
    }
    if(scrollY > scrollYStart2){
      target2.addClass('bg-gray-02');
    }
    if(scrollY > scrollYStart3){
      target3.addClass('bg-gray-03');
    }
    if(scrollY > scrollYStart4){
      target4.addClass('bg-gray-04');
    }
    if(scrollY > scrollYStart5){
      target5.addClass('bg-gray-05');
    }
    if(scrollY > scrollYStart6){
      target6.addClass('bg-gray-06');
    }
    if(scrollY > scrollYStart7){
      target7.addClass('bg-gray-07');
    }
    if(scrollY == targetPosOT1){
      target1.removeClass('bg-gray-01');
    }
    if(scrollY < targetPosOT2 + 100 && scrollY > targetPosOT2 - 100){
      target2.removeClass('bg-gray-02');
    }
    if(scrollY < targetPosOT3 + 100 && scrollY > targetPosOT3 - 100){
      target3.removeClass('bg-gray-03');
    }
    if(scrollY < targetPosOT4 + 100 && scrollY > targetPosOT4 - 100){
      target4.removeClass('bg-gray-04');
    }
    if(scrollY < targetPosOT5 + 100 && scrollY > targetPosOT5 - 100){
      target5.removeClass('bg-gray-05');
    }
    if(scrollY < targetPosOT6 + 100 && scrollY > targetPosOT6 - 100){
      target6.removeClass('bg-gray-06');
    }
    if(scrollY < targetPosOT7 + 100 && scrollY > targetPosOT7 - 100){
      target7.removeClass('bg-gray-07');
    }
  });
});
