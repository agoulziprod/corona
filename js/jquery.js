$(document).ready(function () {
    $('.ui.dropdown')
        .dropdown()
        ;
       // $("#lg-mobile").dropdown();
    $(".ui.menu .scrollToImages .menu").on('click', 'a',function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 1200);
    });
    $(".mobile").on('click',function (event) {
        alert('test')
        $('.ui.sidebar').sidebar('toggle')
    })
    $(".ui.menu .link-to-go").on('click',function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 1200);
    });
    // appending images object
    images.forEach(e => {
        $("#source").before(e.template);
        $("#lg").append(`<a class="item" data-scroll="${e.symbole}">${e.name}</a>`)
        $("#lg-mobile").append(`<a class="item mobile" data-scroll="${e.symbole}">${e.name}</a>`)
    })
    contributers.forEach((e, idx, array)=>{
        $("#contributers-list").append(
            `
            <a href="${e.Link}" target="blank">${e.name}</a>
            `
            )
        if(idx != array.length - 1)
        $("#contributers-list").append('<span>, </span>')
    })
    
    // auto Sync of active class in navbar
    $(window).scroll(function () {
        $("section").each(function () {
            if (($(window).scrollTop() + $('header .menu.fixed').innerHeight() + 450) >= $(this).offset().top) {
                var sectionId = $(this).attr('id');
                $('header .menu.fixed .link-to-go').removeClass('active');
                $('header .menu.fixed .link-to-go[data-scroll="' + sectionId + '"]').addClass('active');
            }
        });
    });
    // sidebar
    $("header .toc").click(function (){
        $('.ui.sidebar').sidebar('toggle')
    })
    // lazyload
    lazyload();
    // scroll To Top Button
    let b = $('button#scrollToTop');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            if (b.is(":hidden")) {
                b.fadeIn(100);
            }
        } else {
            b.fadeOut(100);
        }
    });
    b.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
});