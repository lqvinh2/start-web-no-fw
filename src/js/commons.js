import $, { contains } from 'jquery';
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
  let cnt = 0

  const bb = constBase.storage.key.beforeUrl;

  const beforeUrl = localStorage.getItem(bb);
  if (beforeUrl) {
    const befUrl = JSON.parse(beforeUrl);
    countBefUrlParam = befUrl.countParam;
  }

  cnt = countCurUrlParam - countBefUrlParam
  if (cnt < 0) {
    cnt = countBefUrlParam
  }else {
    cnt = countCurUrlParam
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

export { loadContentPage, loadContentPartAsync };
