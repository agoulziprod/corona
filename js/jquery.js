$(document).ready(function () {
    $('.ui.dropdown')
        .dropdown()
        ;
    $("header .menu.fixed .scrollToImages .menu a").click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 2000);
    });
    // appending images object
    images.map(e => {
        $("section.last-sec").before(e.template);
        $("#lg").append(`<a class="item" data-scroll="#${e.symbole}" href="#${e.symbole}">${e.name}</a>`)
    })
    // contributers hover effect
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});