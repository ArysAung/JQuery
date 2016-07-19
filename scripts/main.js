/*
Study Guide

<Variables>
Local Variable when you wanna make changes to a function but don't wanna change the global.
Insert Local Variables into function to code
Variables are automatically assumed to be global unless stated otherwise.
The difference is the lifetime: 
	Local lives only as long as the function does. 
	Global lives as long as the page does. 

<Debugging>
alert.log("");
console.log("");
function x(){
	document.getElementById('').innerHTML="New Text";
}

<Different Data Types>
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object

<array>
var array-name = [item1, item2, ...];
*/

// console.log('HERE COME THAT BOI');

// function changeMe(){
// 	document.getElementById('el').innerHTML="NEW TEXT"
// }

// function revealMe(){
// 	document.getElementById('hide').style.display='block'
// }
// alert("David" + " "  + "Axelrod"); 

// var x = 5;

// var y = 10;


// console.log(x+y);

// var Arys={
// 	firstName:"Arys",
// 	lastName:"Aung",
// 	birthday:"April 8th, 1998",
// 	interests:"Cows, Strawberry, Oranges"
// }

// var o = 2; //Global Variable
// console.log(o);

var x=3;

if (x<10){
	console.log("Variable X is less than 10");
	}else{
		console.log("Variable X is " + x + " and it is greater than 10")
	}


friends = ["Jake", "John", "Bill", "Frank"]

for(var i= 0; i<friends.length; i++){
	console.log(friends[i] + " is my friend");
	alert(friends[i]);
}













