const object = {
  name : "name",
  age : 25,
};

console.dir(object);

function Func(name, age) {
  this.name = name;
  this.age = age;
};

const func = new Func("owall", 24);

console.log("Func");
console.dir(Func);
console.log("func");
console.dir(func);