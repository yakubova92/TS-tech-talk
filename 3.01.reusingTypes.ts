/*

Reusing Types

reduce the amount of type annotations

*/


// Accessing Subtypes
type Contact = {
  name: string
  phone: string
  address: {
    line1: string
    line2: string
    city: string
    state: string
    zip: string
  }
}

let address: Contact['address']




/*

`typeof` type operator

*/

// JS typeof operator
console.log(typeof "hello world")

// TS - used to refer to the type of a variable or propery
let greeting = "hello";
let message: typeof greeting;


// example
const todo = {
  title: "Learn keyof",
  done: false,
}
type TodoPropertyName = keyof typeof todo
let property: TodoPropertyName = "done"
const value3 = todo[property]

















/*

`keyof` type operator
- takes an object type and produces a string or numeric literal union of its keys

*/


function pluck<ITEM>(items: ITEM[], key: keyof ITEM): any[] {
  return items.map(item => item[key])
}
const todos = [
  { title: "Learn keyof", done: true },
  { title: "Learn mapped types", done: false }
]
const titles = pluck(todos, "title")
// ["Learn keyof", "Learn mapped types"]

const statuses = pluck(todos, "done")
// [true, false]

const authors = pluck(todos, "author")
// error!












/*

Mapped types
- sometimes a type needs to be based on another type
- mapped types build on index signatures

*/

// index signature
type Item = {
  [key: string]: boolean | string;
};

// mapped types are generic types that use a union created via `keyof` to iterate through keys of one type to create another

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// OptionsFlags takes all properties from <Type> and changes their values to boolean


// Mapping Modifiers
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;










/*

CONDITIONAL TYPES

*/

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");

// Q: What is the type of 'a'

let b = createLabel(2.8);

// Q: What is the type of 'b'

let c = createLabel(Math.random() ? "hello" : 42);

// Q: What is the type of 'c'
