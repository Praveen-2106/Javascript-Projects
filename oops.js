// Class ?
/*
Syntax
class ClassName {
    properties or member variables or Class Attributes
    methods or function or Class Methods
}


class Vehicle {
  // Vehicle attribute
  BRAND = null; // Class level global type
  MODEL = null;
  OWNER = null;
  COLOR = null;

  // Constructor (default constructor)

  // Constructor (parameterized constructor)
  constructor(brand, model, owner, color) {
    this.BRAND = "FORD";
    this.MODEL = 2020;
    this.OWNER = "ABC";
    this.COLOR = "BLACK";
  }

  // getter & setter
  get latest() {
    return `${this.BRAND}, ${this.MODEL}, ${this.OWNER}, ${this.COLOR}`;
  }

  // Vehicle method
  honk() {
    console.log("Tuut, tuut!");
  }

  display() {
    console.log(`BRAND : ${this.BRAND}`);
    console.log(`MODEL : ${this.MODEL}`);
    console.log(`OWNER : ${this.OWNER}`);
    console.log(`COLOR : ${this.COLOR}`);
  }
}

/*
const ford = new Vehicle(); // create an Object
console.log(ford.brand); // Call the attribute
ford.honk(); // Call the method

const shift = new Vehicle(); // create an Object
shift.brand = "Shift;"; // set the new value for brand attribute (manual)
console.log(shift.brand); // Call the attribute
ford.honk(); // Call the method
*/

/*
const ford = new Vehicle("FORD", 2020, "abc", "RED"); // create an Object
ford.display();
const shift = new Vehicle("SHIFT", 2022, "xyz", "GRAY"); // create an Object
shift.display();
const kia = new Vehicle("KIA", 2024, "xyz", "BLACK"); // create an Object
kia.display();


const ford = new Vehicle(); // create an Object
console.log(ford.latest);
const shift = new Vehicle(); // create an Object
console.log(shift.latest);
*/

// Inheritance (code reusability)
// Class-1
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return "I have a " + this.carname;
    }
  }
  
  // Class-2
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ", it is a " + this.model;
    }
  }

  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());
  
  let shift = new Model("Shift", "abc");
  console.log(shift.show());