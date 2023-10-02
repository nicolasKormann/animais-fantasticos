export default function outSideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutSideClick);
    element.setAttribute(outside, "");
  }

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      html.removeEventListener("click", handleOutSideClick);
      callback();
    }
  }
}