function mainNavEff() {

    function setMenu(){
        // off註銷事件
        $('#mainNav>ul>li').off('mouseenter mouseleave');
        $('#mainNav>ul>li>a').off('click');
        $('#menuBtn').removeClass('closeBtn');

        // 若螢幕大於600時執行
        if(!window.matchMedia('(max-width:600px)').matches){
            // 選單不管怎樣都出來
            $('#menuBtn').hide();
            $('#mainNav').show();
            $('#mainNav ul ul').css({
                'position': 'relative',
                'top': 200,
                'left': 0
                // 先隱藏選單
            }).hide();

            $('#mainNav>ul>li').hover(function () {
                // 滑入後 秀出透明 只執行最後一次動畫 動畫往上移且不透明執行一秒
                // stop放在動畫前一個
                $(this).children('ul').show().css({ 'opacity': 0 })
                    .stop().animate({ 'top': 0, 'opacity': 1 }, 1000);
            }, function () {
                // 離開後 只執行最後一次動畫 動畫移回去且變回透明執行一秒 執行完動作後隱藏
                $(this).children('ul').stop()
                    .animate({ 'top': 200, 'opacity': 0 }, 1000, function () {
                        $(this).hide();
                    });
            })
        } else {
            // 選單不管怎樣都隱藏
            $('#menuBtn').show();
            $('#mainNav').hide();
            // 不然什麼都不做
            $('#mainNav ul ul').css({
                'position':'static',
                'opacity':1
            }).hide();
            // 點擊文字後選單滑出
            $('#mainNav>ul>li>a').click(function(){
                $(this).next().stop().slideToggle();
            })
        }
    }

    // 螢幕寬度=現在的螢幕寬度
    var winWidth=window.outerWidth;
    // 先抓螢幕寬度
    // alert(windowWidth)

    // 自動重整
    $(window).resize(function(){
        if(winWidth!=window.outerWidth){
            setMenu();
            winWidth.window=outerWidth;
        }
    })

    // $(window).resize();
    setMenu();

    $('#menuBtn').click(function(){
        // 下拉式選單
        $('#mainNav').stop().slideToggle();
        // 單一按鈕的開跟關
        $(this).toggleClass('closeBtn');

        return false;
    })
}