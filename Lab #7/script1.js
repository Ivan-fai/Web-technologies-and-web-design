function execution(...numbers){
    if(numbers.length === 2){
        let numbersSum = 0;
        for (let i=0; i<numbers.length;i++){
            numbersSum+=numbers[i];
        }
        return numbersSum;
    }
    else{
        return numbers[numbers.length - 1] - numbers[0];
    }
}

let input = prompt("Input numbers: ");
let numbers = input.split(",").map(Number);
let result = alert(execution(...numbers));
