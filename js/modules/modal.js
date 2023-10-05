const modalContainer = document.querySelector('[data-modal="container"]');

export function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');

  if (modalContainer && abrirModal) {
    abrirModal.addEventListener("click", handleClickShowModal);

    function handleClickShowModal(event) {
      event.preventDefault();

      modalContainer.classList.add("ativo");
    }
  }
}

export function exitModal() {
  const fecharModal = document.querySelector('[data-modal="fechar"]');

  if (modalContainer && fecharModal) {
    fecharModal.addEventListener("click", handleCkickCloseModal);

    function handleCkickCloseModal() {
      modalContainer.classList.remove("ativo");
    }

    modalContainer.addEventListener("click", clickOutModal);

    function clickOutModal(event) {
      event.target === this ? handleCkickCloseModal() : "";
    }
  }
}
