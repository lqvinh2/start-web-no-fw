import { generateRandomID, runStarRatingLocal } from "./commons";
import { constBase } from "./constBase";

import '../js/swiperJS/swiper-10.3.0-bundle.min.js'




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



  getAllProduct_temp();
  getAllProduct_temp();
  getAllProduct_temp();
}

const productTemplate = (startRatingID, imgLink, imgALT, productNAME, price, priceDiscount) => {
  return `
  <div class="product-item">
  <div class="product-item-content">
    <div class="img-container">
      <img alt="${imgALT}" src="${imgLink}">
    </div>
    <div class="product-item-name">
      ${productNAME}
    </div>
    <div class="star-rating">
      <div class="star-rating-container">
        <div id="${startRatingID}" class="star-rating-content">
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
        </div>
      </div>
    </div>

    <div class="product-item-price">
      <div class="product-price">${price}</div>
      <div class="product-price-discount">${priceDiscount}</div>
    </div>
  </div>
</div>
  `
}

const getAllProduct_temp = () => {
  const classParent = '.product-list'

  for (let index = 0; index < 12; index++) {

    const idRandom = generateRandomID();
    const idStarRating =    'startRating-' + idRandom
    const proName = `product-name-${index}`

    // param productTemplate() : startRatingID, imgLink, imgALT, productNAME, price, priceDiscount
    const proHTML = productTemplate(
      idStarRating,

      `/assets/images/web-product/p${index + 1}.jpg`,
      proName,
      proName,
      123,
      999
    )
    $(classParent).append(proHTML)

    runStarRatingLocal(idStarRating)
  }



}














