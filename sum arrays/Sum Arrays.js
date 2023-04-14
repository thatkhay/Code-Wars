function sum (numbers) {
    if(numbers.length === 0){
      return 0;
    }
    else {
      let sumNumbers = 0;
      for (e of numbers) {
        sumNumbers += e;
      }
      return sumNumbers;
    }    
  }