import ScrollSmooth from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/animationScroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import { initModal, exitModal } from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/drodown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetBtc from "./modules/fetch-btc.js";

const scrollSmooth = new ScrollSmooth("[data-menu='suave'] a[href^='#']");
scrollSmooth.init()

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
exitModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetBtc();
