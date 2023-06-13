# TypeScript

## TypeScript 简介
TypeScript 是 JavaScript 的一个超集，在 JavaScript 上增加了类型静态检测等新特性，可在编译期间检查语法，词法等，降低代码的 bug。

使用 TypeScript 需要安装 TypeScript 编译器，或 其他转义器。

## 简单使用
安装了 TypeScript 编译器之后，可使用 tsc 将 *.ts 文件编译成 *.js。不带参数情况下将编译目录下全部的 ts 文件，也可以指定文件路径编译。
除了使用命令行 参数的方式，也支持配置文件的形式。可以在项目根目录下创建 tsconfig.json。使用 tsc --init 快速生成简单配置的文件。

### 类型断言
类型断言指定变量为某种类型，告诉编译器无需检查类型，“自己能确保是什么类型”。
类型断言有两种写法。一种使用 `as` 语法：
`(someValue as string).toUpperCase()`
另一种使用“尖括号”:
`(<string>someValue).toUpperCase()`

::: tip
    `as` 是首选语法。使用`<>`进行类型转换时，某些 TypeScript 应用程序 （例如JSX）可能会发生混淆。
:::

### 字面量类型
字面量类型以对象、数组、函数或够着函数类型字面量的形式编写，用于将其他类型组合为新类型。
定义创建一个 testResult 的字面量类型，它可以包含两个 `string` 值，一个 `number` 值之一:
```typescript
type code = 20;
type testResult = "pass" | "fail" | code
let myResult: testResult;
myResult = "pass";
myResult = "fail";
myResult = 20;
myResult = 2; // - error: Type '2' is not assignable to type 'testResult'.
```