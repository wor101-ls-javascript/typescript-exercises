// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = 'Hello'  // can be any type NOT typeset
let age: number

x = 22
age = 30

// Arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'hello', true]

// Tuple
let person: [number, string, boolean] = [1, 'Bill', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'Jill'],
  [3, 'John'],
]

// Union
let pid: string | number
pid = 22
pid = 'twenty two'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up)  // should equal 1
console.log(Direction1.Down) // should equal 2 -- can change values

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right= 'Right',
}

console.log(Direction2.Left)

// Objects
  // types can be used with primitives and unions
type User = {
  id: number,
  name: string,
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion (2 ways)
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number) {
  console.log(message)
}

// Interfaces (similar to custom types)
  // types can be used with primitives and unions
  // interfaces cant be used with primitives or unions
interface UserInterface {
  readonly id: number,     
  name: string,
  age?: number,             // ? makes optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number,     
  name: string,
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number  // also private, protected (this class or any extended class)
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }

  getId() {
    return this.id
  } 
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

console.log(brad.register())
console.log(brad.getId())

// Subclass
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Janitor')

console.log(emp.name)
console.log(emp.register())

// Generics (create re-usable components with placeholders for Type)
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

strArray.push('hello')