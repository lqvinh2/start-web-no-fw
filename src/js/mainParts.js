import { aboutMain } from "./aboutMain";
import { contactIDEditMain } from "./contact-id-edit-main";
import { contactIDMain } from "./contact-id-main";
import { contactMain } from "./contactMain";
import { indexMain } from "./indexMain";
import { sideLeft } from "./side-left";
import { sideRight } from "./side-right";

window.startAboutMain = () => {
  aboutMain();
}

window.startContactMain = () => {
  contactMain();
}

window.startIndexMain = () => {
  indexMain();
}

window.startSideLeft = () => {
  //sideLeft();
}

window.startSideRight = () => {
  //sideRight();
}

window.startContactIDMain = () => {
  contactIDMain();
}

window.startContactIDEditMain = () => {
  contactIDEditMain();
}

