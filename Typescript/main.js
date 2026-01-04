/*
let first_name:string = "Anurag"
console.log(first_name);

let last_name = "Raj"
console.log(last_name);

let no1:number = 45
let no2:number = 0
console.log(no1/no2);


/////////////////Functions///////////////////////

function sum(a:number,b:number):number{
  return a+b
}

let ans = sum(45,56);
console.log(ans);


///////////////Union Type//////////////////////////

let isActive : number | string | boolean
isActive = "Hello"
isActive = true
isActive = 1
console.log(isActive);

let reg:RegExp = /\w+/g
console.log(reg);

//////////////////////Arrays//////////////////////////

let stringArr:(string|number)[] =  []
stringArr.push("Hello")
stringArr.push(45)

let value:(boolean | any)[] = []
value = stringArr

console.log(value);

/////////////////////////////Tuples//////////////////////

let Tuple:[string,number,boolean] = ["Typescript",45,false]
let arr:(string|number|boolean)[] = ["Typescript",45,false]
console.log(Tuple);

arr = Tuple
// Tuple = arr

let MyObj:{
  name:any,
  abb:string
} = {
  name:"Typescript",
  abb:"TS"
}

console.log(MyObj['name']);
console.log(MyObj.abb);

delete MyObj.name

console.log(MyObj);


// let myObj:object = []

///////////////////////////////Interfaces///////////////////////////////////

// interface User{
//   name:string,
//   isActive?:boolean,
//   books:(string | number)[]
// }

// let aj = {
//   name:"Anurag",
//   isActive:true,
//   books:["C++ Primer","resnick haliday"]
// }

// let mv:User = {
//   name:"Manoj",
//   books:["C++ Primer","resnick haliday"]
// }

// mv = aj
// aj = mv
interface User{
  name:string,
  isActive?:boolean,
  skills:(string | number)[]
}

let User1:User = {
  name:"someone",
  isActive:true,
  skills:["Scrolling Reels"]
}

function Intro(user:User):string{
  if (user['name']===undefined) {
    return `I am unknown with skills ${user['skills']}`
  }

  return `Hello I am ${user['name']} and Skills i have is ${user.skills}`
}

const data = Intro(User1)
console.log(data);


enum Grade{
  U = 45,
  V,
  W,
  X
}

console.log(Grade.W);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Type Alises

type StringtoBool = number | string | boolean

let value1:StringtoBool = "Typescript"

let name1:'Anurag' | 'Manoj'

console.log(value1);

///////////////////////////////////////////////////Functions //////////////////////////////////////////////////////////////////

type mathFunction = (a:number,b:number)=>number

const add = (a:number,b:number):number=>{
  return a+b
}

const sub:mathFunction = (a,b)=>{
  return a-b
}

function logMsg(message:any):void{
  console.log(message);
}


// const ans1 =  sub(45,56);
// logMsg(ans1)

function addSum(a:number,b:number,...c:number[]):number{
  console.log(a,b);
  const ans = c.reduce((curr,prev)=>curr+prev,0)
  return ans
}

const ans2 = addSum(1,2,6,5,5,5,5,3,1,1)
// logMsg(ans2)


const errMsg = (errmsg:string):never=>{
  throw new Error(errmsg)
}

const StringorNumber =(value:any):string=>{
  if (typeof value === 'string') {
    return `This is String Type`
  }
  if (isNumber(value)) {
    return `This is Number`
  }

  return errMsg('Please Give a Valid Input')
}

function isNumber(value:any):boolean{
  return typeof value === 'number' ? true : false
}

StringorNumber(45)
StringorNumber("Hello")
StringorNumber(true)

*/
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
var a = "Hello";
var b = a;
var c = a;
var name1 = "Anurag";
var addorConcat = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
var ans = addorConcat(45, 56, 'add');
console.log(typeof ans);
console.log(ans);
// Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// const year = document.getElementById('year')! as HTMLElement
// const thisYear:string = new Date().getFullYear().toString()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Class and Objects
var Coder = /** @class */ (function () {
    function Coder(name, age, lang, music) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    Coder.prototype.getAge = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " year's Old"));
    };
    return Coder;
}());
var coder1 = new Coder("Anurag Raj", 21, ["Typescript,Javascript"], "Classical");
coder1.getAge();
var ProCoder = /** @class */ (function (_super) {
    __extends(ProCoder, _super);
    function ProCoder(computer, name, age, lang, music) {
        var _this = _super.call(this, name, age, lang, music) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    ProCoder.prototype.getLang = function () {
        console.log("This Language They Follow is ".concat(this.lang));
    };
    return ProCoder;
}(Coder));
var coder2 = new ProCoder("Predator", "Anurag", 21, ["Typescript,Node,Python,C++,Java"], "Classical");
coder2.getLang();
var Guitarist = /** @class */ (function () {
    function Guitarist(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name,
            this.instrument = instrument;
    }
    Guitarist.prototype.play = function (action) {
        return "".concat(this.name, " ").concat(action, " the ").concat(this.instrument);
    };
    return Guitarist;
}());
var guitar = new Guitarist("Anurag", "guitar");
console.log(guitar.play("strums"));
//////////////////////////////////Static Keyword in Class/////////////////////////////////////////////
var Peeps = /** @class */ (function () {
    function Peeps(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    Peeps.getCount = function () {
        return Peeps.count;
    };
    Peeps.count = 0;
    return Peeps;
}());
var name2 = new Peeps("A");
var name3 = new Peeps("B");
var name4 = new Peeps("C");
console.log(Peeps.getCount());
/////////////////////////////Create A dataset of a langauge taht a developer Knows//////////////////////////////////////
var Language = /** @class */ (function () {
    function Language() {
        this.dataState = [];
    }
    Object.defineProperty(Language.prototype, "GetLang", {
        get: function () {
            return this.dataState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Language.prototype, "SetLang", {
        set: function (value) {
            if (Array.isArray(value) && value.every(function (el) { return typeof el === 'string'; })) {
                this.dataState = value;
                return;
            }
            throw new Error("This Data is not of Type String Array");
        },
        enumerable: false,
        configurable: true
    });
    return Language;
}());
var lang = new Language();
lang.SetLang = ["Rust", "Golang", "Typescript", "C++"];
console.log(lang.GetLang);
