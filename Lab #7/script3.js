let numberOfRecusrionCalls = 0;
let numberOfMemoCalls = 0;

function fibonachiRecursion(numberInRow) {
    numberOfRecusrionCalls ++;
    if(numberInRow <= 1) {
    return 1;
    }
    return fibonachiRecursion(numberInRow - 1) + fibonachiRecursion(numberInRow - 2);
}

function createFibonachiMemo() {
    const cache = {}; 
    return function fibMemoFunc(n) {
        numberOfMemoCalls++;

        if (cache[n] !== undefined) {
            return cache[n];
        }
        if (n <= 1) {
            return 1;
        }
        cache[n] = fibMemoFunc(n - 1) + fibMemoFunc(n - 2);
        return cache[n];
    };
}

let input = prompt("Input number: "); 
const fibonachiMemo = createFibonachiMemo();
console.log(fibonachiRecursion(input), numberOfRecusrionCalls);
console.log(fibonachiMemo(input), numberOfMemoCalls);