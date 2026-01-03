var first_name = "Anurag";
console.log(first_name);
var last_name = "Raj";
console.log(last_name);
var no1 = 45;
var no2 = 0;
console.log(no1 / no2);
/////////////////Functions///////////////////////
function sum(a, b) {
    return a + b;
}
var ans = sum(45, 56);
console.log(ans);
///////////////Union Type//////////////////////////
var isActive;
isActive = "Hello";
isActive = true;
isActive = 1;
console.log(isActive);
var reg = /\w+/g;
console.log(reg);
//////////////////////Arrays//////////////////////////
var stringArr = [];
stringArr.push("Hello");
stringArr.push(45);
var value = [];
value = stringArr;
console.log(value);
/////////////////////////////Tuples//////////////////////
var Tuple = ["Typescript", 45, false];
var arr = ["Typescript", 45, false];
console.log(Tuple);
arr = Tuple;
// Tuple = arr
var MyObj = {
    name: "Typescript",
    abb: "TS"
};
console.log(MyObj['name']);
console.log(MyObj.abb);
delete MyObj.name;
console.log(MyObj);
var User1 = {
    name: "someone",
    isActive: true,
    skills: ["Scrolling Reels"]
};
function Intro(user) {
    if (user['name'] === undefined) {
        return "I am unknown with skills ".concat(user['skills']);
    }
    return "Hello I am ".concat(user['name'], " and Skills i have is ").concat(user.skills);
}
var data = Intro(User1);
console.log(data);
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 45] = "U";
    Grade[Grade["V"] = 46] = "V";
    Grade[Grade["W"] = 47] = "W";
    Grade[Grade["X"] = 48] = "X";
})(Grade || (Grade = {}));
console.log(Grade.W);
