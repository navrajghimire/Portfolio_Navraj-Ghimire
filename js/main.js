/*
//
//
//
//
*/
console.log('Hello, World!'); // just saying hello

/* alert ('Hello, World!'); // just saying hello */

const DOB = 'Feb 27 1995'
// DOB = 'MAR 15 1996'
console.log(DOB);

let firstname = "NAVRAJ"
firstname = "Arya";
console.log(firstname);
console.log(typeof firstname);

var age =44; // ESS syntax
/* age = Number ('72') + ('11');*/
age = 72 + 11;
age =  35.445;
console.log(age);
console.log(typeof age);

let friday = true;
friday = false;
console.log(friday);

let fruits = new Array('apple', 'kiwi','orange','dragonfruit', 'grape');
fruits.push('pineapple');
fruits.push('kale'); // add item to array
console.log(fruits);
fruits.pop(); // remove last item from arrray
console.log(fruits);
let slicedorange = fruits[2].split('');
console.log(slicedorange);

/*
function sayName() { // ES5
    console.log('My name is serrio');
}
*/

let sayName = (name, fruit) => { // ES6
    console.log('My name is ' + name +'. My favourite fruit is ' + fruit + '.');
  //  console.log('My name is Serrio. My favourite fruit is fruits[2].").
  let peel = false; // local scope
    console.log('My name is ${name}. My favourite fruit is ${fruit}.');
}

sayName("serrio", fruits[1]);
sayName(firstname, 10);
sayName("NAVRAJ", fruits [3]);

if (peel != 1) {
    console.log(typeof peel);
    console

}

