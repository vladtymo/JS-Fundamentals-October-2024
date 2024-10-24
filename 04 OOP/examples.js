// -=-=-=-=-=-=- Classes -=-=-=-=-=-=-

class Student {
  constructor(name) {
    this.name = name;
  }
}
// Using:
const student = new Student("Sam"); // show more instances
// const student2 = new Student("Ben");
// const student3 = new Student("Ira");

// console.log(student);
// console.log(student2);
// console.log(student3);

console.log(typeof Student);










// Class methods

class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showName() {
    console.log(this.name);
  }

}
// Using:
const student = new Student("Sam", "Dobson");
console.log(student);
student.showName();










// Classes. Before ECMAScript2015

function Student(name) {
  this.name = name;
}

Student.prototype.showName = function () {
  console.log(this.name); // Sam
};

var student = new Student("Sam");
student.showName();











//  Static properties  & methodsс

class Book {
  static publishingYear = 2015;

  constructor(author) {
    this.bookname = author;
  }

  static readBook() {
    return "You reading new book!";
  }
}

const newbook = new Book("Dumas");
// console.log(newbook.publishingYear);  // Error
// console.log(Book.publishingYear); // 2015

  // console.log(newbook.readBook());  // Error
console.log(Book.readBook());














// Getters and Setters

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short");
      return;
    }
    this._name = value;
  }
}
let user = new User("Garry");
console.log(user.name);   // Garry call getter
const user2 = new User("David");
user2.name = "Bobyy";   //call setter: Name is too short
console.log(user2);













// OOP Principles:

//  * Inheritance
//  * Polymorphism
//  * Encapsulation
//  * [Abstraction]



// Inheritance

class Animal {
  constructor(kind) {
    this.kind = kind;
  }
  run() {
    console.log(this.kind + " runs!");
  }
} // Inherit from Animal specifying "extends Animal"

class Leopard extends Animal {
  jump() {
    console.log(this.kind + " jumps!");
  }
}

const leopard = new Leopard("Spotted leopard");
// leopard.jump(); //  Spotted leopard jumps!
leopard.run(); //  Spotted leopard runs!







// Inheritance. Keyword super

class Animal {
  constructor(kind, weight) {
    this.kind = kind;
    this.weight = weight;
  }
  run() {
    console.log(this.kind + " runs!");
  }
}

class Leopard extends Animal {
  constructor(kind, weight, speed) {
    super(kind, weight);
    this.speed = speed;
  }

  jump() {
    console.log(this.kind + " jumps!");
  }
}
const leopard = new Leopard("Spotted leopard", 40, 60);
console.log(leopard.weight); //  40
console.log(leopard.speed); //  60













//  Polymorphism. Overriding a method

class Animal {
  constructor(kind, weight) {
    this.kind = kind;
    this.weight = weight;
  }
  run() {
    console.log(this.kind + " runs!");
  }
}

class Leopard extends Animal {
  constructor(kind, weight, speed) {
    super(kind, weight);
    this.speed = speed;
  }

  run() {
    // console.log(this.kind + " runs!"); // 
    super.run();
    console.log(this.kind + " getting ready to jump");
  }
  jump() {
    console.log(this.kind + " jumps!");
  }
}

const leopard = new Leopard("Spotted leopard", 40, 60);
leopard.run(); // Spotted leopard runs!
// Spotted leopard getting ready to jump













// Encapsulation. Acces modifier

// public private protected

class CoffeeMachine {
  waterAmount = 0; // the amount of water 				inside

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}
// create the coffee machine
const coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine.waterAmount);

// add water
coffeeMachine.waterAmount = 200;
console.log(coffeeMachine.waterAmount);











// underscore _ protected

class CoffeeMachine {
  _waterAmount = 0;

  get waterAmount() {
    return this._waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  constructor(power) {
    this._power = power;
  }
}
let coffeeMachine = new CoffeeMachine(100);
  // coffeeMachine.waterAmount = -10; // Error: Negative water
coffeeMachine._waterAmount = 100;
console.log(coffeeMachine._waterAmount);











// Encapsulation. Private properties

class CoffeeMachine {
  #waterLimit = 900;

  get {
    #waterLimit
  }

  set {
    #waterLimit
  }

  classMethod() {
    
  }

  checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }
}

let coffeeMachine = new CoffeeMachine();
// coffeeMachine.checkWater(1200);
// can't access privates from outside of the class
console.log(coffeeMachine.#waterLimit);

  coffeeMachine.#waterLimit = 1000; // Error

