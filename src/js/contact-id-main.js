import { constBase } from "./constBase";


export const contactIDMain = () => {
  console.log(`contact-id-main.js`);
  state.countVisitPage[constBase.state.countVisit.contactId] += 1


  console.log(state.countVisitPage)
}

