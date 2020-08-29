// ou can easily increment or add one to a variable with the ++ operator.

// i++;

// is the equivalent of

// i = i + 1;

// Note
// The entire line becomes i++;, eliminating the need for the equal sign.

var myVar = 87;

myVar++;

// Decrement a Number with JavaScript
// You can easily decrement or decrease a variable by one with the -- operator.

// i--;

// is the equivalent of

// i = i - 1;

// Note
// The entire line becomes i--;, eliminating the need for the equal sign.

var myVar = 11;

myVar--;

// remainder % (0,1 = even, odd)
var remainder = 11 % 3;


// Compound Assignment With Augmented Addition
// In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

// myVar = myVar + 5;

// to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

// One such operator is the += operator.
// var myVar = 1;
// myVar += 5;
// console.log(myVar); // Returns 6

a += 12;
b += 9
c += 7;

// Compound Assignment With Augmented Subtraction
// Like the += operator, -= subtracts a number from a variable.

// myVar = myVar - 5;

// will subtract 5 from myVar. This can be rewritten as:

// myVar -= 5;

// Convert the assignments for a, b, and c to use the -= operator.

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// lost a lot of stuff, don't know why exactly 

// Constructing Strings with Variables
// Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

// Example:

// var ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";
// // ourStr is now "Hello, our name is freeCodeCamp, how are you?"
// Set myName to a string equal to your name and build myStr with myName between the strings "My name is " and " and I am well!"

var myName = "Helena Magaldi"
var myStr = "My name is " + myName + " and I am well!"

// Appending Variables to Strings
// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

// Example:

// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// // ourStr is now "freeCodeCamp is awesome!"
// Set someAdjective and append it to myStr using the += operator.

// Change code below this line

var someAdjective = "absolutely AWESOME!"
var myStr = "Learning to code is ";

myStr += someAdjective

// Find the Length of a String
// You can find the length of a String value by writing .length after the string variable or string literal.

// "Alan Peter".length; // 10

// For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

// Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.


var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
// Bracket notation is a way to get a character at a specific index within a string.

// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

// For example, the character at index 0 in the word "Charles" is "C". So if var firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

// Example:

// var firstName = "Charles";
// var firstLetter = firstName[0]; // firstLetter is "C"
// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

// Hint: Try looking at the example above if you get stuck.

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

// Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// For example, the following code:

// var myStr = "Bob";
// myStr[0] = "J";
// cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

// var myStr = "Bob";
// myStr = "Job";
// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

var myStr = "Jello World";
myStr = "Hello World"; // Change this line

// Use Bracket Notation to Find the Nth Character in a String
// You can also use bracket notation to get the character at other positions within a string.

// Remember that computers start counting at 0, so the first character is actually the zeroth character.

// Example:

// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

// Hint: Try looking at the example above if you get stuck.

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String
// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

// Example:

// var firstName = "Charles";
// var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
// Use bracket notation to find the last character in the lastName variable.

// Hint: Try looking at the example above if you get stuck.

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

// For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

// Example:

// var firstName = "Charles";
// var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
// Use bracket notation to find the second-to-last character in the lastName string.

// Hint: Try looking at the example above if you get stuck.

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// Word Blanks
// We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

// In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

// Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

// var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "My beloved, " + myAdjective + " " + myNoun + " " + myVerb + " "+ myAdverb;

// Store Multiple Values in one Variable using JavaScript Arrays
// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

// var sandwich = ["peanut butter", "jelly", "bread"].

// Modify the new array myArray so that it contains both a string and a number (in that order).

// Hint
// Refer to the example code in the text editor if you get stuck.

var myArray = ["peanut", 2];


// Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

// [["Bulls", 23], ["White Sox", 45]]
// This is also called a multi-dimensional array.

// Create a nested array called myArray.

var myArray = [["Ploft", 2], ["Plaft, 4"]];


// Access Array Data with Indexes
// We can access the data inside arrays using indexes.

// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.



// Example

// var array = [50,60,70];
// array[0]; // equals 50
// var data = array[1];  // equals 60
// Note
// There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

var myArray = [50,60,70];

var myData = myArray[0]

// Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely.

// Example

// var ourArray = [50,40,30];
// ourArray[0] = 15; // equals [15,40,30]
// Note
// There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Modify the data stored at index 0 of myArray to a value of 45.

var myArray = [18,64,99];

myArray[0] = 45

// Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

// Example

// var arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
//   [[10,11,12], 13, 14]
// ];
// arr[3]; // equals [[10,11,12], 13, 14]
// arr[3][0]; // equals [10,11,12]
// arr[3][0][1]; // equals 11
// Note
// There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

// Using bracket notation select an element from myArray such that myData is equal to 8.

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

// Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

// Examples:

// var arr1 = [1,2,3];
// arr1.push(4);
// // arr1 is now [1,2,3,4]

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// // arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Push ["dog", 3] onto the end of the myArray variable.

var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])

// Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.

// .pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown); // Returns 6
// console.log(threeArr); // Returns [1, 4]
// Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop()


// Manipulate Arrays With shift()
// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

// Example:

// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift()

// Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy");
// // ourArray now equals ["Happy", "J", "cat"]
// Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]

// There should be at least 5 sub-arrays in the list.

var myList = [["tapioca", 2],["chocolate", 24], ["danoninho", 6], ["eggs", 12], ["ham", 2], ["chilli peppers", 3]]


// Write Reusable JavaScript with Functions
// In JavaScript, we can divide up our code into reusable parts called functions.

// Here's an example of a function:

// function functionName() {
//   console.log("Hello World");
// }
// You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

// Create a function called reusableFunction which prints "Hi World" to the dev console.
// Call the function.

function reusableFunction() {
    console.log("Hi World")
  }
  
  reusableFunction()


//   Passing Values to Functions with Arguments
//   Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
  
//   Here is a function with two parameters, param1 and param2:
  
//   function testFun(param1, param2) {
//     console.log(param1, param2);
//   }
//   Then we can call testFun: testFun("Hello", "World"); We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.
  
//   Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//   Call the function with two numbers as arguments.

function functionWithArgs(arg1, arg2) {
    console.log( arg1 + arg2 )
  }
  
  functionWithArgs(2, 4)


//   Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

// Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

var myGlobal = 10

function fun1() {
  oopsGlobal = 5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

// Here is a function myTest with a local variable called loc.

// function myTest() {
//   var loc = "foo";
//   console.log(loc);
// }
// myTest(); // logs "foo"
// console.log(loc); // loc is not defined
// loc is not defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.

function myLocalScope() {
    'use strict';
  
    var myVar = "string"
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  

  console.log('outside myLocalScope', myVar);
  
//   Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

// var someVar = "Hat";
// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }
// The function myFun will return "Head" because the local version of the variable is present.

// Add a local variable to myOutfit function to override the value of outerWear with "sweater".

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater"

  return outerWear;
}

myOutfit();


// Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

// Example

// function plusThree(num) {
//   return num + 3;
// }
// var answer = plusThree(5); // 8
// plusThree takes an argument for num and returns a value equal to num + 3.

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.

function timesFive(num) {
    return num * 5
  }
  
  var answer = timesFive(3)

//   Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

// Example

// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// addSum(3); // sum will be modified but returned value is undefined
// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5
}

addThree();
addFive();


// Assignment with a Returned Value
// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Assume we have pre-defined a function sum which adds two numbers together, then:

// ourSum = sum(5, 12);

// will call sum function, which returns a value of 17 and assigns it to ourSum variable.

// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processArg(7)
processed = processArg(7)

// Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then Greturn the element that was removed.

