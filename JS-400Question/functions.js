//lamba(Arrow) function
// const ArrFunc= ()=>{
//     console.log("this is arrow funciton");
// }
// ArrFunc(console.log("hi"));

//first class function
// const handler = ()=>console.log("this is handler");
// handler()

//first order function
// const fol=()=>console.log("doesn't accept any other function as an arg");
// fol()

//higher order function
// const fol=()=>console.log("this is fol");
// const hol = returnFol=>returnFol()
// hol(fol)

//Another example of hol func
// const fol =()=>console.log("i am first order function");
// const hol=abc=>abc("iii")
// hol(fol)

//unary function
// const unaryVar = a=>console.log("i am unary");
// unaryVar()

//currying function
// const multiArg=(a,b,c)=>a+b+c;
// console.log(multiArg(1,2,3));
                                    //    ["both upper &lower work same"]
// const curryUnary=a=>b=>c=>a+b+c;
// console.log(curryUnary(1)(2)(3));


//pure impure funciton
// let numberArray =[]
// const impured =number=>numberArray.push(number)

//pure
// const pureAdd = number=> argNumber=>argNumber.concat([number])

// console.log(impured(2));
// console.log(numberArray);
// console.log(pureAdd(3) (numberArray));
// console.log(numberArray);


//example of let 
// let counter = 30;
// if(counter===30){
//     let counter =31;
//     console.log(counter);
// }
// console.log(counter);

//difference b/w let and var
// function EmplyeeDetails(name){
//     if(name){
//         console.log(salary);
//         console.log(age);
//        let age=34;
//         var salary =400000
//     }
// console.log(salary);
// console.log(age);
// }
// EmplyeeDetails("zarnain")

// variables in switch block
// let counter  = 1;
// switch(x){
//     case 0:
//         let name ;
//         break;
//         case 1:
//             let name; //gives error bcz of block scope
//             break;
// }
 //crete nested  block inside a case clause
// let counter  = 1;
// switch(x){
//     case 0:{
//         let name ="aa" ;
//         break;}
//         case 1:{
//             let name="aba"; //gives error bcz of block scope
//             break;}
// }

// function example(){
//     console.log(count1);
//     console.log(count2);
//     var count1=2;
//    let  count2 = 4;
// }
// example()

//IIFE (intermediate invoked funcitons expressoin)
// (
//     function(){
//         let msg = "hello IIFE"
//         console.log(msg);

//     }
// )();


// memoization
// const memoizationVar =()=>{
//     let cache ={}
//     return(value)=>{
//         if(value in cache){
//             console.log("fetching from cache");
//             return cache[value]
//         }
//         else{
//             console.log("calculating result");
//             let result = value +20;
//             cache[value]=result
//             return result
//         }
//     }
// }
// const add = memoizationVar()
// console.log(add(20));
// console.log(add(20));

//hoisting
// console.log(msg);
// var msg= "hello" //undefined

// var msg;
// console.log(msg);
// msg='i am msg' //undefined

//classes in es6
// class Bike{
//     constructor(model , color){
//         this.model = model ;
//         this.color= color;
//     }
//     getDetails(){
//         return this.model +'bike has ' +this.color +'color'
//         } 
// }

//closures-----------
// function welcome(name){
//     var greet = function(msg){
//         console.log(msg ,"", name);
//     }
//     return greet
// }
// var myfunc = welcome('john')
// myfunc('welcome');
// myfunc('hello mr.')

//practice of closures
// function frstcall(name){
//     let myvar = (msg)=>{
//         console.log(msg ,name);
//     }
//     return myvar
// }
// let myfunc = frstcall("zarnain")
// myfunc("welcome")
// myfunc("i am miss,")

// ------------promise-------
// const waada = new Promise(resolve =>{
//     setTimeout(()=>{
//         resolve("I AM A PROMISE")
//     } , 5000)
// } , reject =>{
// })
// waada.then(value => console.log(value))


let almir  = new Promise((resolve , reject)=>{
    let val  = 23;
    setTimeout(()=>{
        resolve(val)
    },1000)
} , reject=>{
console.log("i am rejected");
})
almir.catch(val=> console.log(val))










// -------------------------------------------------------------------------------------------------
// function statement---------------------------------------------------
// function abc(){
//     console.log("hello");
// }
// abc();

//functon expression also knwn as func declaration
// var xyz = function(){
//     console.log("function expression");
// }
// xyz()

//the diff b/w func statement and expression is hoisting

// hoisting
// console.log(a); //undefined
// var a=0; //variable gives undefined calling before initializing

// abc();
// function abc(){
//     console.log('its running '); //functions will run defore initialization
// }

// abc();
// var abc = function (){
//     console.log('its not  running (funct hoisting is not allowed)'); //functions will run defore initialization
// } //bcz this function save as variables

//anonymous fucntion
// 01// (function(){
//     console.log("hello anonymous function");
// }())

// 02// (function(a,b){
//     console.log(`self invoking funciton(hoisitng is not allowed bcz thers no any name of function ${a+b} "thers no need to call it bcz we dont have any name to call it so its call by its self" `);
// }(1,2))

// 03// (function(a,b,c){
//     console.log(`sum is ${a+b+c}`);
// })(1,2,2)

//named functions expression----------------------------------------------------
// let anyfunc = function abc(a,b){
//     console.log(a+b);
// }
// anyfunc(2,3);//5
// abc(3,4)//error (always call with var name not by function name)

//ARROW FUNCTION-------------------------------------
// let arrfunc = ()=>{ //this ()round bracket use as a parameters

// }
// arrfunc()//this  ()use as an argument

// //higher order function //(dont repeat yourself (dry))
// function hi(){
//     console.log("hi");
// }
// function higherorder(){ //take func as a parameter so its called hof
//     return hi() //return function so its called call back func
// }
// higherorder()


//eg of hof is map 
// eg :
// const arr = [1,2,3,4,3,2,]
// arr ===>every element*2
// arrayNew ===>every element * 2
// simple js 
// function double(){
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     let value= array[index] *2;
//     newarr.push(value) 
// }
// return newarr
// }
// console.log(double());

//by using map solve above code
// map used when we want to modify every element in an array
//map does double triple binary

// const doubleMagic  = arr.map((index)=>index*2)
// const  tripleMagic = arr.map((index)=>index*2)
// console.log(doubleMagic);
// console.log(tripleMagic);

//2nd eg
// function doubleValue(index){
//     return index*2
// }
// const doubleMagic = arr.map((index)=>doubleValue(index))
// console.log(doubleMagic);

// const binary = arr.map((index)=>index.toString(2))
// console.log(binary);


//filter
// let arrr = [2,4,34,2,4,3,5]

// function even(){
//     let  newArr =[]
//     for (let i = 0; index < arrr.length; i++) {
// if(arrr[i]%2 ==0)        
// newArr.push(arrr[i])
//     }
// }
// return newArr;
// console.log(even());
// }


// const even  =arrr.filter((index)=>{
//     return index%2 ===0
// })

//reduce ----------------------
//doesnt return array , returns a single value(sum , min , max) 
// let arr=[1,2,3,4]
// function sum(){
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//        sum+=arr[i]
        
//     }
//     return sum
// }
// console.log(add());

//map---chnge every element
//filter--  base on your  condition
//reduce -- give single value (take 2 parameters)

// const addition = arr.reduce((index,sum)=>{
// return (sum = sum+index)
// console.log(addition);

// },0) // sum's 1st val is 0


//template literals with array
let arr = [3,34,342,24]
// const add = arr.reduce((index , sum)=>{
//     return (sum = )
const add = arr.filter((index)=>{
return index %2 !=0;
})
console.log();






