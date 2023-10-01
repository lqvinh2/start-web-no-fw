import {
  generateRandomID,
  loadContentPartAsync,
  showBackDrop,
} from './commons';
import { constBase } from './constBase';

let setIntervalBtnSearchHeader = setInterval(async () => {
  const btn = document.querySelector('.search-btn');
  if (btn) {
    await loadContentPartAsync(
      constBase.parts.backDrop,
      constBase.partsHTML.backDrop
    );

    clearInterval(setIntervalBtnSearchHeader);
    btn.id = 'ufhg0b-s-' + generateRandomID();
    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      showBackDrop();
    });
  }
}, 200);

const loadAllCategorySide = () => {
  let setInt = setInterval(async () => {
    const btn = document.querySelector('.btn-all-cate');
    const allC = document.querySelector('#all-cate-header');

    if (btn && allC) {
      clearInterval(setInt);

      const wBtn = $(btn).innerWidth();
      const hBtn = $(btn).innerHeight();
      $(allC).width(wBtn);
      $(allC).css('top', `${hBtn}px`);

      await loadContentPartAsync(
        constBase.parts.allCateHeader,
        constBase.partsHTML.allCate
      );

      window.addEventListener('resize', onresize);

      onresize = (event) => {
        const wBtn = $(btn).innerWidth();
        $(allC).width(wBtn);
        console.log(123);
      };
    }
  }, 200);
};

loadAllCategorySide();
