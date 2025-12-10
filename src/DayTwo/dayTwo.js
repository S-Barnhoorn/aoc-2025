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

function splitInHalf(number){
    const stringNumber = number.toString();

    if (stringNumber.length % 2 !== 0){
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
    }});

console.log(output);

//partTwo

