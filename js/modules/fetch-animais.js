import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais() {
    const url = "./animais.json";

    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.map((animal) => {
        const especie = animal.especie;
        const total = animal.total;
        createAnimal(especie, total);
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  function createAnimal(especie, total) {
    const numerosGrid = document.querySelector(".numeros-grid");
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}<h3> <span data-numero>${total}</span>`;

    numerosGrid.appendChild(div);
  }

  fetchAnimais();
}
