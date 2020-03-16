let images = [
    {
    name: "العربية",
    symbole: "Ar",
    photos: [
        { path: "darija1.png", alt: '7it kanbghitk, maghansalamch 3lik' },
        { path: "darija2.png", alt: 'حيت كنبغيك مغنسلمش عليك ' }
        
    ]
},
    {
    name: "English",
    symbole: "En",
    photos: [
        { path: "En.png", alt: 'stay distant, stay safe' }
        
    ]
},
    {
        name: "Tamazight",
        symbole: "Ta",
        photos: [
            {
                path: "chelha1.png", alt: 'اديغ شيريغ اورنيغ ادغيفش سلمغ' },
        { path: "chelha5.png", alt: 'ⵉⴷⵖ ⵖⵉⴼⵉ ⵜⵄⵥⵥⴰⴷ ⵡⵔ ⵏⵏⵉⵖ ⴰⴷⵖⵉⴼⵛ ⵙⵍⵎⵖ' },
        { path: "chelha3.png", alt: 'Idgh kirigh, Ornigh aghifk sallamagh' },
            { path: "chelha4.png", alt: 'Mizi tekhseghchek, oukhak tssedjimegh chi' }
    
        
    ]
},
];


let contributers = [
    {
        name: 'AGOULZI Mohamed',
        Link: 'www.agoulzi.com'
    },
    {
        name: 'OTHWSAVE',
        Link: 'ina link bghiti ?'
    },
    {
        name: 'KHIZOU Hajar',
        Link: ''
    },
    {
        name: 'AIT OUFKIR Chaimae',
        Link: ''
    },
    {
        name: 'OUREKOUCH Mounir',
        Link: ''
    },

]



$('.ui.dropdown')
    .dropdown()
    ;

$(document).ready(function () {
    $("header .menu.fixed .scrollToImages .menu a").click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - $('header .menu.fixed').innerHeight()
        }, 2000);
    });
});