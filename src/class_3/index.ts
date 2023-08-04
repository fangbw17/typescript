interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName: "Aaron",
    lastName: 'John',
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string
}

let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
}
console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

// 扩展接口
interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry',
  nuts?: boolean,
  whippedCream?: boolean,
  instructions?: string
}

let customCream: Sundae = {
  flavor: 'tom',
  scoops: 3,
  sauce: 'chocolate'
}

function tooMuchScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too much scoops!'
  } else {
    return 'Your order will be ready soon!'
  }
}
console.log(tooMuchScoops({flavor: 'tom', scoops: 3, sauce: 'chocolate'}));

// 拓展接口 Tip
// 1. 拓展的接口需实现被拓展接口所有必需的属性
// 2. 如果属性具有完全相同的名称和类型，则两个接口可以具有相同的属性
// 3. 如果接口具有名称相同但类型不同的属性，则必须声明一个新属性，以使生成的属性是这两个接口的子类型


// 索引类型
// 可以修改数组类型的索引值的类型, 可编制索引的类型具有“索引签名”
interface IceCreamArray {
  [index: number]: string
}

let iceCreamArray: IceCreamArray = ['1', '2', '3'] 
let myStr: string = iceCreamArray[2]
console.log(myStr);

interface Loan {
  principal: number,
  interestRate: number
}

interface ConventionalLoan extends Loan {
  months: number
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
  let interrest = loanTerms.interestRate / 1200
  let payment = loanTerms.principal * interrest
  return 'The interest only loan payment is ' + payment.toFixed(2)
}

let interrestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5})
console.log(interrestOnlyPayment);

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
  // Calculates the monthly payment of a conventional loan
  let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
  let payment: number;
  payment = loanTerms.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
  return 'The conventional loan payment is ' + payment.toFixed(2);
}

let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"


// 析构对象参数
interface Message {
  text: string,
  sender: string
}

function displayMessage({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'})


let addThreeNumbers = (x: number, y: number, z?: number): number => x + y + z;
console.log(addThreeNumbers(10, 20, 30));


type calculator = (x: number, y: number) => number;
let addNumberss: calculator = (x: number, y: number): number => x + y
let subtractNumbers: calculator = (x: number, y: number): number => x - y
console.log(addNumberss(1, 2));
console.log(subtractNumbers(1, 2));
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') {
    return addNumberss;
  } else {
    return subtractNumbers
  }
}