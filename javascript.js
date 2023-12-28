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
let myArray = ["A","B","C"];
// myArray.push("Z");
// console.log("push",myArray)
// myArray.pop("");
// console.log("pop",myArray)
// myArray.unshift("D");
// console.log("unshif",myArray)
// myArray.shift("");
// console.log("shift",myArray)

// where you want to add or remove
myArray.splice(2 ,0, "E","F");
console.log("splice add",myArray)

let newArray = myArray.splice(1);
console.log("splice rm",newArray)