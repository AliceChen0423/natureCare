// page為自己設的參數（無需宣告的變數）
function productMenuEFF(page,item){
                // 選單內容收起來
                $('#productMenu ul ul').hide();
                // 開關
                $('#productMenu>ul>li>a').click(function(){
                    $(this).next().stop().slideToggle();
                })

                $('#productMenu ul ul').eq(page).slideDown()
                // 給箭頭
                                       .children('li').eq(item).children('a').addClass('nowPage');
}