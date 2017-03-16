var x = 2 + 2;
console.log(x);

for (var i = 0; i < 10; i++) {
    let x = i + 1;
    //console.log(x);
}

console.log("final x:", x)

log = console.log;

log(2 == 2);
log(2 == "2");
log(0 == false);
log(1 == true);
log('0' == false);
log(1 + '0' == 10);
log(10 == true);

log(2 === "2");
log(2 !== "2");
x = "";
if (x) {
    log("hey");
}