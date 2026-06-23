class Car {
  startEngine() {
    return "The engine turns on.";
  }
}

class ElectricCar extends Car {
  // Overriding the parent method
  startEngine() {
    return "The electric motor hums silently.";
  }
}

const myTesla = new ElectricCar();
console.log(myTesla.startEngine()); 
// Output: The electric motor hums silently.
