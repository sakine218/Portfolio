//スムーススクロール処理
$(function () {
    var $win = $(window),
        $header = $('.header'),
        headerHeight = $header.outerHeight(),
        startPos = 0;
    $header.hide();
    $win.on('load scroll', function () {
        var changeValue = $win.outerHeight()
        var value = $(this).scrollTop();
        if (value > changeValue && value > startPos && value > headerHeight) {
            $header.show();
            $header.css('top', '-' + headerHeight + 'px');
        } else {
            $header.css('top', '0');
        }
        startPos = value;
    });
    $('a[href^=#]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});

//
