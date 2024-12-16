$(function () {
    //탭메뉴
    $('.tab_menu li > a').on('click', function (e) {
        e.preventDefault();
        $('.tab_menu li > a').removeClass('on');
        $(this).addClass('on');

        const index = $(this).parent().index();
        $('.tab_wrap > div').hide();
        $('.tab_wrap > div').eq(index).show();
    });

    $('.tab_menu li > a').eq(0).show();

    //메뉴
    $('.right_header > .menu').on('click', function () {
        $('.wrap .menu_div').stop().slideDown();

    });
    $('.wrap .menu_div').mouseleave(function () {
        $(this).stop().slideUp();
    });
    //작은 탭메뉴
    $('.milage_tablist li a').on('click', function (e) {
        e.preventDefault(); 

        $('.milage_tablist li').removeClass('active');

        $(this).parent().addClass('active');

        $('.milage_tab_wrap > div').hide();

        const tabIndex = $(this).parent().index();
        $('.milage_tab_wrap > div').eq(tabIndex).show();
    });

    $('.milage_tab_wrap > div').hide();
    $('.milage_tab_wrap > div:first-child').show();

    //해지 팝업
    $('.plusFam .term a').on('click', function(e) {
        e.preventDefault();

        $('.footer .present_popup').fadeIn(300).delay(900).fadeOut(300);
    });

    // $('.footer .present_popup').on('click', function() {

    //     $('.footer .present_popup').hide();
    // });
    
});