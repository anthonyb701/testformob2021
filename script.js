const theCard1 = document.querySelector('.thecard1')
const theCard2 = document.querySelector('.thecard2')


// theCard1.addEventListener('click', () => {
//   if(!theCard1.classList.contains('backAction') || !theCard1.classList.contains('frontAction')){
//     theCard1.classList.add('frontAction')
//   }

//     // theCard1.classList.toggle('thecardHover')
//     // theCard1.classList.add('thecardDarkness')
//     // setTimeout(() => {theCard1.classList.remove('thecardDarkness')}, 100)
// })
// theCard2.addEventListener('click', () => {
//     theCard2.classList.toggle('thecardHover')
// })

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: -46,
  
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

  document.addEventListener('DOMContentLoaded', function(event) {

    // document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    // document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
  
    document.querySelector('.thecard1').onclick = function() {
    document.querySelector('.thecard1').classList.toggle('do-flip') }

    document.querySelector('.thecard2').onclick = function() {
    document.querySelector('.thecard2').classList.toggle('do-flip') }

    document.querySelector('.thecard3').onclick = function() {
    document.querySelector('.thecard3').classList.toggle('do-flip') }
  
    // document.getElementById('flip-card').onclick = function() {
    // document.getElementById('flip-card').classList.toggle('do-flip');
    // };
  
  });