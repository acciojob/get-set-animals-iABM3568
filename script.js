//complete this code
class Animal {
	constructor(species) {
    // Store the species as a private property
    this._species = species;
  }
  
  // Getter for species
  get species() {
    return this._species;
  }
  
  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
	constructor(species) {
    // Call the parent Animal constructor
    super(species);
  }
  
  // Dog-specific method
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
	constructor(species) {
    // Call the parent Animal constructor
    super(species);
  }
  
  // Cat-specific method
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
