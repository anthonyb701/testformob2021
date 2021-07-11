const theCard1 = document.querySelector('.thecard1')
const theCard2 = document.querySelector('.thecard2')


theCard1.addEventListener('click', () => {
    theCard1.classList.toggle('thecardHover')
    theCard1.classList.add('thecardDarkness')
    setTimeout(() => {theCard1.classList.remove('thecardDarkness')}, 100)
})
theCard2.addEventListener('click', () => {
    theCard2.classList.toggle('thecardHover')
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: -15,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });