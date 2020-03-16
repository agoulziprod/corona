let images = [
    {
    name: "العربية",
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
                        <img class="ui image rounded" src="/images/${photo.path}" alt="${photo.alt}">
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

for (const lg of images) {
   
   
}

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




