"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "Aravind";
var myAge = 41;
var can = true;
var any = 1;
//any = "asd";
//document.getElementById("tsStuff").innerHTML = "My Name is" + myName ;
function greet(pram) {
    return "Hello" + pram;
}
var user = "aravind";
console.log(greet(user));
document.write("My nam eis as" + typeof (myName) + "<br />");
var strToNum = parseInt("6");
var numToStr = 5;
document.write("num to string " + typeof (numToStr.toString()) + "<br />");
var PI = 3.14;
var superman = {
    realName: "clark kent",
    superName: "Super man"
};
document.write(superman.superName + "more to come " + superman.realName + "<br />");
var employess = ["bb", "cc", "dd"];
employess.push("44");
var suppp = [];
suppp.push({
    realName: "", superName: ""
});
var sampleLet = 123;
var varSmaple = 123;
//let sampleLet= 456;
if (true) {
    var sampleLet_1 = 456;
    var varSmaple = 5565;
}
document.write(sampleLet + "<br />");
document.write(varSmaple + "<br />");
var getSum = function (num1, num2) {
    return num1 + num2;
};
var tthesum1 = getSum(5, 3);
document.write("5+2 =" + tthesum1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
//var theDiff = getDiff()
document.write("5-2-4" + getDiff(5) + "<br />");
document.write("5-2-4" + getDiff(5, 2, 3) + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("sum:" + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
var addOne = function (x) { return x + 1; };
document.write("add oe" + addOne(1) + "<br />");
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal("spot", "hfhgf");
spot.ownerInfo();
spot.weight = 100;
document.write(" spot weight is " + spot.weight + "<br />");
document.write("num of  animals " + Animal.howManyAnimals() + "<br />");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("grover", "tommy");
document.write("num of  animals " + Animal.howManyAnimals() + "<br />");
document.write("is a Dog an Animal: " + (grover instanceof Animal) + "<br />");
document.write("Does the gorver ob has name : " + ('name' in grover) + "<br />");
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with" + this.wheels + " wheeks" + "<br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("The BiCylce drives with" + this.wheels + " wheeks" + "<br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
