import {initStopAnimateOnResize} from "./components/initStopAnimateOnResize";
import {initMobileMenu} from "./components/initMobileMenu";

document.addEventListener('DOMContentLoaded', handleOnLoadPage);

function handleOnLoadPage() {
  initStopAnimateOnResize();
  initMobileMenu();
}