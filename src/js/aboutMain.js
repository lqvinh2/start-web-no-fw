import { constBase } from "./constBase";


export const aboutMain = () => {
  console.log(`aboutMain.js`);
  state.countVisitPage[constBase.state.countVisit.about] += 1

  console.log(state.countVisitPage)
}




