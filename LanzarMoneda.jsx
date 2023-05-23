function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0; // Contador de "heads"
    let attempts = 0; // Contador de intentos

    const flipCoin = () => {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0; // Reiniciar el contador si no se obtiene "heads"
      }

      if (headsCount === 5) {
        resolve(`It took ${attempts} tries to flip five "heads"`); // Resolución exitosa de la promesa
      } else {
        if (attempts >= 100) {
          // Limitar la cantidad de intentos para evitar bucles infinitos
          reject("Unable to flip five \"heads\" within 100 attempts"); // Rechazo de la promesa con un mensaje de error
        } else {
          flipCoin(); // Llamar recursivamente a flipCoin para seguir lanzando la moneda
        }
      }
    };

    flipCoin(); // Llamada inicial a flipCoin para iniciar el proceso de lanzamiento de la moneda
  });
}

fiveHeads()
  .then((res) => console.log(res)) // Manejo del caso de éxito
  .catch((err) => console.log(err)); // Manejo del caso de error
console.log("When does this run now?"); // Se muestra por consola inmediatamente después de la llamada a fiveHeads

