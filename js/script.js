let images = [
    {
    name: "Darija",
    symbole: "Ar",
    photos: 
        [
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
        photos: 
            [
                { path: "chelha1.png", alt: 'اديغ شيريغ اورنيغ ادغيفش سلمغ' },
                { path: "chelha5.png", alt: 'ⵉⴷⵖ ⵖⵉⴼⵉ ⵜⵄⵥⵥⴰⴷ ⵡⵔ ⵏⵏⵉⵖ ⴰⴷⵖⵉⴼⵛ ⵙⵍⵎⵖ' },
                { path: "chalha3.png", alt: 'Idgh kirigh, Ornigh aghifk sallamagh' },
                { path: "chelha4.png", alt: 'Mizi tekhseghchek, oukhak tssedjimegh chi' }
                ,
                { path: "chelha7.png", alt: 'achko  arkitirikh, orra fllak sallemkh' }
                ,
                { path: "chelha9.png", alt: 'اشكو ارْكٍتريخ اورافلاك سلمخ' }
            ]
},
];

for (const iterator of images) {
    iterator.template = `<section class="ui section" id="${iterator.symbole}">
                            <div class="ui container">
                                <h3 class="ui header centered">${iterator.name}</h3>
                                <div class="flex">
                        `
    let content = ""
    for (const photo of iterator.photos) {
        content += `<div class="image-box">
                        <img class="ui image rounded lazyload" data-src="/images/${photo.path}" alt="${photo.alt}">
                        <div class="overlay">
                            <a class="ui huge primary button" href="/images/${photo.path}" download type="submit">
                            <i class="icon download" ></i> Download!
                            </a>
                        </div>
                    </div>`
    }
    iterator.template += content + `</div></div></section>`
    // onclick="window.open('${photo.path}')
}


let contributers = [
    {
        name: 'AGOULZI Mohamed',
        Link: 'http://www.agoulzi.com/'
    },
    {
        name: 'OTHWSAVE',
        Link: 'https://www.linkedin.com/in/othwsav'
    }, {
        name: 'AGOULZI Salah',
        Link: ''
    },
    {
        name: 'KHIZOU Hajar',
        Link: 'www.linkedin.com/in/hajarkhizou'
    },
    {
        name: 'AIT OUFKIR Chaimae',
        Link: ''
    },
    {
        name: 'OUREKOUCH Mounir',
        Link: ''
    },   {
        name: 'BIROUK Yassine',
        Link: ''
    },
    
]
       



