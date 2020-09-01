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
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed; 
  }
// Code Explanation
// Push item at the end of arr.
// Call the shift() method on arr to get the first item and store it in removed.
// Return removed.
// Example Run

// Test nextInLine([2,1]); runs.
// The nextInLine function is called. arr becomes [2]. item becomes 1.
// arr.push(item); Pushes 1 to [2]. So arr is now [2,1].
// var removed = arr.shift(); removes the first element. So arr is now [1]. 2 has been removed and is stored in removed.
// return removed; 2 is returned.
// Note: You don’t actually need the variable removed. The element removed can be returned directly using return arr.shift();.



// Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

// Note
// Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
  
    return true;
  
      }


//       Use Conditional Logic with If Statements
// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Pseudocode
// if (condition is true) {
//     statement is executed
//   }


//   Example
//   function test (myCondition) {
//     if (myCondition) {
//        return "It was true";
//     }
//     return "It was false";
//   }
//   test(true);  // returns "It was true"
//   test(false); // returns "It was false"
//   When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".
  
//   Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

function trueOrFalse(wasThatTrue) {  
    if (wasThatTrue) {
      return "Yes, that was true"
    }
      return "No, that was false"
    }

//     Comparison with the Equality Operator
// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

// function equalityTest(myVal) {
//   if (myVal == 10) {
//      return "Equal";
//   }
//   return "Not Equal";
// }
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

// 1   ==  1   // true
// 1   ==  2   // false
// 1   == '1'  // true
// "3" ==  3   // true
// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.

function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

//   Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// Examples

// 3 ===  3   // true
// 3 === '3'  // false
// In the second example, 3 is a Number type and '3' is a String type.

// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  
//   Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

// Examples

// 3 == '3'  // returns true because JavaScript performs type conversion from string to number
// 3 === '3' // returns false because the types are different and type conversion is not performed
// Note
// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

// typeof 3   // returns 'number'
// typeof '3' // returns 'string'
// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  

//   Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2     // true
// 1 != "1"    // false
// 1 != '1'    // false
// 1 != true   // false
// 0 != false  // false
// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  
//   Comparison with the Strict Inequality Operator
//   The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.
  
//   Examples
  
//   3 !==  3   // false
//   3 !== '3'  // true
//   4 !==  3   // true
//   Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

//   Comparison with the Greater Than OperatorPassed
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, greater than operator will convert data types of values while comparing.

// Examples

// 5   >  3   // true
// 7   > '3'  // true
// 2   >  3   // false
// '1' >  9   // false
// Add the greater than operator to the indicated lines so that the return statements make sense.
  

function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  
//   Comparison with the Greater Than Or Equal To Operator
// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, greater than or equal to operator will convert data types while comparing.

// Examples

// 6   >=  6   // true
// 7   >= '3'  // true
// 2   >=  3   // false
// '7' >=  9   // false
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

//   Comparison with the Less Than Operator
// The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

// Examples

// 2   < 5  // true
// '3' < 7  // true
// 5   < 5  // false
// 3   < 2  // false
// '8' < 4  // false
// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  
//   Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

// Examples

// 4   <= 5  // true
// '7' <= 7  // true
// 5   <= 5  // true
// 3   <= 2  // false
// '8' <= 4  // false
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  

//   Comparisons with the Logical And Operator
// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if:

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

function testLogicalAnd(val) {  
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
    
    return "No";
  }
  
  testLogicalAnd(10);
  
//   Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

function testLogicalOr(val) {  
    if (val > 20 || val < 10) {
      return "Outside";
    
    }
        return "Inside";
  }

   testLogicalOr(15);


//   Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }
// Combine the if statements into a single if/else statement.

function testElse(val) {
    var result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    } else { 
      result = "5 or Smaller"
    }
    
    return result;
  }
  
  testElse(4);
  
//   Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if ( val < 5) {
      return "Smaller than 5"
    } else {}
    return "Between 5 and 10";
  }
  
  testElseIf(7);

  
//   Logical Order in If Else Statements
// Order is important in if, else if statements.

// The function is executed from top to bottom so you will want to be careful of what statement comes first.

// Take these two functions as an example.

// Here's the first:

// function foo(x) {
//   if (x < 1) {
//     return "Less than one";
//   } else if (x < 2) {
//     return "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// And the second just switches the order of the statements:

// function bar(x) {
//   if (x < 2) {
//     return "Less than two";
//   } else if (x < 1) {
//     return "Less than one";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// While these two functions look nearly identical if we pass a number to both we get different outputs.

// foo(0) // "Less than one"
// bar(0) // "Less than two"
// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

  
//   Chaining If Else Statements
//   if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:
  
//   if (condition1) {
//     statement1
//   } else if (condition2) {
//     statement2
//   } else if (condition3) {
//     statement3
//   . . .
//   } else {
//     statementN
//   }
//   Write chained if/else if statements to fulfill the following conditions:
  
//   num < 5 - return "Tiny"
//   num < 10 - return "Small"
//   num < 15 - return "Medium"
//   num < 20 - return "Large"
//   num >= 20 - return "Huge"

function testSize(num) {
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
      return "Small"
    } else if (num < 15) {
      return "Medium"
    } else if (num < 20) {
      return "Large"
    } else if (num >= 20) {
      return "Huge"
    }
  }
  
  testSize(7);

//   Golf Code
// In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
  
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }

}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

// switch(lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"


function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }

    return answer;
  }
  
  caseInSwitch(1);
  

//   Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }
// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
          answer = "apple";
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break;
        default:
          answer = "stuff"
          break;
    }
  
    return answer;
  }
  
  switchOfStuff(1);
  

//   Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

// switch(val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// Cases for 1, 2, and 3 will all produce the same result.

// Write a switch statement to set answer for the following ranges:
// 1-3 - "Low"
// 4-6 - "Mid"
// 7-9 - "High"

// Note
// You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break
      case 7:
      case 8:
      case 9: 
        answer = "High";
    }

    return answer;
  }
  
  sequentialSizes(1);



// Basic JavaScript: Replacing If Else Chains with Switch
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
// can be replaced with:

// switch(val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }
// Change the chained if/else if statements into a switch statement.


function chainToSwitch(val) {
    var answer = "";
    switch(val) {
      case "bob":
      answer = "Marley";
      break;
      case 42: 
      answer = "The Answer";
      break;
      case 1:
      answer = "There is no #1";
      break;
      case 99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break;
      default:
      answer = "";
    
    }
        return answer;
  }
  
  chainToSwitch(7);
  

//   Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

// Sometimes people use an if/else statement to do a comparison, like this:

// function isEqual(a,b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

// function isEqual(a,b) {
//   return a === b;
// }
// Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
    return a < b;
  }
  
  isLess(10, 15);

//   Return Early Pattern for Functions
//   When a return statement is reached, the execution of the current function stops and control returns to the calling location.
  
//   Example
  
//   function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye")
//   }
//   myFun();
//   The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.
  
//   Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
  
//   Hint
//   Remember that undefined is a keyword, not a string.
  
// Setup
function abTest(a, b) {=
    if (a < 0 || b < 0) {
      return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
  
//   Counting Cards
//   In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
  
//   Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
  
//   Count Change	Cards
//   +1	2, 3, 4, 5, 6
//   0	7, 8, 9
//   -1	10, 'J', 'Q', 'K', 'A'
//   You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
  
//   Example Output
//   -3 Hold
//   5 Bet
  
//   Hint
//   Do NOT reset count to 0 when value is 7, 8, or 9.
//   Do NOT return an array.
//   Do NOT include quotes (single or double) in the output.

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; //adding 1
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // we're not gonna add 1, so --
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Build JavaScript Objects
// You may have heard the term object before.

// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

// Here's a sample cat object:

// var cat = {
//   "name": "Whiskers",
//   "legs": 4,
//   "tails": 1,
//   "enemies": ["Water", "Dogs"]
// };
// In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

// var anotherObject = {
//   make: "Ford",
//   5: "five",
//   "model": "focus"
// };
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

// Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

// You can set these object properties to whatever values you want, as long as "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.

