// version 1.0
{
  // Car Class
  class Car {
    // 静态属性
    private static numberOfCars: number = 0;
    // 品牌
    private _make: string;
    // 颜色
    private _color: string;
    // 门
    private _doors: number;

    constructor(make: string, color: string, doors: number = 4) {
      this._make = make;
      this._color = color;
      this._doors = doors;
      Car.numberOfCars++;
    }

    get make() {
      return this._make;
    }
    set make(make) {
      this._make = make;
    }

    get color() {
      return "The color of the car is " + this._color;
    }
    set color(color) {
      this._color = color;
    }

    get doors() {
      return this._doors;
    }
    set doors(doors) {
      if (doors % 2 === 0) {
        this._doors = doors;
      } else {
        throw new Error("Doors must be an even number");
      }
    }

    // Methods
    accelerate(speed: number): string {
      return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake(): string {
      return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction: "left" | "right"): string {
      return `${this.worker()} is turning ${direction}`;
    }
    protected worker(): string {
      return this._make;
    }
    // 静态方法
    public static getNumberOfCars(): number {
      return Car.numberOfCars;
    }
  }

  const car = new Car("ford", "black", 2);
  console.log(car.color);
  // console.log(car._color);
  console.log(Car.getNumberOfCars());

  class ElectricCar extends Car {
    private _range: number;
    constructor(make: string, color: string, doors = 2, range = 0) {
      super(make, color, doors);
      this._range = range;
    }

    brake(): string {
      return "electric-car brake";
    }

    charge() {
      console.log(this.worker() + " is charging.");
    }
  }

  const electric = new ElectricCar("ford", "blue", 4, 10);
  electric.charge();
  console.log(electric.brake());
}

// version 2.0
{
  interface Vehicle {
    make: string
    color: string
    doors: number
    accelerate(speed: number): string
    brake(): string
    turn(direction: 'left' | 'right'): string
  }
  // Car Class
  class Car implements Vehicle {
    // 静态属性
    private static numberOfCars: number = 0;
    // 品牌
    private _make: string;
    // 颜色
    private _color: string;
    // 门
    private _doors: number;

    constructor(make: string, color: string, doors: number = 4) {
      this._make = make;
      this._color = color;
      this._doors = doors;
      Car.numberOfCars++;
    }

    get make() {
      return this._make;
    }
    set make(make) {
      this._make = make;
    }

    get color() {
      return "The color of the car is " + this._color;
    }
    set color(color) {
      this._color = color;
    }

    get doors() {
      return this._doors;
    }
    set doors(doors) {
      if (doors % 2 === 0) {
        this._doors = doors;
      } else {
        throw new Error("Doors must be an even number");
      }
    }

    // Methods
    accelerate(speed: number): string {
      return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake(): string {
      return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction: "left" | "right"): string {
      return `${this.worker()} is turning ${direction}`;
    }
    protected worker(): string {
      return this._make;
    }
    // 静态方法
    public static getNumberOfCars(): number {
      return Car.numberOfCars;
    }
  }

  const car = new Car("ford", "black", 2);
  console.log(car.color);
  // console.log(car._color);
  console.log(Car.getNumberOfCars());

  class ElectricCar extends Car {
    private _range: number;
    constructor(make: string, color: string, doors = 2, range = 0) {
      super(make, color, doors);
      this._range = range;
    }

    brake(): string {
      return "electric-car brake";
    }

    charge() {
      console.log(this.worker() + " is charging.");
    }
  }

  const electric = new ElectricCar("ford", "blue", 4, 10);
  electric.charge();
  console.log(electric.brake());
}

{
  class BuildArray {
    private _items: number
    private _sortOrder: 'ascending' | 'descending'

    constructor(items: number, sortOrder: 'ascending' | 'descending' = 'ascending') {
      this._items = items
      this._sortOrder = sortOrder
    }
    get items() {
      return this._items
    }
    set items(items) {
      this._items = this.items
    }
    get sortOrder() {
      return this._sortOrder
    }
    set sortOrder(sortOrder) {
      this._sortOrder = this.sortOrder
    }

    buildArray(): number[] {
      let randomNumbers: number[] = []
      let nextNumber: number
      for (let counter = 0; counter < this.items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 -1))
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber)
        } else {
          counter--
        }
      }
      if (this.sortOrder === 'ascending') {
        return randomNumbers.sort(this.sortAscending)
      } else {
        return randomNumbers.sort(this.sortDecending)
      }
    }
    private sortDecending(a: number, b: number) {
      if (a > b) {
        return -1
      } else if (b > a) {
        return 1
      } else {
        return 0
      }
    }
    private sortAscending(a: number, b: number) {
      if (a > b) {
        return 1
      } else if (b > a) {
        return -1
      } else {
        return 0
      }
    }
  }

  let testArray1 = new BuildArray(12, 'ascending')
  let testArray2 = new BuildArray(8, 'descending')
  console.log(testArray1.buildArray());
  console.log(testArray2.buildArray());
}


class Test {
  _te: number
  constructor(te = 10) {
    this._te = te
  }
}

const test =  new Test(11)
const test1 =  new Test(12)
console.log(test._te);