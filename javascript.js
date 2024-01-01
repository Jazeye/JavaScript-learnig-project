//function calling

// function myFun(){
//     let a = 10;
//     myFun2();
//     return a;
// }

// function myFun3(){
//     let a = 11;
//     myFun2();
//     return a;
// }
// function myFun2(){
//     console.log("completed")

// }
//  console.log(myFun());
//  console.log(myFun3());

//function calling end

//parameter passing
// function myFun(id){
//     let a = 10;
//     let b = id;
//     let c = a+b;
//     return c;
// }
// console.log(myFun(10))
//parameter passing end

// // only one value not using return
//  myfunc = (c) => c;
//  console.log(myfunc(11));

// // or one parameter only not using ()
// myfunc = c => c;
// console.log(myfunc(551));

// alert ("blocked");

// //object

// let user = {
//     firstName: "john",
//     lastName: "evi"
// };
// console.log(user.firstName);
// console.log(user);
// //object end

// //Array

// let array =["test","tes"]
// console.log(array[0]);

// //arrya end

// str method

// let a = "Minnal op" //white space include
// console.log(a.length);

// indexof
// let a = "Minnal op" //white space include & start with 0
// console.log(a.indexOf("M"));

// console.log(a.lastIndexOf("n")); //choose ;last index value

// search
// let a = "Minnal op" //start with 0
// console.log(a.search("l"));

// //include
// let a = "Minnal op" //out put based on true or false
// console.log(a.includes("l"));

// slice
// let a = "Minnal op" //start with 0
// let b = a.slice(0,10)
// console.log(b);

//number method conversion
// let a = "15";
// let b =10;
// console.log(typeof parseInt(a));
// console.log( typeof b.toString());

//Array method
// let myArray = ["A","B","C"];
// myArray[0] = "Z"
// console.log(myArray)

//push update value,shift update first value , pop remove last value  ,unshif rmove first value , splice add and remove wheneve you decide
// let myArray = ["A","B","C"];
// myArray.push("Z");
// console.log("push",myArray)
// myArray.pop("");
// console.log("pop",myArray)
// myArray.unshift("D");
// console.log("unshif",myArray)
// myArray.shift("");
// console.log("shift",myArray)

// where you want to add or remove
// myArray.splice(2 ,0, "E","F");
// console.log("splice add",myArray)

// let newArray = myArray.splice(1);
// console.log("splice rm",newArray)

//sort reverce
// let myArray = ["B","A","c"];
// let newArray = ["A","B","c"];
// myArray.sort();
// newArray.reverse();
// console.log("sort",myArray);
// console.log("reverse",newArray);
//sort reverce end

//object

// let myObj={
//     firstname : "Jhon",
//     lastname : "doe",
// }
// myObj.firstname = "MINNAL" // alter the value
// delete myObj.lastname;  // delete the value
// console.log(myObj);

//obj methods end

// if
// let num = 30;
// if(num===40){
//     console.log("good mark");

// }else if(num <= 30 && num  >= 20)
// {
//   console.log("average mark");
// }else{

//     console.log("no mark");
// }

// let list = "Mango";

// //switch
// switch(list){
//     case "Mango":
//         console.log("i bought mango");
//         break;
//     case "banana":
//         console.log("i bought banana");
//         break;
//     default:
//         console.log("no fruits found");

// }

//for
// let count=10;
// for(let i =0;i<=10;i++){
//     console.log(i);
// }

//while
// let countt=0;
// // while (countt <=10){
// //     console.log(countt);
// //     countt ++
// // }

// // do while

// do{
//     console.log(countt);
//     countt ++
// }while (countt <=10)

// //for array access
// let myArray = ["john", "doe", "jack"];

// for (let i = 0; i < myArray.length; i++) {
//   document.write(myArray[i], "<br>");
// }

// //or
// for (let x of myArray){
//     document.write(x+ "<br>");
    
// } 

// //obj access using for
// let myObj = {
//     firstname: "jock",
//     lastName:"bob",
//     age : 45

// };
// for (let x in myObj){
//     document.write(myObj[x]+"<br>");
// }

//event click
// function onAlert(){
//     alert("kooi");
// }

let btn = document.getElementById("btn");

// addEventListener('click',function(){
//     alert("koii");
// });

//or 
addEventListener('click',myfunc);

function myfunc(){
    alert("kooi");
}