export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      console.log(total);
      let start = 0;
      const incremento = Math.floor(total / 100);
      console.log(incremento);
      const timer = setInterval(() => {
        numero.innerText = start;
        start += incremento;
        if (start > total) {
          start = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());

      console.log(start);

      if (start > total) {
        start = total;
        clearInterval(timer);
      }
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
