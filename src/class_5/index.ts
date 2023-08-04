// 泛型
// 处理逻辑相似，但类型不同的函数
// 减少 any 使用，确保 TS 的类型检查
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numberArray = getArray<number>([10, 20, 32]);
const stringArray = getArray<string>(["123", "23", "3232"]);
console.log(numberArray);
console.log(stringArray);

{
  function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
  }

  let returnNumebr = identity<number, string>(10, "20");
  let returnString = identity<string, string>("10", "20");
  let returnString2 = identity<string, number>("10", 20);
}

{
  type ValidTyps = string | number;
  function identity<T extends ValidTyps, U>(value: T, message: U): T {
    let result: T = value + value;
    console.log(message);
    return result;
  }

  let returnNumber = identity<number, string>(100, "Hello!");
  let returnString = identity<string, string>("100", "Hola!");
  let returnBoolean = identity<boolean, string>(true, "Bonjour!");
}

{
  type Person = {
    name: string;
    age: number;
  };

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const person: Person = {
    name: "tom",
    age: 29,
  };
  const name = getProperty(person, "name");
  const age = getProperty(person, "age");
  const address = getProperty(person, "address");
}

{
  type ValidTypes = string | number;
  function identity<T extends ValidTypes, U>(value: T, message: U) {
    // Return type is inferred
    let result: ValidTypes = "";
    let typeValue: string = typeof value;

    if (typeof value === "number") {
      // Is it a number?
      result = value + value; // OK
    } else if (typeof value === "string") {
      // Is it a string?
      result = value + value; // OK
    }

    console.log(
      `The message is ${message} and the function returns a ${typeValue} value of ${result}`
    );

    return result;
  }

  let numberValue = identity<number, string>(100, "Hello");
  let stringValue = identity<string, string>("100", "Hello");

  console.log(numberValue); // Returns 200
  console.log(stringValue); // Returns 100100
}

{

  interface Identity<T, U> {
    value: T
    message?: U
  }

  let returnNumber: Identity<number, string> = {
    value: 20,
    message: 'hello'
  }

  let returnString: Identity<string, number> = {
    value: 'hello',
    message: 20
  }

}

// 将泛型接口声明为函数类型
{
  interface ProcessIdentity<T, U> {
    (value: T, message: U): T
  }

  function processIdentity<T, U>(value: T, message: U): T {
    console.log(message)
    return value
  }

  let processor: ProcessIdentity<number, string> = processIdentity
  let returnNumber1 = processor(100, 'hello')
  let returnNumber2 = processor('hello', 100)
}

// 将泛型接口声明为类类型
{
  interface ProcessIdentity<T, U> {
    value: T
    message: U
    process(): T
  }

  class ProcessIdentityClass<X, Y> implements ProcessIdentity<X, Y> {
    value: X
    message: Y;
    constructor(val: X, msg: Y) {
      this.value = val
      this.message = msg
    }

    process(): X {
      return this.value
    }
  }

  const processor = new ProcessIdentityClass<number, string>(20, 'hello')
  console.log(processor.process()) // 20
}

// 泛型类
{
  class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
    }
    getIdentity(): T {
      console.log(this._message);
      return this._value
    }
  }
  let processor = new processIdentity<number, string>(100, 'Hello');
  processor.getIdentity();      // Displays 'Hello'
}

{
  class DataStore<T> {
    private _data: Array<T> = new Array(10)

    AddOrUpdate(index: number, item: T) {
      if (index >= 0 && index < 10) {
        this._data[index] = item;
      } else {
        alert('Index is greater than 10')
      }
    }
    GetData(index: number) {
      if (index >= 0 && index < 10) {
        return this._data[index];
      } else {
        return
      }
    }
  }

  let empIDs = new DataStore<number>()
  empIDs.AddOrUpdate(0, 40)
  empIDs.AddOrUpdate(1, 65)
  empIDs.AddOrUpdate(2, 89)
  console.log(empIDs.GetData(0));
}