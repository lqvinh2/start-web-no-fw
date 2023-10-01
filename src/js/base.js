// jquery
//import $ from 'jquery';

// // swiper
import '../scss/swiperJS/swiper-10.3.0-bundle.min.css';

// font-awesome
import '../scss/fontawesome-free-6.4.2/css/all.min.css';

// loading-bar
import '../scss/loading-bar/loading-bar.min.css';

// local
import '../js/state';
import '../js/routes';
import '../js/mainParts';
import '../scss/style.scss';

import '../js/header'

import { constBase } from './constBase';
import { generateRandomID, getBrowserSize, loadContentPartAsync, showBackDrop } from './commons';

// let interval_1 = undefined
// let interval_resize = undefined
// interval_1 = setInterval(() => {
//   const hP = $('#' + constBase.parts.header)
//   const fP = $('#' + constBase.parts.footer)

//   if (hP && fP) {
//     clearInterval(interval_1)
//     window.addEventListener("resize", (event) => {
//       if (interval_resize) {
//         clearInterval(interval_resize)
//       }
//       interval_resize = setInterval(() => {
//         const brSize = getBrowserSize()
//         const height_side_left = brSize.height - hP.outerHeight() - fP.outerHeight()
//         $('#' + constBase.parts.sideLeft).height(`${height_side_left}px`);
//       }, 200);

//     });
//   }
// }, 300);

let setIntervalwrapperLeft = setInterval(() => {
  const ele = document.getElementById('wrapper-side-left');
  if (!ele) {
    return;
  }
  clearInterval(setIntervalwrapperLeft);

  window.addEventListener('scroll', function () {
    const stickyElement = document.getElementById('wrapper-side-left');
    const main = document.querySelector('main');

    const stickyPosition = main.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= stickyPosition) {
      stickyElement.style.position = 'sticky';
      stickyElement.style.top = '10px';
      stickyElement.style.height = '96vh';
    } else {
      stickyElement.style.position = 'static';
    }
  });
}, 300);





