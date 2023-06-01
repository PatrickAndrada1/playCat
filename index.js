//  cubung, ujang, bengkok, moncis, hitam
document.addEventListener("DOMContentLoaded", function () {
  let randomButton = document.getElementById("randomButton");
  let resultContainer = document.getElementById("resultContainer");
  let cats = ["Cubung", "Ujang", "Bengkok", "Moncicis", "Hitam"];
  randomButton.addEventListener("click", function () {
    randomButton.disabled = true;
    setTimeout(function () {
      let randomNumber = Math.ceil(Math.random() * 5);
      if (randomNumber === 1) {
        randomNumber = cats[0];
      } else if (randomNumber === 2) {
        randomNumber = cats[1];
      } else if (randomNumber === 3) {
        randomNumber = cats[2];
      } else if (randomNumber === 4) {
        randomNumber = cats[3];
      } else {
        randomNumber = cats[4];
      }
      resultContainer.textContent = randomNumber;

      randomButton.disabled = false;
    }, 3000);
    gamblingEffect();
  });
  function gamblingEffect() {
    let catNames = [];
    let interval = 100;
    let iterations = 30;

    for (let i = 0; i < iterations; i++) {
      catNames.push(cats[Math.ceil(Math.random() * cats.length - 1)]);
    }
    let currentIteration = 0;
    let displayInterval = setInterval(function () {
      resultContainer.textContent = catNames[currentIteration];
      currentIteration++;

      if (currentIteration >= iterations) {
        currentIteration = 0;
      }
    }, interval);
    setTimeout(function () {
      clearInterval(displayInterval);
    }, 3000);
  }
});
