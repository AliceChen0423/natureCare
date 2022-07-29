function setTopBtn(){
    // 捲軸高度為0 歸零才會捲回去
    $('#topBtn').click(function(){
        // 'scrollTop':0  捲到最上面，超出畫面的範圍是0
        $('body.html').animate({'scrollTop':0})
    })

    // 按鈕上下滾動固定 // $(window).height() 選取視窗的高度 
    $('#topBtn').css({'top':$(window).height()-$('#topBtn').height()-20});

    // 依造縮放重新計算位置 按鈕跟著視窗大小跑
    $(window).resize(function(){
        $('#topBtn').css({'top':$(window).height()-$('#topBtn').height()-20});
    })

    // 當捲動時查到捲動的範圍為多少
    // $(window).scroll(function(){
        // console.log($(window).scrollTop());
        // })
        
    $(window).scroll(function(){
        // 抓到視窗高度、捲出去的部分、按鈕高度
        // 捲動事件
        var scrollOut=$(window).scrollTop();
        // 捲出去的高度
        var winH=$(window).height();
        // 視窗的高度
        var btnH=$('#topBtn').height();
        // 我要動的高度
        var moveTo=winH+scrollOut-btnH-20;
        // $('#topBtn').css({'top':moveTo})
        $('#topBtn').stop().animate({'top':moveTo});
    })
}