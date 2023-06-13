var randomNumbers = [];
var nextNumebr;
for (var i = 0; i < 10; i++) {
    nextNumebr = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumebr);
}
console.log(randomNumbers);
