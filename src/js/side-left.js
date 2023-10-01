import { loadContentPartAsync } from './commons';
import { constBase } from './constBase';

export const sideLeft = () => {
  const loadAllCategorySide = () => {
    let setInt = setInterval(async () => {
      const allC = document.querySelector('#all-cate-side-left');

      if (allC) {
        clearInterval(setInt);

        await loadContentPartAsync(
          constBase.parts.allCateSideLeft,
          constBase.partsHTML.allCate
        );
      }
    }, 200);
  };

  loadAllCategorySide();
};
