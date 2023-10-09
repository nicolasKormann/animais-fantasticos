import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDown = document.querySelector("[data-dropdown]");

  ["touchstart", "click"].forEach((userEvent) => {
    dropDown.addEventListener(userEvent, handleClick);
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle("ativo");

    outSideClick(this, () => {
      this.classList.remove("ativo");
    });
  }
}
