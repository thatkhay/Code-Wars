// *Variables*
// Create a variable and console log the value
// let myVariable = 'VAR'
// // Create a variable, add 10 to it, and alert the value
let myEditedVariable = 10
let sumOfEdited = myEditedVariable + 10
alert(sumOfEdited)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subfourNumbers(no1,no2,no3,no4) {
    return no1 - no2 - no3 - no4
}
console.log(subfourNumbers(7,3,2,1))
// Create a function that divides one number by another and returns the remainder
function dividededRemainder(no1,no2) {
    return no1 % no2
}
console.log(dividededRemainder(8,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(no1,no2) {
    if (no1 + no2 > 50) {
        alert('jumanji')
    }else if (no1 + no2 < 50) {
        alert('jumanjisss')
    }
}
console.log(addTwoNums(8,3))
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyOfThree(no1,no2,no3) {
    if (no1*no2*no3 % 3 === 0) {
        alert('ZEBRA')
    }else if((no1*no2*no3) % 3 != 0){
        alert('ZEBRAee')
    }
}
console.log(multiplyOfThree(1,6,2))

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeat(word,index) {
    for (let i = 0; i < index; i++) {
        console.log(word);
        
    }
}
repeat("hi", 7)