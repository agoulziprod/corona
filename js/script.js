let images = [{
    name: "Arab",
    photos: [{path:"photo.jpg", alt:''},{path:"photo2.jpg", alt:''}]
},
];
let contributers = [
    {
        name: 'smia o knia',
        Link: 'ima 3amr olla khawi'
    },
]
$(document).ready(function () {
    $("header .menu.fixed .scrollToImages .menu a").click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 2000);
    });
});