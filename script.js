const navlinks = document.querySelector(".navmenu .navlink");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // toogle mobile menu visibility
  document.body.classList.toggle("show-m0bile-menu")
});
//  Close menu when close button is click
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navlinks.forEach(link => {
  link.addEventListener("click", () =>menuOpenButton.click());
});

const swiper = new Swiper('.slider-wraper', {
  speaceBetween: 25,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBllutes: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responding break poink

  breakpoints: {
    0: {
      slidePerView: 1
    },
    786: {
      slidePerView: 2
    },
    1024: {
      slidePerView: 3
    }
  }



});