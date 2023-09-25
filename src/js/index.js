
import './base.js'
import { constBase } from './constBase.js';
import { loadContentPartAsync } from './commons';


const startPage = async () => {
  await loadContentPartAsync(constBase.parts.header, constBase.partsHTML.header)
  await loadContentPartAsync(constBase.parts.sideLeft, constBase.partsHTML.sideLeft)
  await loadContentPartAsync(constBase.parts.sideRight, constBase.partsHTML.sideRight)
  await loadContentPartAsync(constBase.parts.footer, constBase.partsHTML.footer)
}

startPage()


