import $ from 'jquery';

import '../js/state'
import '../js/routes'
import '../js/mainParts'

import '../scss/style.scss';
import { constBase } from './constBase';
import { getBrowserSize } from './commons';



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

window.addEventListener('scroll', function() {
  const stickyElement = document.getElementById('wrapper-side-left');
  const main = document.querySelector('main');

  const stickyPosition = main.offsetTop;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= stickyPosition) {
    stickyElement.style.position = 'sticky';
    stickyElement.style.top = '1px';
    stickyElement.style.height = '95vh';
  } else {
    // Khi không scroll đến vị trí phù hợp, áp dụng CSS khác
    stickyElement.style.position = 'static';
  }
});



