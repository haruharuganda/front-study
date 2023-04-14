const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  },
};

//console.log(circle.getDiameter());

function foo() {
  console.log("foo's this :", this);
  function bar() {
    console.log("bar's this :", this);
  }
  bar();
}
foo();

