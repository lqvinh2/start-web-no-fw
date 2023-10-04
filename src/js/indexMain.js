import { constBase } from "./constBase";


export const indexMain = () => {
  console.log(`index-main.html`);
  state.countVisitPage[constBase.state.countVisit.index] += 1

  const runSlideTop = () => {
    const swiper = new Swiper(".sw-slide-run-1", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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

    var swiper2 = new Swiper(".sw-slide-run-2", {
      direction: "vertical",
      loop: true,
      slidesPerView: 1.3,
      spaceBetween: 5,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



  }

  runSlideTop();
}







