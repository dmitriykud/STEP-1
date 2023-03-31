"use strict"

// --------------------------------------------------------------------------tabs - 1 ----------------------------------------------
const ourServicesTabs = document.querySelector('.our-services-tabs');
const ourServicesContent = document.querySelectorAll('.our-services-tabs-content li');

ourServicesTabs.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return;
    };
    const index = e.target.dataset.tabs;

    const active = ourServicesTabs.querySelector('.active');
    const activeContent = document.querySelector('.js-content-item-active');

    if (active) {
        active.classList.remove('active');
        activeContent.className = "js-content-item-disactive";
    };

    e.target.classList.add('active');
    ourServicesContent[index].className = "js-content-item-active";

});

// -----------------------------------------------------------------tabs - 2 --------------------------------------------------------------

const imgGraphicDesign = [
    "./img/graphic design/graphic-design1.jpg",
    "./img/graphic design/graphic-design2.jpg",
    "./img/graphic design/graphic-design3.jpg",
    "./img/graphic design/graphic-design4.jpg",
    "./img/graphic design/graphic-design5.jpg",
    "./img/graphic design/graphic-design6.jpg",
    "./img/graphic design/graphic-design7.jpg",
    "./img/graphic design/graphic-design8.jpg",
    "./img/graphic design/graphic-design9.jpg",
    "./img/graphic design/graphic-design10.jpg",
    "./img/graphic design/graphic-design11.jpg",
    "./img/graphic design/graphic-design12.jpg",
];

const imgWebDesign = [
    "./img/web design/web-design1.jpg",
    "./img/web design/web-design2.jpg",
    "./img/web design/web-design3.jpg",
    "./img/web design/web-design4.jpg",
    "./img/web design/web-design5.jpg",
    "./img/web design/web-design6.jpg",
    "./img/web design/web-design7.jpg"
];

const imgLandingPage = [
    "./img/landing page/landing-page1.jpg",
    "./img/landing page/landing-page2.jpg",
    "./img/landing page/landing-page3.jpg",
    "./img/landing page/landing-page4.jpg",
    "./img/landing page/landing-page5.jpg",
    "./img/landing page/landing-page6.jpg",
    "./img/landing page/landing-page7.jpg",
];

const imgWordpress = [
    "./img/wordpress/wordpress1.jpg",
    "./img/wordpress/wordpress2.jpg",
    "./img/wordpress/wordpress3.jpg",
    "./img/wordpress/wordpress4.jpg",
    "./img/wordpress/wordpress5.jpg",
    "./img/wordpress/wordpress6.jpg",
    "./img/wordpress/wordpress7.jpg",
    "./img/wordpress/wordpress8.jpg",
    "./img/wordpress/wordpress9.jpg",
    "./img/wordpress/wordpress10.jpg"
];

const getCardHtml = (element, title) => `
  <div class='our-amazing-work-flip-card'>
    <div class='our-amazing-work-flip-card-inner'>

        <div class='our-amazing-work-flip-card-front'>
            <img src="${element}">
		</div>

        <div class='our-amazing-work-flip-card-back'>
            <img  src="./img/icon elipses.png" style="width: 88px;  height: 43px;" alt="icon">
            <p class='our-amazing-work-flip-card-back-p1'>creative design</p>
            <p class='our-amazing-work-flip-card-back-p2'>${title}</p>    
        </div>

    </div>
  </div>`;

const imgGraphicDesignHtmlArray = imgGraphicDesign.map((element) => getCardHtml(element, 'Graphic Design'));
const imgWebDesignHtmlArray = imgWebDesign.map((element) => getCardHtml(element, 'Web Design'));
const imgLandingPageHtmlArray = imgLandingPage.map((element) => getCardHtml(element, 'Landing Page'));
const imgWordpressHtmlArray = imgWordpress.map((element) => getCardHtml(element, 'Wordpress'));

const imgAllArray = [imgGraphicDesignHtmlArray, imgWebDesignHtmlArray, imgLandingPageHtmlArray, imgWordpressHtmlArray];

const allPicturesArray = [];

imgAllArray.map((e) => {
    e.map((el) => {
        allPicturesArray.push(el);
    });
});

const cardLabrary = document.querySelector('.our-amazing-work-cards-lab');

cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(0, 12).join(''));

function shuffle(arr) {
    arr.sort((el) => Math.random() - 0.5);
    return arr;
};
shuffle(allPicturesArray);

const ourAmazingWorkTabs = document.querySelector('.our-amazing-work-tabs');

const btnOurAmazing = document.querySelector('.btn-load-more');
let i = 0;

ourAmazingWorkTabs.addEventListener('click', (e) => {

    const tabs = document.querySelectorAll('.tabs-second-title');
    tabs.forEach(e => e.style = "border-right: 2px solid #DADADA");

    const cards = document.querySelectorAll('.our-amazing-work-flip-card');
    cards.forEach((e) => { e.remove() });

    const index = e.target.dataset.tabs;
    const active = ourAmazingWorkTabs.querySelector('.active');

    if (index > 0) {
        tabs[index - 1].style = "border-right: none";
    }

    if (active) {
        active.classList.remove('active');
    }

    e.target.classList.add('active');
    e.target.style = "border-right: 2px solid #18CFAB";

    i = 0;
    if (index === "0") {
        shuffle(allPicturesArray);

        cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(0, 12).join(" "));
        btnOurAmazing.style.display = 'block';
    };

    if (index === "1") {
        cardLabrary.insertAdjacentHTML('beforeend', imgGraphicDesignHtmlArray.join(" "));
        btnOurAmazing.style.display = 'block';
    };

    if (index === "2") {
        cardLabrary.insertAdjacentHTML('beforeend', imgWebDesignHtmlArray.join(" "));
        btnOurAmazing.style.display = 'block';
    };

    if (index === "3") {
        cardLabrary.insertAdjacentHTML('beforeend', imgLandingPageHtmlArray.join(" "));
        btnOurAmazing.style.display = 'block';
    };

    if (index === "4") {
        cardLabrary.insertAdjacentHTML('beforeend', imgWordpressHtmlArray.join(" "));
        btnOurAmazing.style.display = 'block';
    };
});

const loader = document.querySelector('.lds-spinner');

btnOurAmazing.addEventListener('click', (ev) => {
    i++;
    const active = ourAmazingWorkTabs.querySelector('.active');
    // const index = active.dataset.tabs;
    // console.log(index);

    // const showTabCards = () => {
    //     if (index === "1") {
    //         cardLabrary.insertAdjacentHTML('beforeend', imgGraphicDesignHtmlArray.join(" "));
    //     };

    //     if (index === "2") {
    //         cardLabrary.insertAdjacentHTML('beforeend', imgWebDesignHtmlArray.join(" "));
    //     };

    //     if (index === "3") {
    //         cardLabrary.insertAdjacentHTML('beforeend', imgLandingPageHtmlArray.join(" "));
    //     };

    //     if (index === "4") {
    //         cardLabrary.insertAdjacentHTML('beforeend', imgWordpressHtmlArray.join(" "));
    //     };
    // };

    if (i === 1) {
        btnOurAmazing.style.display = 'none';
        loader.style.display = 'block';
        setTimeout(() => {
            btnOurAmazing.style.display = 'block';
            loader.style.display = 'none';

            shuffle(allPicturesArray);
            cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(12, 24).join(" "));
            // if (index === "0") {
            //     shuffle(allPicturesArray);
            //     cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(12, 24).join(" "));
            // } else showTabCards();
        }, 2000);
    };

    if (i === 2) {
        btnOurAmazing.style.display = 'none';
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            shuffle(allPicturesArray);
            cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(24, 37).join(" "));
            // if (index === "0") {
            //     shuffle(allPicturesArray);
            //     cardLabrary.insertAdjacentHTML('beforeend', allPicturesArray.slice(24, 37).join(" "));
            // } else showTabCards();
        }, 2000);
    };
});

// ---------------------------------------------------------------------------------------------------------------------------------------------

cardLabrary.addEventListener("mouseover", (ev) => {

    if (ev.target === ev.currentTarget) {
        return;
    };

    ev.target.closest('.our-amazing-work-flip-card-inner').classList.toggle('show-card-back');
})

cardLabrary.addEventListener("mouseout", (ev) => {

    if (ev.target === ev.currentTarget) {
        return;
    };

    ev.target.closest('.our-amazing-work-flip-card-inner').classList.remove('show-card-back');
});

// ------------------------------------------------------------------------------

const slaiderPhotos = [
    "./img/slaider/Photo1.jpg",
    "./img/slaider/Photo2.jpg",
    "./img/slaider/Photo3.jpg",
    "./img/slaider/Photo4.jpg",
    "./img/slaider/Photo5.jpg",
    "./img/slaider/Photo6.jpg",
    "./img/slaider/Photo7.jpg",
    "./img/slaider/Photo8.jpg",
    "./img/slaider/Photo9.jpg",
    "./img/slaider/Photo10.jpg",
    "./img/slaider/Photo11.jpg",
    "./img/slaider/Photo12.jpg",
    "./img/slaider/Photo13.jpg",
    "./img/slaider/Photo14.jpg",
    "./img/slaider/Photo15.jpg"
];

const slaiderName = ["Suizan", "John", "Pitter", "Sofia", "Bredd", "Angella",
    "Stiven", "Julia", "Ostin", "Jim", "Gesika", "Luiza", "Naomi", "Richard", "Garry"];

const sladerSpesiality = ["Web designer", "Web producers", "Disigner", "UX designer", "UI designer",
    "Web project manager", "Multimedia architect", "SEO manager", "Front-end developer", "Front-end designer",
    "Full-stack developer", "Security specialist", "IT manager", "Database developer", "Cyber security specialist"];

const slaiderTexts = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta omnis ullam`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repellat ut optio `,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni dolorem ipsa odit quasi adipisci atque, laudantium cum sed nostrum?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta omnis ullam`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repellat ut optio `,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni dolorem ipsa odit quasi adipisci atque, laudantium cum sed nostrum?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta omnis ullam`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repellat ut optio `,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat ut optio soluta`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni dolorem ipsa odit quasi adipisci atque, laudantium cum sed nostrum?`
];

// ---------------------------------------------------------------------------------------------------------------------------

const photoSmallWrapper = document.querySelector('.photo-small-wrapper');

const btnPrev = document.querySelector('.js-btn-slaider-prev');

const btnNext = document.querySelector('.js-btn-slaider-next');

const getPhotoHtml = (element, index) =>
    `<div class="wrapper-slide" data-slide="${index}">
           <img data-photo="${index}" src="${element}" alt="People-icon" class="moving-photo">
     </div>`;

const slaiderPhotosHtml = slaiderPhotos.map((el, index) => getPhotoHtml(el, index));

photoSmallWrapper.querySelectorAll('.wrapper-slide').forEach(el => el.remove());

photoSmallWrapper.insertAdjacentHTML('beforeend', slaiderPhotosHtml.join(""));

document.querySelector('.wrapper-slide').classList.add('activity');

const slaiderNamePerson = document.querySelector('.slaider-name-person');
const slaiderSpesialityPerson = document.querySelector('.slaider-spesiality-person');
const photoWrapperImg = document.querySelector('.photo-wrapper img');
const sectionSixthParagraph = document.querySelector('.section-sixth-paragraph');
const bigPhotPerson = document.querySelector('.photo-person')

slaiderNamePerson.innerText = `${slaiderName[0]}`;
slaiderSpesialityPerson.innerText = `${sladerSpesiality[0]}`;
photoWrapperImg.src = `${slaiderPhotos[0]}`;
sectionSixthParagraph.innerText = `${slaiderTexts[0]}`;

const slideArray = document.querySelectorAll('.wrapper-slide');

let slide = 0;

btnNext.addEventListener('click', (ev) => {

    if (slide >= 14) return;
    slide++;

    const activityPhoto = document.querySelector('.activity')
    let slideIndex = activityPhoto.dataset.slide;

    bigPhotPerson.style.opacity = 0;
    slaiderNamePerson.style.opacity = 0;
    slaiderSpesialityPerson.style.opacity = 0;
    sectionSixthParagraph.style.opacity = 0;

    if (activityPhoto || slide !== "14") {
        activityPhoto.classList.remove('activity');
    };

    const forNext = document.querySelector('.wrapper-slide[data-slide="' + [slideIndex - (-1)] + '"]');
    setTimeout(() => {
        forNext.classList.add('activity');
        bigPhotPerson.style.opacity = 1;
        slaiderNamePerson.style.opacity = 1;
        slaiderSpesialityPerson.style.opacity = 1;
        sectionSixthParagraph.style.opacity = 1;
    }, 550);

    slaiderNamePerson.innerText = `${slaiderName[slideIndex - (-1)]}`;
    slaiderSpesialityPerson.innerText = `${sladerSpesiality[slideIndex - (-1)]}`;
    photoWrapperImg.src = `${slaiderPhotos[slideIndex - (-1)]}`;
    sectionSixthParagraph.innerText = `${slaiderTexts[slideIndex - (-1)]}`

    if (slide <= 12) {
        photoSmallWrapper.style.transform = `translateX(-${100 * (slide - 1)}px)`;
    };
});

btnPrev.addEventListener('click', () => {

    if (slide === 0) return;

    const activityPhoto = document.querySelector('.activity')
    let slideIndex = activityPhoto.dataset.slide;

    bigPhotPerson.style.opacity = 0;
    slaiderNamePerson.style.opacity = 0;
    slaiderSpesialityPerson.style.opacity = 0;
    sectionSixthParagraph.style.opacity = 0;

    if (activityPhoto || slide !== "0") {
        activityPhoto.classList.remove('activity');
    }

    const forPrev = document.querySelector('.wrapper-slide[data-slide="' + [slide - 1] + '"]');

    setTimeout(() => {
        forPrev.classList.add('activity');
        bigPhotPerson.style.opacity = 1;
        slaiderNamePerson.style.opacity = 1;
        slaiderSpesialityPerson.style.opacity = 1;
        sectionSixthParagraph.style.opacity = 1;
    }, 550);

    slaiderNamePerson.innerText = `${slaiderName[slideIndex - 1]}`;
    slaiderSpesialityPerson.innerText = `${sladerSpesiality[slideIndex - 1]}`;
    photoWrapperImg.src = `${slaiderPhotos[slideIndex - 1]}`;
    sectionSixthParagraph.innerText = `${slaiderTexts[slideIndex - 1]}`

    if (slide <= 11) {
        photoSmallWrapper.style.transform = `translateX(-${100 * (slide - 1)}px)`
    };

    slide--;
});

photoSmallWrapper.addEventListener("click", (ev) => {

    if (ev.target === ev.currentTarget) {
        return;
    };

    bigPhotPerson.style.opacity = 0;
    slaiderNamePerson.style.opacity = 0;
    slaiderSpesialityPerson.style.opacity = 0;
    sectionSixthParagraph.style.opacity = 0;

    const activityPhoto = document.querySelector('.activity')

    if (activityPhoto) {
        activityPhoto.classList.remove('activity');
    };

    const index = ev.target.dataset.photo;

    ev.target.closest('.wrapper-slide').classList.add('activity');

    slaiderNamePerson.innerText = `${slaiderName[index]}`;
    slaiderSpesialityPerson.innerText = `${sladerSpesiality[index]}`;
    sectionSixthParagraph.innerText = `${slaiderTexts[index]}`
    photoWrapperImg.src = `${slaiderPhotos[index]}`;

    setTimeout(() => {
        bigPhotPerson.style.opacity = 1;
        slaiderNamePerson.style.opacity = 1;
        slaiderSpesialityPerson.style.opacity = 1;
        sectionSixthParagraph.style.opacity = 1;
    }, 550);

    slide = index;
});

// ------------------------------------------------------------------------------------------------

const grid = document.querySelector('.grid');

grid.addEventListener("mouseover", (ev) => {
    if (ev.target === ev.currentTarget) {
        return;
    };

    ev.target.closest('.grid-item').lastElementChild.classList.add('covered-grid-item-hover');
});

grid.addEventListener("mouseout", (ev) => {
    if (ev.target === ev.currentTarget) {
        return;
    };

    ev.target.closest('.grid-item').lastElementChild.classList.remove('covered-grid-item-hover');
});

const $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: 1,
    });
});

const masonryImg = [
    'https://picsum.photos/290/290?v1',
    'https://picsum.photos/290/290?v2',
    'https://picsum.photos/290/290?v3',
    'https://picsum.photos/290/180?v4',
    'https://picsum.photos/290/210?v5',
    'https://picsum.photos/290/250?v6',
    'https://picsum.photos/290/290?v7',
    'https://picsum.photos/290/290?v8',
    'https://picsum.photos/290/200?v9',
    'https://picsum.photos/290/235?v10',
    'https://picsum.photos/290/145?v11',
    'https://picsum.photos/290/435?v12',
    'https://picsum.photos/290/350?v13',
    'https://picsum.photos/290/400?v14',
    'https://picsum.photos/290/145?v15',
    'https://picsum.photos/290/190?v16',
    'https://picsum.photos/290/200?v17',
    'https://picsum.photos/290/580?v18',
    'https://picsum.photos/290/435?v19',
    'https://picsum.photos/290/435?v20',
    'https://picsum.photos/290/435?v21',
    'https://picsum.photos/290/290?v22',
    'https://picsum.photos/290/290?v23',
    'https://picsum.photos/290/290?v24',
    'https://picsum.photos/290/180?v25',
    'https://picsum.photos/290/210?v26',
    'https://picsum.photos/290/250?v27',
    'https://picsum.photos/290/290?v28',
    'https://picsum.photos/290/290?v29',
    'https://picsum.photos/290/200?v30',
    'https://picsum.photos/290/235?v31',
    'https://picsum.photos/290/145?v32',
    'https://picsum.photos/290/435?v33',
    'https://picsum.photos/290/350?v34',
    'https://picsum.photos/290/400?v35',
    'https://picsum.photos/290/145?v36',
    'https://picsum.photos/290/190?v37',
    'https://picsum.photos/290/200?v38',
    'https://picsum.photos/290/580?v39',
    'https://picsum.photos/290/435?v40',
    'https://picsum.photos/290/435?v41',
    'https://picsum.photos/290/435?v42',
    'https://picsum.photos/290/435?v43',
    'https://picsum.photos/290/435?v44',
    'https://picsum.photos/290/435?v45',
    'https://picsum.photos/290/435?v46',
]

const getMasonryImgHtml = (element, index) =>
    `<div class="item-masonry sizer">
         <img src="${element}" alt="Photo-${index}">
    </div> `;

const masonryImgHtml = masonryImg.map((el, index) => getMasonryImgHtml(el, index));
const galary = document.querySelector('#galary');
galary.insertAdjacentHTML('beforeend', masonryImgHtml.slice(0, 16).join(""));

$(document).ready(function () {
    const sizer = ".sizer";
    const conteiner = $('#galary');
    conteiner.imagesLoaded(function () {
        conteiner.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
        });
    });
});

const btnBestImages = document.querySelector('.best-images');

let j = 0;
btnBestImages.addEventListener("click", (ev) => {
    j++;
    const galaryConteiner = document.querySelector('.gallery-best-images-conteiner');

    if (j === 1) {
        const galaryNew = document.createElement('div');
        galaryNew.id = "galary-new"
        galaryConteiner.append(galaryNew);
        galaryConteiner.append(galaryNew.insertAdjacentHTML('beforeend', masonryImgHtml.slice(16, 31).join("")));

        $(document).ready(function () {
            const sizer = ".sizer";
            const conteiner = $('#galary-new');
            conteiner.imagesLoaded(function () {
                conteiner.masonry({
                    itemSelector: '.item-masonry',
                    columnWidth: sizer,
                });
            });
        });
    };

    if (j === 2) {
        const galaryNew = document.createElement('div');
        galaryNew.id = "galary-new-2"
        galaryConteiner.append(galaryNew);
        galaryConteiner.append(galaryNew.insertAdjacentHTML('beforeend', masonryImgHtml.slice(31, 46).join("")));

        $(document).ready(function () {
            const sizer = ".sizer";
            const conteiner = $('#galary-new-2');
            conteiner.imagesLoaded(function () {
                conteiner.masonry({
                    itemSelector: '.item-masonry',
                    columnWidth: sizer,
                });
            });
        });

        btnBestImages.style.display = "none";
    };

});




