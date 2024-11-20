document.getElementById("radio1").checked = true;
let count = 1;

setInterval( function(){
    nextSlide();
}, 5000);

function nextSlide() {
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


/* ========= swiper ======== */

const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 200,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is >= 640px
    1366: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

}); 

/* função para menu mobile*/

const MenuBtnOpen = document.querySelector('.nav-mobile-btn-open');
const MenuMobile = document.querySelector('.nav-mobile');
const MenuBtnClose = document.querySelector('.nav-mobile-btn-close');

MenuBtnOpen.onclick = function() {
  MenuMobile.classList.add('nav-menu-opened')
}

MenuBtnClose.onclick = function() {
  MenuMobile.classList.remove('nav-menu-opened')
}



