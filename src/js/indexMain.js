import { constBase } from "./constBase";


export const indexMain = () => {
  console.log(`index-main.html`);
  state.countVisitPage[constBase.state.countVisit.index] += 1

  const runSlideTop = () => {
    var swiper = new Swiper(".top-slide", {
      slidesPerView: 1,
      //effect: "flip",
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
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

  runSlideTop();
}







