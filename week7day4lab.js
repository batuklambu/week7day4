// What are all the JavaScript Data Types?

// Data Type A type of data, e.g., String, Object, Boolean, etc.

// What is the Difference Between Const Let and Var? Consider Scope ... Give an example
// var declarations are globally scoped or function scoped while let and const are block scoped. var variables
// can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables
// can neither be updated nor re-declared.
//They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const
// variables are not initialized.While var and let can be declared without being initialized, const must be initialized during declaration.

// Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?

// Pass by value: The method parameter values are copied to another variable and then the copied object is passed to the method.
// The method uses the copy. Pass by reference: An alias or reference to the actual parameter is passed to the method. The method accesses
// the actual parameter.

// Primitive data types such as string, number, null, undefined, and boolean, are passed by value
// while non-primitive data types such as objects, arrays, and functions are passed by reference
//  in Javascript.

// What do Map , Filter and Reduce do? Do they mutate the array you call them on?
// The map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.

// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented
// by the provided function.

// the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
// Mutation is basically changing the array itself instead of returning a new array with the new changes.
// The map() method is a copying method. It does not alter this . However, the function provided a
// s callbackFn can mutate the array.
// reduce() does not mutate the array on which it is called, but the function provided as callbackFn can.
// Since the filter method does not mutate the original array, we need to save the filtered array to work with it later.
// The array filter method does not work if the array does not have any elements in it

// What are all the Falsy Values in JS? Why do you think this is important to know?

// A falsy value is something which evaluates to FALSE, for instance when checking a variable.
//  There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string),
//  and false of course.A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

//What is Async and Await?
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to
// explicitly configure promise chains.
//Use of async and await enables the use of ordinary try / catch blocks around asynchronous code. Note:
// The await keyword is only valid inside async functions within regular JavaScript code.
// If you use it outside of an async function's body, you will get a SyntaxError .Async functions return a promise.
// This promise state can be either resolved or rejected.
// Await suspends the called function execution until the promise returns a result for that execution.

//The async function declaration declares an async function where the await keyword is permitted within the function body.
// Async functions may also be defined as expressions.
// The async function* declaration defines an async generator function, which returns an AsyncGenerator object.

// What is try and catch?
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
