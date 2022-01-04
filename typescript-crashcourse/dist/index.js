"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = 'Hello'; // can be any type NOT typeset
let age;
x = 22;
age = 30;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hello', true];
// Tuple
let person = [1, 'Bill', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Jill'],
    [3, 'John'],
];
// Union
let pid;
pid = 22;
pid = 'twenty two';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // should equal 1
console.log(Direction1.Down); // should equal 2 -- can change values
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion (2 ways)
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
    getId() {
        return this.id;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
console.log(brad.register());
console.log(brad.getId());
// Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Janitor');
console.log(emp.name);
console.log(emp.register());
