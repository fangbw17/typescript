// type MyFunc = (text: string) => void
// const foo: MyFunc = function(text) {
//   console.log('hello ', text)
// }
// type MyFunc = (name: string, address: string) => void
// const foo: MyFunc = function(name) {
//   console.log(`the person name is ${name}`);
// }
// foo('tom')
var myFunc;
myFunc = function (a) {
    console.log(a);
    return a;
}; // 正确
myFunc(10);
// myFunc = (
//   a:number, b:number, c:number
// ) => a + b + c; // 报错
