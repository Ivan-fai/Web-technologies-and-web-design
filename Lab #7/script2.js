function factorial(number){
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = number * factorial(number-1);
    
    return result;
}

let result = prompt("Input number: ");
alert(`Result factorial of ${result} = ${factorial(result)}`);