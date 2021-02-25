/*

FUNCTIONS Part 3

* Functions
 */

 // function expression
 // function anonymous

 let total = 0;
 //parameters
const sum = function(number1, number2){
  let total = number1 + number2

  return total
}

let number1 = 34
let number2 = 35
//sum(number1,number2) // arguments

//interpolado
//console.log(`o number 1 e ${number1}`)
//console.log(`o number 2 e ${number2}`)
console.log(`a soma e ${sum(number1,number2)}`)
console.log(total)