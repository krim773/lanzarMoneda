function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;

    const flipCoin = () => {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }

      if (headsCount === 5) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
      } else {
        if (attempts >= 100) { // Limitar la cantidad de intentos para evitar bucles infinitos
          reject("Unable to flip five \"heads\" within 100 attempts");
        } else {
          flipCoin();
        }
      }
    };

    flipCoin();
  });
}

fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");
