//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.05;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n;

// Reference type(No-primitive)

// Objects, Array, Funtions
const animals = ["cats", "dogs", "cows", "goat"];

const obj = {
  name: "ritisha",
  age: 27,
};

function e() {
  console.log("hii");
}

const e = function () {
  console.log("hello");
};

const e = () => {};

//************************************
// Stack- Primitive
// Heap- NON-primitive
