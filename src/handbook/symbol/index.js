var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
{
    // Symbol 中的 key 是可选的
    var sym1 = Symbol();
    var sym2 = Symbol("key");
}
{
    var sym2 = Symbol("key");
    var sym3 = Symbol("key");
    // false， Symbol 构造的值是唯一的
    console.log(sym3 === sym2);
}
{
    var sym = Symbol();
    var obj = (_a = {},
        _a[sym] = 'value',
        _a);
    // value，像 string 一样，symbol 可以用作 key 作为 对象的属性
    console.log(obj[sym]);
}
{
    // Symbol 还可以与计算属性声明相结合来声明对象属性和类成员
    var getClassNameSymbol_1 = Symbol();
    var TestClass = /** @class */ (function () {
        function TestClass() {
        }
        TestClass.prototype[getClassNameSymbol_1] = function () {
            return "test";
        };
        return TestClass;
    }());
    var c = new TestClass();
    console.log(c[getClassNameSymbol_1]());
}
{
    // unique symbol 是 symbol 的子类型，仅通过调用 Symbol() 或 Symbol.for() 或显式类型注释生成
    // 该类型仅允许在 const 声明和 readonly static 属性上是使用，
    // 并且为了引用特定的唯一符号，必须使用 typeof 运算符。
    // declare const sym1: unique symbol
    var sym2 = Symbol();
    // let sym3: typeof sym1 = sym1
    var TestClass = /** @class */ (function () {
        function TestClass() {
        }
        TestClass.StaticSymbol = Symbol();
        return TestClass;
    }());
    var sym4 = Symbol.for('key');
}
{
    // Symbol.for() 方法会返回相同改的 Symbol 值。
    // TypeScript 目前无法识别这种情况，所以可能会出现多个 unique symbol 类型的变量，等于同一个 Symbol 值的情况
    var a = Symbol.for('foo');
    var b = Symbol.for('foo');
    // a 和 b 是两个不同的值类型，但是它们的值其实是相等的。
    // unique symbol 类型是 symbol 类型的子类型，所以可以赋值，但是反过来不行。
    var c = a;
    // const d: unique symbol = c // 错误
}
{
    // 因为 unique symbol 是一个唯一的值类型。所以其作用之一是可以用作属性名，这样保证了唯一性，不会冲突
    var x = Symbol();
    var y = Symbol();
    // 变量 y 类型是 symbol，不是固定不变的值，导致报错
}
{
    // Tips
    // - 使用 const 命令为变量赋值 Symbol 值时，类型默认为 unique symbol
    var sym1 = Symbol(); // sym1: Symbol
    var sym2 = Symbol(); // sym2: unique symbol
    // - const 声明的变量，赋值给另外一个 symbol 类型的变量，则推断类型为 symbol
    var sym3 = sym1;
    // - let 声明的变量，赋值为另一个 unique symbol 类型的变量，则推断类型为 symbol
    var sym4 = sym2;
    // - unique symbol 类型唯一，值也唯一
    var a = Symbol('key');
    var b = Symbol('key');
    // a === b // 报错
    // a 和 b 都是 unique symbol，但其实是两个值类型，类似于字符串的值类型
    var c = 'hello';
    var d = 'world';
    // c === d // 报错
    // let e: 'hi' = c // 值类型不同，不能赋值
    // 上述效果在 unique symbol 是一样的。
    // 如果想将一个 unique symbol 赋值给另一个变量，得使用 typeof
    // const f: unique symbol = a // 错误
    var f = a;
}
// Symbol.hasInstance
{
    // 指向一个内部方法，当给一个对象设置以 Symbol.hasInstance 为属性名的方法后，
    // 当其他对象使用 instanceof 判断是否为这个对象的实例时，会调用定义的这个方法。
    var obj = (_b = {},
        _b[Symbol.hasInstance] = function (obj) {
            console.log('Symbol.hasInstance 触发了', obj);
        },
        _b);
    console.log({ a: 'hello' } instanceof obj);
}
// Symbol.isConcatSpreadable
{
    // 是一个可读写的布尔值，当一个数组的 Symbol.isConcatSpreadable 设为 true 时
    // 这个数组不可被扁平化
    var arr = [1, 2];
    var newArray = [];
    console.log(newArray.concat(arr, [3, 5]));
    var arr1 = ["a", "b"];
    arr1[Symbol.isConcatSpreadable] = true;
    var arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    console.log(['a', 'b'].concat(arr1, 'e'));
    // [ 'a', 'b', 'a', 'b', 'e' ]
    console.log(['a', 'b'].concat(arr2, 'e'));
    // [ 'a',  'b', [ 'c', 'd', [Symbol(Symbol.isConcatSpreadable)]: false ], 'e']
    // 第三个元素是一个数组，没有被扁平化，看似有三个元素，但是在控制台答应可以看到数组的length为2
    // Symbol(Symbol.isConcatSpreadable)：false 不是元素，而是属性。数组也是一种对象
}
// Symbol.species
{
    // 为衍生数组返回指定的构造函数类型, 即 const a 的类型是 Array, 不是 TestClass
    var TestClass = /** @class */ (function (_super) {
        __extends(TestClass, _super);
        function TestClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(TestClass, Symbol.species, {
            get: function () {
                return Array;
            },
            enumerable: false,
            configurable: true
        });
        TestClass.prototype.getName = function () {
            return 'hello';
        };
        return TestClass;
    }(Array));
    var c = new TestClass(1);
    var a = c.map(function (item) { return item + 1; });
    console.log(a);
    console.log(a instanceof TestClass);
    console.log(a instanceof Array);
}
// Symbol.toStringTag
{
    // 用于定义对象在调用 toString 方法时返回的字符串
    var Foo = /** @class */ (function () {
        function Foo() {
        }
        Object.defineProperty(Foo.prototype, Symbol.toStringTag, {
            get: function () {
                return 'bar';
            },
            enumerable: false,
            configurable: true
        });
        return Foo;
    }());
    var foo = new Foo();
    console.log(foo.toString());
    console.log(Object.prototype.toString.call(new Foo()));
}
