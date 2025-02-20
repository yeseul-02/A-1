$(function(){
    // 네비게이션 서브메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
    });

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    // 탭 메뉴
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass('on');
        $(this).addClass('on');
        
        var i = $(this).index(); // 클릭된 li의 인덱스 가져오기
        console.log(i);

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    });

    // 팝업
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    });

    $("button").click(function(){
        $(".popup").hide();
    });
});
