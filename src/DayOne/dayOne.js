import data from './input.json'

let start = 50

const separated = data.map(item => ({
    letter: item[0],
    number: item.slice(1)
}));

//partOne

let array = [];

for (let i = 0; i < separated.length; i++) {

    if (separated[i].letter === "R") {
        start = (start + parseInt(separated[i].number)) % 100

    } else if (separated[i].letter === 'L') {
        start = ((start - parseInt(separated[i].number)) % 100 + 100) % 100
    }

    array.push(start)
}

const result = array.filter((item) => item === 0).length;

console.log(result)

//partTwo

function exactlyZero(prevRaw, raw) {

    if (raw > prevRaw) {
        return Math.floor(raw / 100) - Math.floor(prevRaw / 100);
    }

    return Math.floor((prevRaw - 1) / 100) - Math.floor((raw - 1) / 100);
}

let zeroHits = 0;
let raw = 50;

for (let i = 0; i < separated.length; i++) {

    const step = parseInt(separated[i].number, 10);
    const prevRaw = raw;

    if (separated[i].letter === "R") {
        raw = raw + step;
    } else if (separated[i].letter === "L") {
        raw = raw - step;
    }

    const hitsThisStep = exactlyZero(prevRaw, raw);

    // if (hitsThisStep > 0) {
    //     console.log(
    //         `From ${prevRaw} to ${raw}: dial hit 0 ${hitsThisStep} time(s)`
    //     );
    // }

    zeroHits += hitsThisStep;
}

console.log(zeroHits)



