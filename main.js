// console.log("hi");
// console.log(1 + 1);

// ES5
// var = function scope
var x = 1;

// không nên gán var vì nó sẽ truy cập vào phần tương tác với window
var name = "kyphong";
window.name;
// ES6
// let, const = block scope
let y = 2;
// let gán lại được
const z = 3;
// const không gán lại được

console.log(x, y, z);

let lastName = "Phong";
let age = 20;
let firstName = undefined;
let isSingle = true;
let favoriteColor = null;

console.log(typeof lastName);
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof isSingle);
console.log(typeof favoriteColor);

const person = {
  // key : value,
  name: "kynhong",
  age: 19,
  hi: function () {},
  birthday: {
    day: 4,
    month: 1,
    year: 2002,
  },
};
console.log(person);
person.name = "Hun";
console.log(person.name);
console.log(person["age"]);

let selectColors = ["red", "blue"];
selectColors[2] = 1;
console.log(selectColors);

function greeting(name) {
  console.log("Hello " + name);
}
greeting("John");
function add(a, b) {
  return a + b;
}
add(1, 2);
function hi() {
  console.log("ho");
}
hi();

// value types : lưu trữ giá trị
// reference types : lưu trữ địa chỉ
