import page from 'page';
import { constBase } from './constBase';
import { loadContentPage, loadContentPartAsync } from './commons';

page('/', async function () {
  await loadContentPartAsync(constBase.parts.main, constBase.partsHTML.indexMain)
});

page('/about', async function () {
  await loadContentPartAsync(constBase.parts.main, constBase.partsHTML.aboutMain)
});

page('/contact', async function () {
  await loadContentPartAsync(constBase.parts.main, constBase.partsHTML.contactMain)
});

page.start();
