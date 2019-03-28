//パララックスの設定
$(function(){
    var target1 = $("#parallax-01");
    var targetPosOT1 = target1.offset().top;
    var target2 = $("#parallax-02");
    var targetPosOT2 = target2.offset().top;
    var target3 = $("#parallax-03");
    var targetPosOT3 = target3.offset().top;
    var target4 = $("#parallax-04");
    var targetPosOT4 = target1.offset().top;
    var target5 = $("#parallax-05");
    var targetPosOT5 = target2.offset().top;
    var target6 = $("#parallax-06");
    var targetPosOT6 = target3.offset().top;
    var target7 = $("#parallax-07");
    var targetPosOT7 = target1.offset().top;

    //パララックスの動きを滑らかにする
    var targetFactor = 0.4;

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
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart2){
        target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart3){
        target3.css('background-position-y', (scrollY - targetPosOT3) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart4){
        target4.css('background-position-y', (scrollY - targetPosOT4) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart5){
        target5.css('background-position-y', (scrollY - targetPosOT5) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart6){
        target6.css('background-position-y', (scrollY - targetPosOT6) * targetFactor + 'px');
      }
      if(scrollY > scrollYStart7){
        target7.css('background-position-y', (scrollY - targetPosOT7) * targetFactor + 'px');
      }
    });
  });

//モノクロにする
  $(function(){
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

    var targetFactor = 0.4;

    var windowH = $(window).height();

    var scrollYStart1 = targetPosOT1 - windowH;
    var scrollYStart2 = targetPosOT2 - windowH;
    var scrollYStart3 = targetPosOT3 - windowH;
    var scrollYStart4 = targetPosOT4 - windowH;
    var scrollYStart5 = targetPosOT5 - windowH;
    var scrollYStart6 = targetPosOT6 - windowH;
    var scrollYStart7 = targetPosOT7 - windowH;

    $(window).on('scroll',function(){
      var scrollY = $(this).scrollTop(); //scroll量を取得して、scrollY変数に格納

      if(scrollY > scrollYStart1){
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        //背景画像をモノクロにする
        target1.addClass('bg-gray');
      }
      if(scrollY > scrollYStart2){
        target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
        target2.addClass('bg-gray');
      }
      if(scrollY > scrollYStart3){
        target3.css('background-position-y', (scrollY - targetPosOT3) * targetFactor + 'px');
        target3.addClass('bg-gray');
      }
      if(scrollY > scrollYStart1){
        target4.css('background-position-y', (scrollY - targetPosOT4) * targetFactor + 'px');
        target4.addClass('bg-gray');
      }
      if(scrollY > scrollYStart2){
        target5.css('background-position-y', (scrollY - targetPosOT5) * targetFactor + 'px');
        target5.addClass('bg-gray');
      }
      if(scrollY > scrollYStart3){
        target6.css('background-position-y', (scrollY - targetPosOT6) * targetFactor + 'px');
        target6.addClass('bg-gray');
      }
      if(scrollY > scrollYStart1){
        target7.css('background-position-y', (scrollY - targetPosOT7) * targetFactor + 'px');
        target7.addClass('bg-gray');
      }

      if(scrollY == targetPosOT1){
        target1.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT2 + 250 && scrollY > targetPosOT2 - 250){
        target2.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT3 + 250 && scrollY > targetPosOT3 - 250){
        target3.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT4 + 250 && scrollY > targetPosOT4 - 250){
        target4.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT5 + 250 && scrollY > targetPosOT5 - 250){
        target5.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT6 + 250 && scrollY > targetPosOT6 - 250){
        target6.removeClass('bg-gray');
      }
      if(scrollY < targetPosOT7 + 250 && scrollY > targetPosOT7 - 250){
        target7.removeClass('bg-gray');
      }
    });
  });
