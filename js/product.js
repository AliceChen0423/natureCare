function productMenuEFF(){
                // 選單內容收起來
                $('#productMenu ul ul').hide();
                // 開關
                $('#productMenu>ul>li>a').click(function(){
                    $(this).next().stop().slideToggle();
                })
}