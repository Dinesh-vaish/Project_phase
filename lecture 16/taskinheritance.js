// Parent (Super) Class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    return `${this.brand} engine is running.`;
  }
}

// Child (Sub) Class - Extends only ONE parent class
class Car extends Vehicle {
  constructor(brand, model) {
    // Calls the parent class constructor
    super(brand); 
    this.model = model;
  }

  // Method overriding while reusing parent logic
  start() {
    return `${super.start()} The ${this.model} is ready to drive!`;
  }
}

const myCar = new Car("Tesla", "Model S");
console.log(myCar.start()); 
// Output: "Tesla engine is running. The Model S is ready to drive!"








//Multiple Inhearting 


// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Mixin 1: Adds flying capabilities
const CanFly = (Base) => class extends Base {
  fly() {
    return `${this.name} is flying high!`;
  }
};

// Mixin 2: Adds swimming capabilities
const CanSwim = (Base) => class extends Base {
  swim() {
    return `${this.name} is swimming fast!`;
  }
};

// Create a class combining both behaviors
class Duck extends CanSwim(CanFly(Animal)) {
  quack() {
    return `${this.name} says quack!`;
  }
}

// Usage
const donald = new Duck('Donald');
console.log(donald.fly());   // Donald is flying high!
console.log(donald.swim());  // Donald is swimming fast!
console.log(donald.quack()); // Donald says quack!





//Multilevel Inhearting 


// Level 1: Grandparent Class
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  
  start() {
    return `The ${this.type} engine is running.`;
  }
}

// Level 2: Parent Class (inherits from Vehicle)
class Car extends Vehicle {
  constructor(type, brand) {
    // super() calls the Grandparent constructor
    super(type); 
    this.brand = brand;
  }
  
  drive() {
    return `${this.brand} is moving forward.`;
  }
}

// Level 3: Child Class (inherits from Car)
class ElectricCar extends Car {
  constructor(type, brand, batteryCapacity) {
    // super() calls the Parent constructor
    super(type, brand); 
    this.batteryCapacity = batteryCapacity;
  }
  
  charge() {
    return `Charging the ${this.brand} with ${this.batteryCapacity}kWh capacity.`;
  }
}

// Verification
const myTesla = new ElectricCar("Sedan", "Tesla", 100);

console.log(myTesla.start());  // From Vehicle: "The Sedan engine is running."
console.log(myTesla.drive());  // From Car: "Tesla is moving forward."
console.log(myTesla.charge()); // From ElectricCar: "Charging the Tesla with 100kWh capacity."




//Hierarchical Inheritance
// Single Parent Class
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    return `${this.brand} is moving at ${this.speed} km/h.`;
  }
}

// Child Class 1 inherits from Vehicle
class Car extends Vehicle {
  constructor(brand, speed, doors) {
    super(brand, speed); // Calls parent constructor
    this.doors = doors;
  }

  honk() {
    return `${this.brand} goes Beep Beep!`;
  }
}

// Child Class 2 inherits from the same Vehicle class
class Truck extends Vehicle {
  constructor(brand, speed, cargoCapacity) {
    super(brand, speed); // Calls parent constructor
    this.cargoCapacity = cargoCapacity;
  }

  loadCargo() {
    return `${this.brand} is loading ${this.cargoCapacity} tons of cargo.`;
  }
}

// --- Usage ---
const myCar = new Car("Tesla", 120, 4);
const myTruck = new Truck("Volvo", 80, 15);

console.log(myCar.move()); // "Tesla is moving at 120 km/h." (Inherited)
console.log(myCar.honk()); // "Tesla goes Beep Beep!" (Unique to Car)

console.log(myTruck.move()); // "Volvo is moving at 80 km/h." (Inherited)
console.log(myTruck.loadCargo()); // "Volvo is loading 15 tons of cargo." (Unique to Truck)







//Hybride class 
// 1. सबसे ऊपर वाली बेस क्लास (Vehicle)
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    return `${this.brand} का इंजन शुरू हो गया।`;
  }
}

// 2. पहली चाइल्ड क्लास (Car) - सिंगल इनहेरिटेंस
class Car extends Vehicle {
  drive() {
    return "सड़क पर चल रही है।";
  }
}

// 3. मिक्सिन ऑब्जेक्ट (Aircraft) - जो उड़ने की ताकत देगा
const AircraftMixin = {
  fly() {
    return "आसमान में उड़ रही है!";
  }
};

// 4. हाइब्रिड क्लास (FlyingCar) - दोनों को मिला कर बनी
class FlyingCar extends Car {
  constructor(brand, range) {
    super(brand); // Vehicle के constructor को कॉल करता है
    this.range = range;
  }
  autoPilot() {
    return "ऑटोपायलट मोड चालू है।";
  }
}

// 5. [मुख्य स्टेप] विमान की खूबियों को फ्लाइंग कार में जोड़ना
Object.assign(FlyingCar.prototype, AircraftMixin);


// === जांचने के लिए कोड (Testing the Code) ===
const myCar = new FlyingCar("टाटा एविएटर", "500 किमी");

console.log(myCar.start());     // आउटपुट: टाटा एविएटर का इंजन शुरू हो गया। (Vehicle से आया)
console.log(myCar.drive());     // आउटपुट: सड़क पर चल रही है। (Car से आया)
console.log(myCar.fly());       // आउटपुट: आसमान में उड़ रही है! (AircraftMixin से आया)
console.log(myCar.autoPilot()); // आउटपुट: ऑटोपायलट मोड चालू है। (FlyingCar से आया)
