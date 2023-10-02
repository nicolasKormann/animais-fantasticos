export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", handleMouseOver);
  });

  function handleMouseOver(event) {
    const tooltipBox = createTooltipBox(this, event);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  function createTooltipBox(element, event) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
}
