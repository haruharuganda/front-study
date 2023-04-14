let x = "global";
let y = "global";

function outer() {
  let z = "outer's local z";

  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    let x = "inner's local x";

    console.log(x);
    console.log(y);
    console.log(z);
  }
  inner();
}

outer();

console.log(x);
console.log(y);
