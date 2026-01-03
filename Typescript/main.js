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

const ans1 =  sub(45,56);
logMsg(ans1)

function addSum(a:number,b:number,...c:number[]):number{
  console.log(a,b);
  const ans = c.reduce((curr,prev)=>curr+prev,0)
  return ans
}

const ans2 = addSum(1,2,6,5,5,5,5,3,1,1)
logMsg(ans2)

*/
var errMsg = function (errmsg) {
    throw new Error(errmsg);
};
var StringorNumber = function (value) {
    if (typeof value === 'string') {
        return "This is String Type";
    }
    if (isNumber(value)) {
        return "This is Number";
    }
    return errMsg('Please Give a Valid Input');
};
function isNumber(value) {
    return typeof value === 'number' ? true : false;
}
StringorNumber(45);
StringorNumber("Hello");
StringorNumber(true);
