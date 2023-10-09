import outSideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');

  if (menuButton) {
    menuButton.addEventListener("click", openMenu);
  }

  function openMenu() {
    menuList.classList.toggle("ativo");
    menuButton.classList.toggle("ativo");
    outSideClick(menuList, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }
}
