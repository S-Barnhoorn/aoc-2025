import text from './input.txt?raw';

const input = text.split('\n').map(line => line.trim())
console.log(input);


//partOne
function highestNumber(battery){
    const digits = battery.split("").map(Number);

    const firsHighest = Math.max(...digits);
    const firstIndex = digits.indexOf(firsHighest);

    const newStartingPoint = digits.slice(firstIndex + 1)

    if(newStartingPoint.length > 0){
        const secondHighest = Math.max(...newStartingPoint);
        return firsHighest * 10 + secondHighest;
    }
    else{
        const secondHighest = Math.max(...digits.slice(0, firstIndex));
        return secondHighest * 10 + firsHighest;
    }
}

const results = input.map((batteries) => {
    return highestNumber(batteries)
})

console.log(results)

let output = 0;
results.map((number) => {
    output = output + number
});
console.log(output);

//partTwo

function largestNumber(battery){
    const digits = battery.split("");
    let removeNumbers= digits.length - 12;

    const result = digits.reduce((stack, number) => {
        while (
            removeNumbers > 0 &&
            stack.length > 0 &&
            stack[stack.length - 1] < number
        ) {
            stack.pop();
            removeNumbers--;
        }
        stack.push(number);
        return stack;
    }, []);

    return result.slice(0, 12).join("");
}

const resultsTwo = input.map((batteries) => {
    return largestNumber(batteries)
})

const numbersArray = resultsTwo.map(Number);

let outputTwo = 0;
numbersArray.map((number) => {
    outputTwo = outputTwo + number
});
console.log(outputTwo);