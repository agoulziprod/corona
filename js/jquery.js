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
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    // appending images object
    images.map(e => {
        $("section.last-sec").before(e.template);
        $("#lg").append(`<a class="item" data-scroll="#${e.symbole}" href="#${e.symbole}">${e.name}</a>`)
    })
<<<<<<< HEAD
    // contributers hover effect
  
||||||| merged common ancestors
=======

>>>>>>> 64aaed0154f80e9891d31212035541e938396bef
});