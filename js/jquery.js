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
});