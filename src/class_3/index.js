var employee = {
    firstName: "Aaron",
    lastName: 'John',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
var myIceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
var customCream = {
    flavor: 'tom',
    scoops: 3,
    sauce: 'chocolate'
};
function tooMuchScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too much scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooMuchScoops({ flavor: 'tom', scoops: 3, sauce: 'chocolate' }));
var iceCreamArray = ['1', '2', '3'];
var myStr = iceCreamArray[2];
console.log(myStr);
function calculateInterestOnlyLoanPayment(loanTerms) {
    var interrest = loanTerms.interestRate / 1200;
    var payment = loanTerms.principal * interrest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
var interrestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interrestOnlyPayment);
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    var interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
var addThreeNumbers = function (x, y, z) { return x + y + z; };
console.log(addThreeNumbers(10, 20, 30));
var addNumberss = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
console.log(addNumberss(1, 2));
console.log(subtractNumbers(1, 2));
