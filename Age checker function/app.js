//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let input = document.querySelector('input')
let text = document.querySelector('h1')
let button = document.querySelector('button')
button.addEventListener('click', function() {
    text.textContent = ageChecker();
})

function ageChecker() {
    let age = parseInt(input.value);
    if (age < 16 && age > 0) {
        return 'Cannot drive'
    } else if (age < 18 && age >= 16) {
        return `You can hate from outside the club, because they can't even get in`
    } else if (age < 21 && age >= 18) {
        return `You can hate from outside the club, because they can't even get in`
    } else if (age < 25 && age >= 21) {
        return `You can hate from outside the club, because they can't even get in`
    } else if (age < 30 && age >= 25) {
        return `You can hate from outside the club, because they can't even get in`
    } else if(age < 200 && age >= 30){
        return `tell them there is nothing left to look forward too`
    }else if(age === 0  || age > 200){
        return `enter valid age`
    }else {
        return `input age`
    }
}