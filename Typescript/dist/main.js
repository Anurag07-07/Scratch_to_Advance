"use strict";
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



// function main(a:number,b:number,...c:number[]){
//   console.log(a);
//   console.log(b);
//   let ans = c.reduce((prev,curr)=>prev+curr,0)
//   console.log(ans);
// }

// main(4,5,6,1,7,9)

/////////////////Type Assertions///////////////////////

type One = string
type Two = string | number
type Three = "Hello"

let a:One = "Hello"
let b = a as Two
let c = a as Three

let name1 = <string | number>"Anurag"


let addorConcat = (a:number,b:number,c:'add' | 'concat'):number | string=>{
  if (c==='add') {
    return a+b
  }
  return ''+a+b;
}

let ans:number = addorConcat(45,56,'add') as number
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
class Coder{
  constructor(public readonly name:string,private age:number,protected lang:string[],public music:string){
    this.name = name
    this.age = age
    this.music = music
    this.lang = lang
  }

  public getAge(){
    console.log(`${this.name} is ${this.age} year's Old`);
  }
}

const coder1 = new Coder("Anurag Raj",21,["Typescript,Javascript"],"Classical")
coder1.getAge()

class ProCoder extends Coder{
  constructor(public computer:string,name:string,age:number,lang:string[],music:string,){
    super(name,age,lang,music);
    this.computer = computer
  }

  public getLang(){
    console.log(`This Language They Follow is ${this.lang}`);
  }
}

const coder2 = new ProCoder("Predator","Anurag",21,["Typescript,Node,Python,C++,Java"],"Classical")
coder2.getLang()


////////////////////////////////Interface in Class/////////////////////////////////////////
interface Musician{
  name:string,
  instrument:string
  play(action:string):string
}


class Guitarist implements Musician{
  constructor(public name:string,public instrument:string){
    this.name = name,
    this.instrument = instrument
  }
  play(action: string): string {
      return `${this.name} ${action} the ${this.instrument}`
  }
}

const guitar = new Guitarist("Anurag","guitar")
console.log(guitar.play("strums"));

//////////////////////////////////Static Keyword in Class/////////////////////////////////////////////


class Peeps{
  static count:number = 0

  static getCount():number {
    return Peeps.count
  }

  public id:number

  constructor(public name:string){
    this.name = name
    this.id = ++Peeps.count
  }
}

const name2 = new Peeps("A")
const name3 = new Peeps("B")
const name4 = new Peeps("C")

console.log(Peeps.getCount());


/////////////////////////////Create A dataset of a langauge taht a developer Knows//////////////////////////////////////
//Getter and Setter in Classes
class Language{
  private dataState:string[]
  constructor(){
    this.dataState = []
  }

  public get GetLang():string[]{
    return this.dataState
  }

  public set SetLang(value:string[]){
    if (Array.isArray(value) && value.every((el)=>typeof el === 'string')) {
      this.dataState = value
      return
    }
    throw new Error ("This Data is not of Type String Array")
  }
}

const lang = new Language()
lang.SetLang = ["Rust","Golang","Typescript","C++"]
console.log(lang.GetLang);
*/
Object.defineProperty(exports, "__esModule", { value: true });
//////////////////////////////////////////////Index Signature/////////////////////////////////////////
// interface TranscationObj{
//   readonly [key:string]:number
//   Data1:number
//   Data2:number
//   Data3:number
// }
// let data:TranscationObj = {
//   Data1:45,
//   Data2:45,
//   Data3:45,
// }
// console.log(data.Data1);
// let data1:string = 'Data1'
// console.log(data[data1]);
// let ans = 0
// for (const key in data) {
//   ans+=data[key as keyof TranscationObj]
// }
// console.log(ans);
// type Streams =  'salary' | 'bonus' | 'sidehustle' | string
// type Incomes = Record<Streams,number | string>
// let monthIncome:Incomes = {
//   salary:200,
//   bonus:500,
//   sidehustle:1000
// }
// let sum = 0
// for (const key in monthIncome) {
//   console.log(monthIncome[key as keyof Incomes]);
//   sum += monthIncome[key as keyof Incomes] as number
// }
// console.log(sum);
// interface Users{
//   [key:string] : string
//   name:string,
//   email:string
// }
// type Streams = 'salary' | 'bonus' | 'sidehustle'
// type Incomes = Record<Streams, number>
// let IncomeStreams:Incomes = {
//   salary:2000.,
//   bonus:4512213,
//   sidehustle:4544321
// }
// let sum = 0;
// for (const key  in IncomeStreams) {
//   sum = sum + IncomeStreams[key as keyof Incomes]  
// }
// console.log(sum);
// (Object.keys(IncomeStreams) as (keyof typeof IncomeStreams)[]).forEach((v)=>{
//   console.log(v);
// })
// const echo = <T>(arg:T):T=>arg
// const isObj = <T>(arg:T):boolean=>{
//   return (typeof arg==='object' && !Array.isArray(arg) && arg!=null)
// }
// interface BoolCheck<T>{
//   arg:T
//   is:boolean
// }
// const isTrue  = <T>(arg:T):BoolCheck<T>=>{
//   if(Array.isArray(arg) && !arg.length){
//     return {arg,is:false};
//   }
//   if(isObj(arg) && Object.keys(arg as object).length){
//     return {arg,is:false}
//   }
//   return {arg,is:!!arg}
// }
// console.log(
// isTrue({name:"Anurag"}),
// isTrue([1,2,3,4,5]),
// isTrue(false),
// isTrue("Javascript")
// )
// interface HASID{
//   id:number
// }
// const processUser = <T extends HASID>(user:T):T=>{
//   return user
// }
// let users = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     }
//   }
// ]
// const isUser = <T extends HASID,K extends keyof T>(users:T[],key:K):T[K][]=>{
//   return users.map((user)=>user[key])
// }
// class StateObject<T>{
//   private data:T
//   constructor(value:T){
//     this.data = value
//   }
//   get state():T{
//     return this.data
//   }
//   set state(value:T){
//     this.data = value
//   }
// }
// const s = new StateObject<string | number | string[]>(['a','b','c'])
// type Stream = 'salary' | 'bonus' | 'sidehustle'  
// type StreamObject = Record<Stream ,string | number>
// interface Transaction{
//   [key:string]:number
//   Pizza:number,
//   Burger:number
// }
// const TransactionObj = {
//   Pizza:10,
//   Burger:20
// }
// let sum = 0
// for (const key in TransactionObj) {
//   console.log(TransactionObj[key as keyof typeof TransactionObj]);
// }
// console.log(sum);
// type Streams = 'salary' | 'bonus' | 'freelance'
// type Incomes = Record<Streams,number>
// const mI:Incomes = {
//   salary:45452,
//   bonus:544532121312131,
//   freelance:453212112121321
// }
// let sum = 0;
// for (const key in mI) {
//   sum+=mI[key as keyof typeof mI]
// }
// console.log(sum);
// const echo = <T>(arg:T):T=> arg
const isObj = (arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg != null) {
        return true;
    }
    return false;
};
console.log(isObj({ name: 'Anurag' }), isObj([1, 2]), isObj(null), isObj("Hello"));
//# sourceMappingURL=main.js.map