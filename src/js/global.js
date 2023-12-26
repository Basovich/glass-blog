import {initStopAnimateOnResize} from "./components/initStopAnimateOnResize";
import {initMobileMenu} from "./components/initMobileMenu";
import {initScrollTop} from "./components/initScrollTop";

document.addEventListener('DOMContentLoaded', handleOnLoadPage);

function handleOnLoadPage() {
  initStopAnimateOnResize();
  initMobileMenu();
  initScrollTop();
}