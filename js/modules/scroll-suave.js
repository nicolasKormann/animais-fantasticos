export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const hashItem = this.hash;
    const section = document.querySelector(hashItem);

    // section.scrollIntoView({
    //   block: "start",
    //   behavior: "smooth",
    // });

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}