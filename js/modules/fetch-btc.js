export default function initFetBtc() {
  async function fetchBtc() {
    const url = "https://blockchain.info/ticker";

    try {
      const btcResponse = await fetch(url);
      const btcJson = await btcResponse.json();

      const valueBuyBtc = btcJson.BRL.buy;

      showBtcInBRL(valueBuyBtc);
    } catch (error) {
      console.log(error);
    }
  }

  function showBtcInBRL(valueBuyBtc) {
    const inputBTC = document.querySelector("#btc");
    const inputBtcValue = inputBTC.value;
    const spanBtcPrecoBrl = document.querySelector(".btc-preco-brl");

    const convertion = convertBtcToBRL(valueBuyBtc, inputBtcValue);

    spanBtcPrecoBrl.innerText = convertion;

    inputBTC.addEventListener("change", (event) => {
      const inputBTC = Number(event.target.value);

      const convertion = convertBtcToBRL(valueBuyBtc, inputBTC);

      spanBtcPrecoBrl.innerText = convertion;
    });
  }

  function convertBtcToBRL(valueBuyBtc, inputBtcValue) {
    const convertion = (inputBtcValue * valueBuyBtc).toLocaleString("BRL", {
      style: "currency",
      currency: "BRL",
    });
    return convertion;
  }

  fetchBtc();
}
