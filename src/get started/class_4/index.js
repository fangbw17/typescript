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
// version 1.0
{
    // Car Class
    var Car_1 = /** @class */ (function () {
        function Car(make, color, doors) {
            if (doors === void 0) { doors = 4; }
            this._make = make;
            this._color = color;
            this._doors = doors;
            Car.numberOfCars++;
        }
        Object.defineProperty(Car.prototype, "make", {
            get: function () {
                return this._make;
            },
            set: function (make) {
                this._make = make;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "color", {
            get: function () {
                return "The color of the car is " + this._color;
            },
            set: function (color) {
                this._color = color;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "doors", {
            get: function () {
                return this._doors;
            },
            set: function (doors) {
                if (doors % 2 === 0) {
                    this._doors = doors;
                }
                else {
                    throw new Error("Doors must be an even number");
                }
            },
            enumerable: false,
            configurable: true
        });
        // Methods
        Car.prototype.accelerate = function (speed) {
            return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
        };
        Car.prototype.brake = function () {
            return "".concat(this.worker(), " is braking with the standard braking system.");
        };
        Car.prototype.turn = function (direction) {
            return "".concat(this.worker(), " is turning ").concat(direction);
        };
        Car.prototype.worker = function () {
            return this._make;
        };
        // 静态方法
        Car.getNumberOfCars = function () {
            return Car.numberOfCars;
        };
        // 静态属性
        Car.numberOfCars = 0;
        return Car;
    }());
    var car = new Car_1("ford", "black", 2);
    console.log(car.color);
    // console.log(car._color);
    console.log(Car_1.getNumberOfCars());
    var ElectricCar = /** @class */ (function (_super) {
        __extends(ElectricCar, _super);
        function ElectricCar(make, color, doors, range) {
            if (doors === void 0) { doors = 2; }
            if (range === void 0) { range = 0; }
            var _this = _super.call(this, make, color, doors) || this;
            _this._range = range;
            return _this;
        }
        ElectricCar.prototype.brake = function () {
            return "electric-car brake";
        };
        ElectricCar.prototype.charge = function () {
            console.log(this.worker() + " is charging.");
        };
        return ElectricCar;
    }(Car_1));
    var electric = new ElectricCar("ford", "blue", 4, 10);
    electric.charge();
    console.log(electric.brake());
}
// version 2.0
{
    // Car Class
    var Car_2 = /** @class */ (function () {
        function Car(make, color, doors) {
            if (doors === void 0) { doors = 4; }
            this._make = make;
            this._color = color;
            this._doors = doors;
            Car.numberOfCars++;
        }
        Object.defineProperty(Car.prototype, "make", {
            get: function () {
                return this._make;
            },
            set: function (make) {
                this._make = make;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "color", {
            get: function () {
                return "The color of the car is " + this._color;
            },
            set: function (color) {
                this._color = color;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "doors", {
            get: function () {
                return this._doors;
            },
            set: function (doors) {
                if (doors % 2 === 0) {
                    this._doors = doors;
                }
                else {
                    throw new Error("Doors must be an even number");
                }
            },
            enumerable: false,
            configurable: true
        });
        // Methods
        Car.prototype.accelerate = function (speed) {
            return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
        };
        Car.prototype.brake = function () {
            return "".concat(this.worker(), " is braking with the standard braking system.");
        };
        Car.prototype.turn = function (direction) {
            return "".concat(this.worker(), " is turning ").concat(direction);
        };
        Car.prototype.worker = function () {
            return this._make;
        };
        // 静态方法
        Car.getNumberOfCars = function () {
            return Car.numberOfCars;
        };
        // 静态属性
        Car.numberOfCars = 0;
        return Car;
    }());
    var car = new Car_2("ford", "black", 2);
    console.log(car.color);
    // console.log(car._color);
    console.log(Car_2.getNumberOfCars());
    var ElectricCar = /** @class */ (function (_super) {
        __extends(ElectricCar, _super);
        function ElectricCar(make, color, doors, range) {
            if (doors === void 0) { doors = 2; }
            if (range === void 0) { range = 0; }
            var _this = _super.call(this, make, color, doors) || this;
            _this._range = range;
            return _this;
        }
        ElectricCar.prototype.brake = function () {
            return "electric-car brake";
        };
        ElectricCar.prototype.charge = function () {
            console.log(this.worker() + " is charging.");
        };
        return ElectricCar;
    }(Car_2));
    var electric = new ElectricCar("ford", "blue", 4, 10);
    electric.charge();
    console.log(electric.brake());
}
{
    var BuildArray = /** @class */ (function () {
        function BuildArray(items, sortOrder) {
            if (sortOrder === void 0) { sortOrder = 'ascending'; }
            this._items = items;
            this._sortOrder = sortOrder;
        }
        Object.defineProperty(BuildArray.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (items) {
                this._items = this.items;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BuildArray.prototype, "sortOrder", {
            get: function () {
                return this._sortOrder;
            },
            set: function (sortOrder) {
                this._sortOrder = this.sortOrder;
            },
            enumerable: false,
            configurable: true
        });
        BuildArray.prototype.buildArray = function () {
            var randomNumbers = [];
            var nextNumber;
            for (var counter = 0; counter < this.items; counter++) {
                nextNumber = Math.ceil(Math.random() * (100 - 1));
                if (randomNumbers.indexOf(nextNumber) === -1) {
                    randomNumbers.push(nextNumber);
                }
                else {
                    counter--;
                }
            }
            if (this.sortOrder === 'ascending') {
                return randomNumbers.sort(this.sortAscending);
            }
            else {
                return randomNumbers.sort(this.sortDecending);
            }
        };
        BuildArray.prototype.sortDecending = function (a, b) {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        BuildArray.prototype.sortAscending = function (a, b) {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        return BuildArray;
    }());
    var testArray1 = new BuildArray(12, 'ascending');
    var testArray2 = new BuildArray(8, 'descending');
    console.log(testArray1.buildArray());
    console.log(testArray2.buildArray());
}
var Test = /** @class */ (function () {
    function Test(te) {
        if (te === void 0) { te = 10; }
        this._te = te;
    }
    return Test;
}());
var test = new Test(11);
var test1 = new Test(12);
console.log(test._te);
