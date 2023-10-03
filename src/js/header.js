import {
  generateRandomID,
  loadContentPartAsync,
  showBackDrop,
} from './commons';
import { constBase } from './constBase';

// CREATE event click button search
let setIntervalBtnSearchHeader = setInterval(async () => {
  const btn = document.querySelector('.search-btn');
  if (btn) {
    clearInterval(setIntervalBtnSearchHeader);

    await loadContentPartAsync(
      constBase.parts.backDrop,
      constBase.partsHTML.backDrop
    );

    btn.id = 'ufhg0b-s-' + generateRandomID();

    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      showBackDrop();
    });
  }
}, 200);

// LOAD All Category for header
const loadAllCategorySide = () => {
  let setInt = setInterval(async () => {
    const btn = document.querySelector('.btn-all-cate');
    const allC = document.querySelector('#all-cate-header');

    if (btn && allC) {
      clearInterval(setInt);

      const hBtn = $(btn).innerHeight();

      $(allC).css('top', `${hBtn + 3}px`);
      await loadContentPartAsync(
        constBase.parts.allCateHeader,
        constBase.partsHTML.allCate
      );
    }
  }, 200);
};

loadAllCategorySide();
