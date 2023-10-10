export default class Accordion {
  constructor(list) {
    this.accordionQuestions = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  handleClickShowResponse(question) {
    question.classList.toggle(this.activeClass);
    question.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionQuestions.forEach((question) => {
      question.addEventListener("click", () =>
        this.handleClickShowResponse(question)
      );
    });
  }

  init() {
    if (this.accordionQuestions.length) {
      this.handleClickShowResponse(this.accordionQuestions[0]);
      this.addAccordionEvent();
    }
  }
}
