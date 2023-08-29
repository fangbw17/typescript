{
    // Symbol 中的 key 是可选的
    let sym1 = Symbol();
    let sym2 = Symbol("key");
}

{
  let sym2 = Symbol("key");
  let sym3 = Symbol("key");
  // false， Symbol 构造的值是唯一的
  console.log(sym3 === sym2);
}

{
  const sym = Symbol()
  let obj = {
    [sym]: 'value'
  }
  // value，像 string 一样，symbol 可以用作 key 作为 对象的属性
  console.log(obj[sym])
}

{
  // Symbol 还可以与计算属性声明相结合来声明对象属性和类成员
  const getClassNameSymbol = Symbol()

  class TestClass {
    [getClassNameSymbol]() {
      return "test"
    }
  }
  let c = new TestClass()
  console.log(c[getClassNameSymbol]())
}

{
  // unique symbol 是 symbol 的子类型，仅通过调用 Symbol() 或 Symbol.for() 或显式类型注释生成
  // 该类型仅允许在 const 声明和 readonly static 属性上是使用，
  // 并且为了引用特定的唯一符号，必须使用 typeof 运算符。
  // declare const sym1: unique symbol

  const sym2: unique symbol = Symbol()

  // let sym3: typeof sym1 = sym1

  class TestClass {
    static readonly StaticSymbol: unique symbol = Symbol()
  }

  const sym4 = Symbol.for('key')
}

{
  // Symbol.for() 方法会返回相同改的 Symbol 值。
  // TypeScript 目前无法识别这种情况，所以可能会出现多个 unique symbol 类型的变量，等于同一个 Symbol 值的情况
  const a: unique symbol = Symbol.for('foo')
  const b: unique symbol = Symbol.for('foo')
  // a 和 b 是两个不同的值类型，但是它们的值其实是相等的。
  // unique symbol 类型是 symbol 类型的子类型，所以可以赋值，但是反过来不行。
  const c: symbol = a 
  // const d: unique symbol = c // 错误
}

{
  // 因为 unique symbol 是一个唯一的值类型。所以其作用之一是可以用作属性名，这样保证了唯一性，不会冲突
  const x: unique symbol = Symbol()
  const y: symbol = Symbol()

  interface Foo {
    [x]: string
    // [y]: string
  }
  // 变量 y 类型是 symbol，不是固定不变的值，导致报错
}

{


  // Tips
  // - 使用 const 命令为变量赋值 Symbol 值时，类型默认为 unique symbol
  let sym1 = Symbol() // sym1: Symbol
  const sym2 = Symbol() // sym2: unique symbol
  // - const 声明的变量，赋值给另外一个 symbol 类型的变量，则推断类型为 symbol
  const sym3 = sym1
  // - let 声明的变量，赋值为另一个 unique symbol 类型的变量，则推断类型为 symbol
  let sym4 = sym2

  // - unique symbol 类型唯一，值也唯一
  const a: unique symbol = Symbol('key')
  const b: unique symbol = Symbol('key')
  // a === b // 报错
  // a 和 b 都是 unique symbol，但其实是两个值类型，类似于字符串的值类型
  let c: 'hello' = 'hello'
  let d: 'world' = 'world'
  // c === d // 报错
  // let e: 'hi' = c // 值类型不同，不能赋值
  // 上述效果在 unique symbol 是一样的。
  // 如果想将一个 unique symbol 赋值给另一个变量，得使用 typeof
  // const f: unique symbol = a // 错误
  let f: typeof a = a
}

// Symbol.hasInstance
{
  // 指向一个内部方法，当给一个对象设置以 Symbol.hasInstance 为属性名的方法后，
  // 当其他对象使用 instanceof 判断是否为这个对象的实例时，会调用定义的这个方法。
  const obj = {
    [Symbol.hasInstance](obj: any) {
      console.log('Symbol.hasInstance 触发了', obj);
    }
  } 
  console.log({a: 'hello'} instanceof (obj as any));
}

// Symbol.isConcatSpreadable
{
  // 是一个可读写的布尔值，当一个数组的 Symbol.isConcatSpreadable 设为 true 时
  // 这个数组不可被扁平化
  const arr: number[] = [1, 2]
  let newArray: number[] = []
  console.log(newArray.concat(arr, [3, 5]));


  interface MyArray<T> extends Array<T> {
    [Symbol.isConcatSpreadable]?: boolean
  }

  const arr1: MyArray<string> = ["a", "b"]
  arr1[Symbol.isConcatSpreadable] = true
  const arr2: MyArray<string> = ['c', 'd']
  arr2[Symbol.isConcatSpreadable] = false
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
  class TestClass extends Array {
    static get [Symbol.species]() {
      return Array
    }
    getName() {
      return 'hello'
    }
  }
  const c = new TestClass(1)
  const a = c.map(item => item + 1)
  console.log(a);
  console.log(a instanceof TestClass);
  console.log(a instanceof Array);
}

// Symbol.toStringTag
{
  // 用于定义对象在调用 toString 方法时返回的字符串
  class Foo {
    get [Symbol.toStringTag]() {
      return 'bar'
    }
  }
  const foo = new Foo()
  console.log(foo.toString());
  console.log(Object.prototype.toString.call(new Foo()));
}

// Symbol.match
{
  // 用于 正则表达式或字符串匹配时调用
  class Foo {
    [Symbol.match](str: string | RegExp) {
      if (typeof str === 'string')
        return str.indexOf('foo') !== -1;
    }
  }
  
  console.log('foobar'.match(new Foo()));
  console.log('barbaz'.match(new Foo()));
  
}