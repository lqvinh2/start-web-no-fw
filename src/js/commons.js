import { constBase } from './constBase';

const loadContentPage = (page) => {
  const content = document.getElementById('content');
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      content.innerHTML = data;
    })
    .catch((error) => console.error(error));
};
const loadContentPartAsync = async (partId, partHTML, ctx, next) => {
  let countBefUrlParam = 0;
  let countCurUrlParam = 0;
  let cnt = 0;

  const bb = constBase.storage.key.beforeUrl;

  const beforeUrl = localStorage.getItem(bb);
  if (beforeUrl) {
    const befUrl = JSON.parse(beforeUrl);
    countBefUrlParam = befUrl.countParam;
  }

  cnt = countCurUrlParam - countBefUrlParam;
  if (cnt < 0) {
    cnt = countBefUrlParam;
  } else {
    cnt = countCurUrlParam;
  }

  if (ctx) {
    countCurUrlParam = ctx.path.split('/').length - 2;
    const jsonObj = {
      url: ctx.path,
      countParam: countCurUrlParam,
    };
    localStorage.setItem(bb, JSON.stringify(jsonObj));
  }

  const content = document.getElementById(partId);

  try {
    let startPath = '';
    for (let index = 0; index < cnt; index++) {
      startPath += '../';
    }

    const response = await fetch(startPath + partHTML);
    if (!response.ok) {
      console.error(`response is NOT ok`);
    }
    const data = await response.text();
    content.innerHTML = '';
    $('#' + partId).append(data);
  } catch (error) {
    console.error(error);
  }
};

const getBrowserSize = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return { width: w, height: h };
};

function generateRandomID() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < 9; i++) {
    if (i !== 0 && i % 3 === 0) {
      password += '-';
    } else {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  }

  return password;
}

const animateSlideUp = (parent) => {
  let eleBefore = undefined;
  const delayTime = parent.getAttribute('time'); // miliSecond
  const iiElements = parent.querySelectorAll('.ii');

  let arr = [...iiElements];
  eleBefore = arr[0];
  arr[0].style.display = 'block';
  let iii = 0;
  setInterval(() => {
    if (iii === arr.length - 1) {
      iii = -1;
    }
    if (eleBefore) {
      eleBefore.style.display = 'none';
    }
    const currEle = arr[++iii];
    eleBefore = currEle;
    currEle.style.display = 'block';
  }, delayTime);
};

// show Back Drop
// call in base.js showBackDrop
const showBackDrop = () => {
  document.getElementById(constBase.parts.backDrop).style.display = 'block';
};

// hide back drop
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
    document.getElementById(constBase.parts.backDrop).style.display = 'none';
  }
});

let intervalAnimateSlideUp = undefined;

const runAnimateSlideUp = () => {
  intervalAnimateSlideUp = setInterval(() => {
    const listSlideUp = [...document.querySelectorAll('.animate-slide-up')];
    if (listSlideUp.length <= 0) {
      return;
    }

    const listNotHasId = listSlideUp.filter((x) => !x.id);
    if (listNotHasId.length <= 0) {
      return;
    }

    // clearInterval(intervalAnimateSlideUp)

    listNotHasId.forEach((ele, idx) => {
      ele.id = 'animate-slide-up' + generateRandomID();
      animateSlideUp(ele);
    });
  }, 500);
};

runAnimateSlideUp();

const runStarRatingLocal = (id) => {
  const START_CLICKED = 'star-clicked';

  const stars = [...document.querySelectorAll(`#${id} .star`)];

  for (let i = stars.length - 1; i >= 0; i--) {
    $(stars[i]).attr('id', i + 1);
  }

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      const idClicked = parseInt($(star).attr('id'));

      // reset all star to normal
      for (let i = stars.length - 1; i >= 0; i--) {
        stars[i].classList.remove(START_CLICKED);
      }

      // set color from 1 -> clicked-star
      stars.forEach((star, index) => {
        const id = parseInt($(star).attr('id'));
        if (idClicked <= id) {
          star.classList.add(START_CLICKED);
        }
      });
    });
  });
};

export {
  loadContentPage,
  loadContentPartAsync,
  getBrowserSize,
  showBackDrop,
  generateRandomID,
  runStarRatingLocal,
};
