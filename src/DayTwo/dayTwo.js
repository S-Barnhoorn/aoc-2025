import text from './input.txt?raw';

// const input = text.split(',').map(item => item.trim());
// const input = text.split(',').map(item => {return {"first": item[0], "second": item[1]}});

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
    console.log(stringNumber);
}

const result = input.map(array => array.filter(split => splitInHalf(split)));

