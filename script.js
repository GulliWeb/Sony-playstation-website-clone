const videoContainer = document.getElementById('video')
const imgContent = document.querySelector('.top-img-content')
const gtaImg = document.getElementById('gtaImg')
const buttonTrailer = document.getElementById('btn-trailer')
// Aggiunta video trailer dinamico sull'hover dell'img GTA VI

buttonTrailer.addEventListener('click', () =>{
    gtaImg.classList.add('hidden') 
    iframe.classList.remove('hidden')
    iframe.src = "https://www.youtube.com/embed/QdBZY2fkU-0?si=C72q8dFt2w-vPhUX&autoplay=1";
    iframe.classList.add('active')
})

// Creo il tag per contenere il video e la source 
let iframe = document.createElement('iframe')
iframe.width = "560";
iframe.height = "315";
iframe.src = "https://www.youtube.com/embed/QdBZY2fkU-0?si=C72q8dFt2w-vPhUX";
iframe.title = "YouTube video player";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.referrerPolicy = "strict-origin-when-cross-origin";
iframe.allowFullscreen = true; 

// Aggiungi il listener per l'evento 'mouseout'
videoContainer.addEventListener('mouseout', () => {
    gtaImg.classList.remove('hidden'); 
    iframe.classList.add('hidden')
    iframe.src = ""
    iframe.classList.remove('active')
});
videoContainer.appendChild(iframe)

// CAROUSEL
const carousel = document.getElementById('carousel')
const card = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6']
const carouselSources = ['https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-keyart-01-en-23may24?$1200px$', 'https://gmedia.playstation.com/is/image/SIEPDC/star-wars-outlaws-keyart-01-en-17jul23?$1200px$', 'https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-6-open-beta-keyart-01-en-28aug24?$1200px$', 'https://gmedia.playstation.com/is/image/SIEPDC/indiana-jones-and-the-great-circle-keyart-01-en-21aug24?$1200px$', 'https://gmedia.playstation.com/is/image/SIEPDC/fc-25-keyart-01-04jul24$en?$1200px$', 'https://gmedia.playstation.com/is/image/SIEPDC/valorant-keyart-01-en-31may24?$1200px$']
let carouselImg = [] 

// Creo dinamicamente le card
card.forEach((item, index) => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('thumb-card', item)
    carousel.style.gap = ('12px')
    carousel.appendChild(cardContainer)
    // Creo figure
    const carouselFigure = document.createElement('figure')
    carouselFigure.style.borderRadius = ('12px')
    cardContainer.appendChild(carouselFigure)

    // Creo Img
    carouselImg = document.createElement('img')
    carouselImg.src = (carouselSources[index])
    carouselFigure.appendChild(carouselImg)
});
