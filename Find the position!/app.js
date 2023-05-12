// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      return 'Position of alphabet: ' + (alphabets.indexOf(letter) + 1);
    }