// 1.1 (2p)
// Skriv klart funktionen addIsFast(car) så att den returnerar ett nytt objekt
// med alla egenskaper från car, plus en ny egenskap isFast som är true om
// speed är över 100, annars false.

const car = {
  name: "Volvo",
  speed: 120,
};

function addIsFast(car) {
  // Din kod här:
   return {... car, isFast: car.speed > 100} 
  };




// 1.2 (2p) Skapa tre variabler name, speed och isFast genom
// destructuring av objektet som returneras från addIsFast.

// Din kod här:
const {name, speed, isFast} = addIsFast(car);


console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }
console.log(name, speed, isFast); // Ska logga "Volvo", 120, true