const Menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

Menu.addEventListener('click' , () => toggleMenu())

function toggleMenu() {
  Menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo'); 
}
galerySwitch()
window.addEventListener("resize", () => galerySwitch())

function galerySwitch() {
  if (window.matchMedia("(max-width: 785px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
