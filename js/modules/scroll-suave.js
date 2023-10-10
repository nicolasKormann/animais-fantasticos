export default class ScrollSmooth {
  constructor(links) {
    this.linksInternos = document.querySelectorAll(links);
  }

  scrollToSection(event) {
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

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
