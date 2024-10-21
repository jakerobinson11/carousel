import { dataSlider } from "./modules/dataSlider.js";
import { initImg } from "./modules/initImg.js";
import { initNavigation } from "./modules/initNavigation.js";

globalThis.carousel = document.querySelector("#carousel");
globalThis.dataSlider = dataSlider;
globalThis.currentImg = 0;


initImg();
initNavigation();
