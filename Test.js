// // // // // // // // // // // // // // // // "use strict";

// // // // // // // // // // // // // // // // function hello(text) {
// // // // // // // // // // // // // // // //     return `Hello, ${text}!`;
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // let res1 = hello("World");
// // // // // // // // // // // // // // // // console.log(res1);

// // // // // // // // // // // // // // // // let res2 = hello(1);
// // // // // // // // // // // // // // // // console.log(res2);
// // // // // // // // // // // // // // // // const birthday = '18.04.1982';

// // // // // // // // // // // // // // // // const age = someCode(birthday);
// // // // // // // // // // // // // // // // function someCode(birthday) {
// // // // // // // // // // // // // // // //     const birthYear = parseInt(birthday.split('.')[2]);
// // // // // // // // // // // // // // // //     const currentYear = new Date().getFullYear();
// // // // // // // // // // // // // // // //    return currentYear - birthYear;
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(age);

// // // // // // // // // // // // // // // // var x = 10;

// // // // // // // // // // // // // // // // function test() {
// // // // // // // // // // // // // // // //   console.log(x); // ❌ TDZ
// // // // // // // // // // // // // // // //   var x = 20;
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(x);


// // // // // // // // // // // // // // // // test()

// // // // // // // // // // // // // // // // let value=1;
// // // // // // // // // // // // // // // // let temp=String(value);
// // // // // // // // // // // // // // // // console.log(typeof temp); // "string"
// // // // // // // // // // // // // // // // console.log(temp);


// // // // // // // // // // // // // // // // let apple="2"
// // // // // // // // // // // // // // // // let orange="3"
// // // // // // // // // // // // // // // // console.log(+apple + +orange);

// // // // // // // // // // // // // // // // let [a,b,c]=[1,2,3];
// // // // // // // // // // // // // // // // console.log(a);



// // // // // // // // // // // // // // // let ar = [1, 2, 3, 11, 7, 5, 1, 2, 17, 9];
// // // // // // // // // // // // // // // let sorted=ar.sort((a,b)=>a-b);
// // // // // // // // // // // // // // // console.log(sorted);

// // // // // // // // // // // // // // // console.log("2">"12");

// // // // // // // // // // // // // // // Loops
// // // // // // // // // // // // // // // let k=10;
// // // // // // // // // // // // // // // while(k){
// // // // // // // // // // // // // // //     console.log(k--);
// // // // // // // // // // // // // // //     // k--;

// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // let fruits = ["apple", "banana", "orange", "grapes", "toffee"]
// // // // // // // // // // // // // // // for(let i=0;i<fruits.length;i++){
// // // // // // // // // // // // // // //     console.log(fruits[i]);
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // for(let i=0;i<3;i++){
// // // // // // // // // // // // // // //     setTimeout(()=>{
// // // // // // // // // // // // // // //         console.log(i)
// // // // // // // // // // // // // // //     },[1000])
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // outer:for(let i=0;i<10;i++){
// // // // // // // // // // // // // // //     if(i==5)break outer;
// // // // // // // // // // // // // // //     console.log(i);

// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // for(let x of fruits){
// // // // // // // // // // // // // // //    process.stdout.write(x + " ")
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // fruits.forEach((x)=> console.log(x));

// // // // // // // // // // // // // // // for(let x in fruits){
// // // // // // // // // // // // // // //     console.log(x);

// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // //!Switch

// // // // // // // // // // // // // // let marks = 50

// // // // // // // // // // // // // // switch (marks) {
// // // // // // // // // // // // // //     case (marks >= 40 && marks < 60):
// // // // // // // // // // // // // //         console.log("Passs");
// // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // //     case (marks >= 60 && marks < 80):
// // // // // // // // // // // // // //         console.log("TOp");
// // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // //     default:
// // // // // // // // // // // // // //         console.log("Fail");
// // // // // // // // // // // // // //         break;
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // //! Function Expression

// // // // // // // // // // // // // // function f1() {
// // // // // // // // // // // // // //     console.log("hello");

// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // f1()
// // // // // // // // // // // // // // let f2=function(){
// // // // // // // // // // // // // //     console.log("Bye")
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // f2()

// // // // // // // // // // // // // // function ask(q, yes, no) {
// // // // // // // // // // // // // //     (confirm(q)) ? yes() : no();
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // function yes() {
// // // // // // // // // // // // // //     console.log("yes");

// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // function no() {
// // // // // // // // // // // // // //     console.log("no");
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // ask("Hello",yes,no);

// // // // // // // // // // // // // // let sayhello = () => confirm("");

// // // // // // // // // // // // // // let ans=sayhello()

// // // // // // // // // // // // // // let k=undefined;
// // // // // // // // // // // // // // let m=1;
// // // // // // // // // // // // // // if(k??m){

// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // let fruits=["apple","banana","grapes","hello"]
// // // // // // // // // // // // // // fruits.forEach(element => {
// // // // // // // // // // // // // //     console.log(element.length);


// // // // // // // // // // // // // // // });
// // // // // // // // // // // // // // let group = {
// // // // // // // // // // // // // //   title: "Our Group",
// // // // // // // // // // // // // //   students: ["John", "Pete", "Alice"],

// // // // // // // // // // // // // //   showList() {
// // // // // // // // // // // // // //     this.students.forEach(
// // // // // // // // // // // // // //       student => alert(this.title + ': ' + student)
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // group.showList();

// // // // // // // // // // // // // // let group = {
// // // // // // // // // // // // // //   title: "Our Group",
// // // // // // // // // // // // // //   students: ["John", "Pete", "Alice"],

// // // // // // // // // // // // // //   showList() {
// // // // // // // // // // // // // //     this.students.forEach(function(student) {
// // // // // // // // // // // // // //       // Error: Cannot read property 'title' of undefined
// // // // // // // // // // // // // //       alert(this.title + ': ' + student);
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // group.showList();

// // // // // // // // // // // // // // function Hello(){
// // // // // // // // // // // // // //     for(let i=0;i<10;i++){
// // // // // // // // // // // // // //         console.log(i);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     console.log("Hello");  
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // function hello(name) {
// // // // // // // // // // // // // //     let phrase = `Hello, ${name}!`;

// // // // // // // // // // // // // //     debugger;  // <-- the debugger stops here

// // // // // // // // // // // // // //     say(phrase);
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // function say(phrase) {
// // // // // // // // // // // // // //     alert(`** ${phrase} ** `)
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // function extractQueryParams() {
// // // // // // // // // // // // //     const params = new URLSearchParams("?page=3&limit=15");
// // // // // // // // // // // // //     const page = Number(params.get("page")) || 1;
// // // // // // // // // // // // //     const limit = Number(params.get("limit")) || 10;

// // // // // // // // // // // // //     debugger; // ⬅️ browser will pause here

// // // // // // // // // // // // //     return { page, limit };
// // // // // // // // // // // // // }

// // // // // // // // // // // // // extractQueryParams();

// // // // // // // // // // // // // let user={};

// // // // // // // // // // // // // user["name"]="Temp"

// // // // // // // // // // // // // console.log(user);
// // // // // // // // // // // // // let fruit = prompt("Which fruit to buy?", "apple");

// // // // // // // // // // // // // let bag = {
// // // // // // // // // // // // //   [fruit]: 5, // the name of the property is taken from the variable fruit
// // // // // // // // // // // // // };

// // // // // // // // // // // // let c=()=>console.log("hello"); 

// // // // // // // // // // // // console.log(typeof(c));
// // // // // // // // // // // // console.log(typeof(Array()));

// // // // // // // // // // // let num=20
// // // // // // // // // // // console.log(num.toString(10));

// // // // // // // // // // console.log(Math.floor(Math.random()*20));

// // // // // // // // // // let i="A".codePointAt()
// // // // // // // // // // console.log(i);
// // // // // // // // // // let z='Z'.codePointAt()
// // // // // // // // // // console.log(z);
// // // // // // // // // // for(let k=i;k<=z;k++){
// // // // // // // // // //     console.log(String.fromCodePoint(k));

// // // // // // // // // // }

// // // // // // // // // let arr = [1, 2, 3, 4, 5, 6]

// // // // // // // // // arr[90] = 5
// // // // // // // // // console.log(arr.length)
// // // // // // // // // arr.splice(6, 84);
// // // // // // // // // arr.length
// // // // // // // // // console.log(arr.length)

// // // // // // // // let arr = ["a", "b"];

// // // // // // // // arr.push(function () {
// // // // // // // //     console.log("52");
// // // // // // // // })

// // // // // // // // arr[2]();

// // // // // // // function sumInput() {

// // // // // // //   let numbers = [];

// // // // // // //   while (true) {

// // // // // // //     let value = prompt("A number please?", 0);

// // // // // // //     if (value === "" || value === null || !isFinite(value)) break;

// // // // // // //     numbers.push(+value);
// // // // // // //   }

// // // // // // //   let sum = 0;
// // // // // // //   for (let number of numbers) {
// // // // // // //     sum += number;
// // // // // // //   }
// // // // // // //   return sum;
// // // // // // // }

// // // // // // // let arr=[1,2,3,4,5]
// // // // // // // console.log(arr);

// // // // // // // let deleted=arr.splice(2,2,1,1)
// // // // // // // console.log(arr);
// // // // // // // console.log(deleted);

// // // // // // let arr = [ 1, 2, 15 ];

// // // // // // arr.sort(function(a, b) { return a - b; });

// // // // // // alert(arr); 

// // // // // let names = 'Bilbo, Gandalf, Nazgul';

// // // // // let arr = names.split(', ');
// // // let arr=[1,2,3,4,5,6,7,8,9]
// // // // let sum=arr.reduce((curr,acc)=>curr+acc,0)
// // // // console.log(sum);
// // // // console.log(arr.find((item)=>item===1));


// // // // let john = { name: "John", age: 25 };
// // // // let pete = { name: "Pete", age: 30 };
// // // // let mary = { name: "Mary", age: 28 };

// // // // let users = [ john, pete, mary ];

// // // // let names = users.map((key,index)=>{
// // // //     console.log(index);
    
// // // //     return key.name
// // // // });

// // // // console.log(names);

// // // let sum=arr.reduce((acc,curr)=>acc+curr,0)
// // // console.log(sum);

// // // console.log(sum/arr.length);

// // let arrayLike = { // has indexes and length => array-like
// //   0: "Hello",
// //   1: "World",
// //   length: 2
// // };
// // for (let item of Array.from(arrayLike)) {
// //     console.log(item);
// // }

// // let map=new Map();

// // for(let i=0;i<5;i++){
// //     map.set(i,i*i);
// // }

// // console.log(map.get(4))

// // for (let [key] of map) {
// //     mp[key] = (mp[key] || 0) + 1;
// // }
// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// // visitedSet has 2 users now

// // check if John visited?
// console.log(visitedSet.has(john)); // true

// // check if Mary visited?
// console.log(visitedSet.has(mary)); // false

// john = null;

// console.log(visitedSet.has(john)); // false (john object was removed from memory)
// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
// let temp=Object.entries(prices)

// temp.map((item,index)=>{
//     item[1]=item[1]*2
//     console.log(index);
// })
// prices=Object.fromEntries(temp)
// console.log(prices);

let arr=["JHON","Pete"]
let [name,surname]=arr
console.log(name);
console.log(surname);
name="hello"
console.log(name);
console.log(arr[0]);

In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

