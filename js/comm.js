function mainNavEff(){
    $('#mainNav ul ul').css({
        'position':'relative',
        'top':200,
        'left':0
        // 先隱藏選單
    }).hide()

    $('#mainNav>ul>li').hover(function(){
        // 滑入後 秀出透明 只執行最後一次動畫 動畫往上移且不透明執行一秒
        // stop放在動畫前一個
        $(this).children('ul').show().css({'opacity':0})
               .stop().animate({'top':0,'opacity':1},1000);
    },function(){
        // 離開後 只執行最後一次動畫 動畫移回去且變回透明執行一秒 執行完動作後隱藏
        $(this).children('ul').stop()
               .animate({'top':200,'opacity':0},1000,function(){
                   $(this).hide();
               });
    }) 
}