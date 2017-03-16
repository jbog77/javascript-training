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

log=console.log;
log(add(2,4));

log(mult(3,5));

function calculous(x,y,operation){
    return operation(x,y);
}

log(calculous(1,2,div))

const result = calculous(9,4,function(x,y){
return x%y;
});

log("result :",result);






