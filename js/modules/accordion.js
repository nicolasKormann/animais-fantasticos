export default function initAccordion() {
  const accordionQuestions = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  if (accordionQuestions.length) {
    accordionQuestions[0].classList.add("ativo");
    accordionQuestions[0].nextElementSibling.classList.add("ativo");

    accordionQuestions.forEach((question) => {
      question.addEventListener("click", handleClickShowResponse);
    });

    function handleClickShowResponse() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
  }
}
