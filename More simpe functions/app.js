//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwoNumbers(no1,no2) {
    return (no1 - no2)
}
console.log(subtractTwoNumbers(7,1));
//create a function that divides three numbers and console logs the quotient
function divideTwoNumbers(n1,n2,n3) {
    return (n1 / n2 / n3)
}
console.log(divideTwoNumbers(7,1,1));
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers(n1,n2,n3) {
    return (n1 * n2 * n3)
}
console.log(multiplyThreeNumbers(7,1,3));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addAndDivideThreeNumbers(n1,n2,n3) {
    return ((n1 + n2) % n3)
}
console.log(addAndDivideThreeNumbers(7,1,3));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function addAndDivideThreeNumbers(n1,n2,n3,n4) {
   if (n1 * n2 > 100) {
    return n3 + n4
   }else if (n1 * n2 < 100) {
    return n3 - n4
   }
}