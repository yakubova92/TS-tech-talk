/*
GENERICS

A generic type receives another type as an argument

*/

const numbers: Array<number> = [1, 2, 3]


// GENERIC OBJECT TYPES

// defining a generic object type
type Pants<T> = {
  left: T
  right: T
};

let joePants: Pants<string> = {
  left: 'phone',
  right: 'keys',
};

let janePants: Pants<number> = {
  left: 20,
  right: 50,
};

// Q: How to make this work?
let johnPants: Pants<string> = {
  left: 'phone',
  right: 20
}



















// Can accept multiple type parameters

type BetterPants<T1, T2> = {
  left: T1,
  right: T2
}

let johnnyPants: BetterPants<string, number> = {
  left: 'phone',
  right: 20
}
