interface chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chai shop",
};

//!Function handling in inteface

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(price: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start(price = 20) {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRating {
  [flavour: string]: number;
}

const rating: ChaiRating = {
  masala: 4.5,
  ginger: 4.5,
};

//! Usinqu efeature of interface

interface User {
  name: string;
}
interface User {
  age: number;
}

const u: User = {
  name: "Hello",
  age: 42,
};

//! Extend Interface
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {
  a: "A class";
  b: "B class";
}
