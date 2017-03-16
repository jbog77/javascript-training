// add, minus, div, mult opeations

// Standard base
function add(x, y) {
    return x + y;
}

// Functions are variables
const minus = function (x, y) {
    return x - y;
}

// One liner FAT arrows (ES 2015)
const div = (x, y) => x / y; // no return needed

// Multiline
const mult = (x, y) => {//multiline fat arrox need {}
    console.log('mult', x, 'by', y);
    return x * y; // return NEED for multiline fat arrow
}

l=console.log;
l(add(2,4));






