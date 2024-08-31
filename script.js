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