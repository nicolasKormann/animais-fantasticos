export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const valor = Number(numero.innerText);
      const incremento = Math.floor(valor / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > valor) {
          clearInterval(timer);
          numero.innerText = valor;
        }
      }, 20);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }

  const observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
