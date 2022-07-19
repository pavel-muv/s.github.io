let modalBtn = document.querySelector('.hero__play');
let modalClose = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let modalVideo = document.querySelector('.modal-video')


modalBtn.addEventListener('click', function(){
    modal.classList.add('active');
    body.classList.add('scroll');

    modalVideo.innerHTML = '<iframe width="100%" height="100%" id="youtube" src="https://www.youtube.com/embed/mGi4eiVx7uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
})
modalClose.addEventListener('click', function(){
    modal.classList.remove('active');
    body.classList.remove('scroll');

    modalVideo.innerHTML = '';
})


var swiper = new Swiper(".swiper", {
    autoHeight: true,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}