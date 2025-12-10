import text from './input.txt?raw';

//partOne

const input = text.split(',').map(entry => {
    const [start, end] = entry.split("-").map(Number);

    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
});

function splitInHalf(number) {
    const stringNumber = number.toString();

    if (stringNumber.length % 2 !== 0) {
        return false
    }
    const halved = stringNumber.length / 2;

    const firstHalf = stringNumber.slice(0, halved);
    const secondHalf = stringNumber.slice(halved);

    return firstHalf === secondHalf
}

const fullArray = input.map(array => array.filter(split => splitInHalf(split)));

let output = 0;

fullArray.map((numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        output = output + numbers[i]
    }
});

console.log(output);

//partTwo

function repeatedNumbers(number) {
    const stringNumber = number.toString();
    const digits = stringNumber.length;

    for (let i = 1; i <= Math.floor(digits / 2); i++) {
        if (digits % i !== 0) continue;

        const segment = stringNumber.slice(0, i);
        const repeated = digits / i;

        if (segment.repeat(repeated) === stringNumber) {
            return true;
        }
    }
    return false;
}

const secondArray = input.map(array => array.filter(split => repeatedNumbers(split)))

let outputTwo = 0;
secondArray.map((numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        outputTwo = outputTwo + numbers[i]
    }
});

console.log(outputTwo);


