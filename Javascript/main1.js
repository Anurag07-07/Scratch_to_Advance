// //Let var Const
// //Functions
// //Loops
// //Objects
// //Arrays
// let name = "Javascript"
// console.log(name);

// const name2 = "JS"
// // name2 = "TS"
// console.log(name2);
// (name2)

// //Non Primitive Types
// let arr = [];

// //add from last
// arr.push(0)
// arr.push(1)
// arr.push(2)

// //Delete from last
// arr.pop()

// //Add From Start
// arr.unshift(44545)

// //Delete from start
// arr.shift()

// //Add at any index
// arr[2] = 456

// console.log(arr);


// /////Object////////////////

// let obj = {
//   lang:"Javascript",
//   abb:"JS"
// }

// console.log(obj);
// console.log(obj.abb);
// console.log(obj['lang']);

// //Add
// obj.date = "30/12/25"
// console.log(obj);

// //Update
// obj.lang = "Typescript"
// obj['abb'] = "TS"
// console.log(obj);

// //Delete
// delete obj.lang
// console.log(obj);


// /////////Functions//////////////////

// let func1 = function(){
//   console.log("This is Functional Equation");
// }

// let func2 = ()=>console.log("This is Function Equation Arrow Function");

// func1()
// func2()

// function func3(){
//   console.log("Functional Expression");
// }

// func3();


// //IIFE
// (function(){
//   console.log("IIFE Function");
// })();
// (()=>{
//   console.log(`IIFE Arrow Function`);
// })()

// ////////////Loops///////////////

// let arr1 = [1,2,3,4,5,6]

// //For Of
// for(let item of arr1) {
//   console.log(item);
// }

// //For in
// for (const key in obj) {
//   console.log(key,obj[key]);
// }

// //Map Foreach Filter Reduce Find 
// let ans1 = arr1.filter((x)=>x%2==0).map((x)=>x*2)
// console.log(ans1);

// let obj1 = {
//   name:"Javascript",
//   abb:"JS"
// }

// Object.keys(obj1).forEach((key)=>{
//   console.log(key);
// })
// Object.values(obj1).forEach((value)=>{
//   console.log(value);
// })
// Object.entries(obj1).forEach(([key,value])=>{
//   console.log(key,value);
// })


// let ans = arr1.find((x)=>x==5)
// console.log(ans);

// //Reduce 
// let sum = arr1.reduce((prev,curr)=>prev+curr,0)
// console.log(sum);


////////////////////////////////////////////////////////////////////////////////////////DAY2//////////////////////////////////////////////////////////////////////

// let obj = {
//   name:"Anurag"
// }

// console.log(obj.toString());
// console.log(obj.__proto__);


// //Custom Prototype
// let parent = {
//   greet:function(){
//     console.log("Hello");
//   }
// } 

// let student = {
//   name:"Anurag"
// }

// student.__proto__ = parent
// student.greet();


// //Function Prototype
// function Greet(name){
//   this.name = name
// }

// Greet.prototype.greet = function(){
//   console.log(`Hello This is Greet Prototype Function ${this.name}`);
// }

// const obj1 = new Greet("Anurag")

// obj1.greet()

// //////////////////////Bind Apply and Call//////////////////////////

// let user = {
//   name:"Anurag",
//   greet:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// user.greet()
// // let fn = user.greet.bind(user)
// let fn = user.greet

// function greet(city){
//   console.log(this.name + " from "+city);
// }

// const user1 = {
//   name:"Anurag"
// }

// //Call
// greet.call(user1,"Greater Noida")
// //Apply
// greet.apply(user1,["Greater Noida"])
// //Bind
// const newFn = greet.bind(user,"Greater Noida")
// newFn()

// ////////////////////////////////////////////////////////////////////////////////////////////

// //Prototype Based Language
// let human = {
//   study:function(){
//     console.log(`Human Study`);
//   }
// }

// let studybook = Object.create(human)
// studybook.read = function(){
//   console.log(`I read Gullivar Travels`);
// }

// studybook.read()
// studybook.study()

// /////////////////////////////////////////////////Class///////////////////////////////

// /*
// class Car{
//   constructor(name,color){
//     this.name = name
//     this.color = color
//   }

//   intro(){
//     console.log(`The Car Color is ${this.color} and Car Name is ${this.name}`);
//   }
// }

// const car = new Car("Buggati Veyron","Red White")
// car.intro()
// */

// class Car{
//    static Engine= "V12"
//   constructor(name,color){
//     this.name = name
//     this.color = color
//   }

//   greet(){
//     console.log(`This car is  ${Engine}`);
//   }
// }

// console.log(Car.Engine);

//////////////////////////////////////////////////////////////////////////////////////DAY3/////////////////////////////////////////////////////////////////////////////////
// CallBack and Fucntional Arguments

function sum(a,b){
  return a+b
}

function mul(a,b){
  return a*b
}

function machine(a,b,cb){
  return cb(a,b)
}

const ans = machine(45,56,mul)
console.log(ans);

///////////////////////Promises

//Read File
const fs = require('fs')
function ReadFileP(file){
  return new Promise(function(resolve,reject){
    fs.readFile(file,'utf-8',(err,data)=>{
      if (err) {
        reject("Something Went Wrong")
      }else{
        resolve(data)
      }
    })
  })
}


async function main() {
  try {
    const value = await ReadFileP('')
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

main()

// ReadFileP('').then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

////////////////////////////////////////////////////////////////////

// TimeOut CallBack Hell 

function setTimeOutP(s){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },s*1000)
  })
}

setTimeOutP(1).then(()=>{
  console.log(`1 Sec Completed`);
  setTimeOutP(3).then(()=>{
    console.log(`3 sec Completed`);
    setTimeOutP(5).then(()=>{
      console.log(`5 Sec Completed`);
    })
  })
})

//Better way

setTimeOutP(1).then(()=>{
  console.log(`1 sec Completed`);
  return setTimeOutP(3)
}).then(()=>{
  console.log(`3 sec Completed`);
  return setTimeOutP(5)
}).then(()=>{
  console.log(`5 sec Completed`);
})

///////////////////////////////////////////////////////////////Async Await///////////////////////////

async function main(){
  await setTimeOutP(1)
  console.log(`1 sec completed`);
  await setTimeOutP(3)
  console.log(`3 sec completed`);
  await setTimeOutP(5)
  console.log(`5 sec completed`);
}
main()

