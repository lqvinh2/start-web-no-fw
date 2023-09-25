import page from 'page';
import { constBase } from './constBase';
import { loadContentPage, loadContentPartAsync } from './commons';

page('/', async (ctx, next) => {
  await loadContentPartAsync(constBase.parts.sideMain, constBase.partsHTML.indexMain, ctx, next)
});

page('/about', async (ctx, next) => {
  await loadContentPartAsync(constBase.parts.sideMain, constBase.partsHTML.aboutMain, ctx, next)
});

page('/contact', async (ctx, next) => {
  await loadContentPartAsync(constBase.parts.sideMain, constBase.partsHTML.contactMain, ctx, next)
});

page('/contact/:id', async (ctx, next) => {
  await loadContentPartAsync(constBase.parts.sideMain, constBase.partsHTML.contactIDMain, ctx, next)
});

page('/contact/:id/edit', async (ctx, next) => {
  await loadContentPartAsync(constBase.parts.sideMain, constBase.partsHTML.contactIDEditMain, ctx, next)
});

page.start();
