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



