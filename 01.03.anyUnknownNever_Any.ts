/*

Any, Unknown, Never

*/


// ANY
{


  let x: any = 'four'
  let y: number = 3


  // Q: Is this allowed? Why?
  x = y

  // Q: Is this allowed? Why?
  y = x

}


/*

ANSWER

anything can be assigned to `any`
`any` can be assigned to every type

*/



// UNKNOWN
{

  let x: unknown = 'four'
  let y: number = 3


  // Q: Is this allowed? Why?
  x = y

  // Q: Is this allowed? Why?
  y = x


















  y = typeof x === 'number' ? x : 0

}

/*

ANSWER

- anything can be assigned to `unknown`
- `unknown` is not compatible with anything, it needs a type assertion first

*/





// NEVER

// logical operator narrowing `if (typeof ...)`

function print(value: string | number) {
  if (typeof value === "string") {
    console.log("String: " + value)
  } else if (typeof value === "number") {
    console.log("Number: " + value)
  } else {
    console.log("Something else: " + value) // Q: what is the inferred type for this 'value'?
  }
}






// when is `never` useful?

// another narrowing example....

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }

type Shape = Circle | Square;
// type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
