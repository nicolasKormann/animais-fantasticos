export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-scroll="slidedown"]');

  if (sections.length) {
    const windowFraction = window.innerHeight * 0.7;

    function handleScrollShow() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowFraction < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
    handleScrollShow();
    window.addEventListener("scroll", handleScrollShow);
  }
}
