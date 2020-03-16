$(document).ready(function () {
    $('.ui.dropdown')
        .dropdown()
        ;
    $("header .menu.fixed .scrollToImages .menu").on('click', 'a',function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 1200);
    });
    $("header .menu.fixed .link-to-go").on('click',function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 1200);
    });
    // appending images object
    images.forEach(e => {
        $("#source").before(e.template);
        $("#lg").append(`<a class="item" data-scroll="${e.symbole}">${e.name}</a>`)
        // href="#${e.symbole}"
    })
    contributers.forEach((e, idx, array)=>{
        $("#contributers-list").append(
            `
            <a href="${e.Link}" target="blank">${e.name}</a>
            `
            )
        if(idx != array.length - 1)
        $("#contributers-list").append('<spane>, </spane>')
    })
    
    // auto Sync of active class in navbar
    $(window).scroll(function () {
        $("section").each(function () {
            if (($(window).scrollTop() + $('header .menu.fixed').innerHeight() + 550) >= $(this).offset().top) {
                var sectionId = $(this).attr('id');
                $('header .menu.fixed .link-to-go, header .menu.fixed .scrollToImages .menu').removeClass('active');
                $('header .menu.fixed .link-to-go[data-scroll="' + sectionId + '"], header .menu.fixed .scrollToImages .menu a[data-scroll="' + sectionId + '"]').addClass('active');
            }
        });
    });
});