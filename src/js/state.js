import { constBase } from "./constBase"

// init state
const stateModel = {
  countVisitPage : {}
}
// declare state for global use
window.state = stateModel

// init value
for (const key in constBase.state.countVisit) {
  window.state.countVisitPage[constBase.state.countVisit[key]] = 0
}






