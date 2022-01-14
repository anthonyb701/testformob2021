// const theCard1 = document.querySelector('.thecard1')
// const theCard2 = document.querySelector('.thecard2')


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
const imgToToggle = document.querySelector('.dots3')
const crossToToggle = document.querySelector('.crossAdditionalInfo')
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 4,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

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

document.addEventListener('DOMContentLoaded', function (event) {

  // document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
  // document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

  document.querySelector('.thecard1').onclick = function () { 
    if(!imgToToggle.classList.contains('clickedBtn')){
      document.querySelector('.thecard1').classList.toggle('do-flip')
    } 
    // document.querySelector('.thecard1').classList.toggle('do-flip')
  }

  document.querySelector('.thecard2').onclick = function () {
    document.querySelector('.thecard2').classList.toggle('do-flip')
  }

  document.querySelector('.thecard3').onclick = function () {
    document.querySelector('.thecard3').classList.toggle('do-flip')
  }

  document.querySelector('.thecard4').onclick = function () {
    document.querySelector('.thecard4').classList.toggle('do-flip')
  }

  // document.querySelector('.thecard3').onclick = function() {
  // document.querySelector('.thecard3').classList.toggle('do-flip') }

  // document.getElementById('flip-card').onclick = function() {
  // document.getElementById('flip-card').classList.toggle('do-flip');
  // };

});

const el = document.querySelectorAll('.swiper-slide')
const body = document.querySelector('body')
el1 = el[0]
el2 = el[1]
el3 = el[2]
el4= el[3]


// window.setInterval(function () {

//       if (el1.classList.contains('swiper-slide-active') && !el2.classList.contains('swiper-slide-active') ) {
//         if (!body.classList.contains('animatedBySwiperBack')) {
//           body.classList.remove('animatedBySwiper')
//           body.classList.remove('animatedBySwiperPodatkivBack')
//           body.classList.add('animatedBySwiperBack')
//         }
//       } else if (!el1.classList.contains('swiper-slide-active') && el2.classList.contains('swiper-slide-active')) {
//         body.classList.remove('animatedBySwiperBack')
//         body.classList.remove('animatedBySwiperPodatkivBack')
//         body.classList.add('animatedBySwiper')
//         } else if(el3.classList.contains('swiper-slide-active')) {
//           body.classList.remove('animatedBySwiperBack')
//           body.classList.remove('animatedBySwiper')
//           body.classList.remove('animatedBySwiperPodatkivBack')
//           body.classList.add('animatedBySwiperPodatkiv')
//         } 
//         if(!el1.classList.contains('swiper-slide-active') && el2.classList.contains('swiper-slide-active') && body.classList.contains('animatedBySwiperPodatkiv')) {
//           body.classList.remove('animatedBySwiperBack')
//           body.classList.remove('animatedBySwiper')
//           body.classList.remove('animatedBySwiperPodatkiv')
//           body.classList.add('animatedBySwiperPodatkivBack')
//         }
//       } 

//       , 100);

window.setInterval(function () {

      if (el1.classList.contains('swiper-slide-active') && !el2.classList.contains('swiper-slide-active') ) {
        if (!body.classList.contains('animatedBySwiperBack')) {
          body.classList.remove('animatedBySwiper')
          body.classList.remove('animatedBySwiperPodatkivBack')
          body.classList.remove('animatedBySwiperCovid')
          body.classList.remove('animatedBySwiperCovidBack')
          body.classList.remove('checkStatusForEl3')
          body.classList.add('animatedBySwiperBack')
          console.log('from el1')
        }
      } else if (!el1.classList.contains('swiper-slide-active') && el2.classList.contains('swiper-slide-active')) {
          body.classList.remove('animatedBySwiperBack')
          body.classList.remove('animatedBySwiperPodatkivBack')
          body.classList.remove('animatedBySwiperCovidBack')
          body.classList.remove('animatedBySwiperCovid')
          body.classList.remove('animatedBySwiperPodatkiv')
          body.classList.remove('checkStatusForEl3')
          body.classList.add('animatedBySwiper')
          console.log('from el2')
          } else if(el3.classList.contains('swiper-slide-active') && !el4.classList.contains('swiper-slide-active') && !body.classList.contains('checkStatusForEl3')) {
            body.classList.remove('animatedBySwiperBack')
            body.classList.remove('animatedBySwiper')
            body.classList.remove('animatedBySwiperPodatkivBack')
            body.classList.remove('animatedBySwiperCovid')
            body.classList.remove('animatedBySwiperCovidBack')
            body.classList.add('animatedBySwiperPodatkiv')
            console.log('from el3')
          } else if(el4.classList.contains('swiper-slide-active')) {
            body.classList.remove('animatedBySwiperBack')
            body.classList.remove('animatedBySwiper')
            body.classList.remove('animatedBySwiperPodatkiv')
            body.classList.remove('animatedBySwiperPodatkivBack')
            body.classList.remove('animatedBySwiperCovidBack')
            body.classList.add('animatedBySwiperCovid')
            body.classList.add('checkStatusForEl3')
            console.log('from el4')
          }
          if(!el1.classList.contains('swiper-slide-active') && !el2.classList.contains('swiper-slide-active') && el3.classList.contains('swiper-slide-active') && body.classList.contains('animatedBySwiperCovid')) {
            body.classList.remove('animatedBySwiperBack')
            body.classList.remove('animatedBySwiper')
            body.classList.remove('animatedBySwiperPodatkiv')
            body.classList.remove('animatedBySwiperPodatkivBack')
            body.classList.remove('animatedBySwiperCovid')
            body.classList.add('animatedBySwiperCovidBack')
            console.log('from el default(3)')
          }
        } 
  
        , 100);


let date = new Date()
let date1 = new Date().toLocaleDateString('uk-UA')


const day = date.getDate()
const year = date.getFullYear()
const getHours = date.getHours()
let getMinutes = date.getMinutes()
const month = date.getMonth() + 1;
getMinutes = getMinutes.toString()
let monthName;
switch (month) {
  case(1): {monthName = 'січня'; break};
  case(2): {monthName = 'лютого' ; break};
  case(3): {monthName = 'березня'; break};
  case(4): {monthName = 'квітня'; break};
  case(5): {monthName = 'травня'; break};
  case(6): {monthName = 'червня'; break};
  case(7): {monthName = 'липня'; break};
  case(8): {monthName = 'серпня'; break};
  case(9): {monthName = 'вересня'; break};
  case(10): {monthName = 'жовтня'; break};
  case(11): {monthName = 'листопада'; break};
  case(12): {monthName = 'грудня'; break};
}

if(!getMinutes[1]){
  getMinutes = `0${getMinutes}`
}

// console.log(date.getHours())
// console.log(date.getMinutes())

document.querySelector('.dateUpdated').innerText = `${day} ${monthName} ${year}`
document.querySelector('.timeUpdated').innerText = `${getHours}:${getMinutes}`
// const year = date.slice()

const container = document.querySelector('.mainMainContainer')

const popup = document.querySelector('.popup1')
// imgToToggle.onclick(console.log('hey'))
// imgToToggle.addEventListener('click', console.log('hey'))
function blur(){
  container.classList.toggle('activeBlur')
  popup.classList.add('popedUp')

}

function smthToDo () {
  imgToToggle.classList.add('clickedBtn')
  blur()
}

function unBlur() {
  imgToToggle.classList.remove('clickedBtn')
  popup.classList.remove('popedUp')
  container.classList.toggle('activeBlur') 
}

let arr = []
function closePopup(){
  if(imgToToggle.classList.contains('clickedBtn') && container.classList.contains('activeBlur') && popup.classList.contains('popedUp')) {
    setTimeout(() => {
      if(!arr.length < 1){
        unBlur()
        arr = []
      } else {
        arr.push('1')
      }
      
    }, 1)
    
  }
}

const additionalPopup = document.querySelector('.infoPopup')

function openAdditionalPopup() {
  additionalPopup.classList.add('activeInfoPopup')
  setTimeout(() => {
    unBlur()
    
  }, 500)
  setTimeout(() => {
    body.style.backgroundColor = '#0f2a31ad'
  }, 200)
  
  
}

function closeAdditionalPopup() {
  body.style.backgroundColor = '#adc6e5'
  additionalPopup.classList.remove('activeInfoPopup')
  setTimeout(() => {
    body.style.backgroundColor = ''
  }, 300)

}

// window.onload = function() {
//   imgToToggle.onclick(console.log('hey'))
// }

// hello
