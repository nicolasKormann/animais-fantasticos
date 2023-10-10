export default class initModal {
  constructor(abrirModal, fecharModal, modalContainer) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.modalContainer = document.querySelector(modalContainer);
  }

  handleClickShowModal(event) {
    event.preventDefault();
    this.modalContainer.classList.add("ativo");
    document.body.classList.add("ativo");
  }

  handleCkickCloseModal() {
    this.modalContainer.classList.remove("ativo");
    document.body.classList.remove("ativo");
  }

  clickOutModal(event) {
    event.target === this.modalContainer ? this.handleCkickCloseModal() : "";
    document.body.classList.remove("ativo");
  }

  init() {
    if (this.modalContainer && this.abrirModal) {
      this.abrirModal.addEventListener("click", () =>
        this.handleClickShowModal(event)
      );
    }
  }

  exitModal() {
    if (this.modalContainer && this.fecharModal) {
      this.fecharModal.addEventListener("click", () =>
        this.handleCkickCloseModal()
      );
      this.modalContainer.addEventListener("click", () =>
        this.clickOutModal(event)
      );
    }
  }
}
