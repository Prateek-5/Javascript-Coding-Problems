/*
In JavaScript there is a built-in method called reduce() that can be used over the Array prototype. What this method does, is that it executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

The easiest to understand case for reduce() is to return the sum of all the elements in an array:

*/

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

//console.log(sumWithInitial);
// expected output: 10

/*
    Intution 

    Before jumping into implementation we need to keep the following this in mind
        -The reduce function expected 2 input arguments
            -callback function
            -initial value
        -The output of the reduce function is acc a single number or variable

        


*/



//Can you implement your own version of this method?
Array.prototype.myReduce = function (callback, initialValue) {
    const argsLength = arguments.length;
    //If array is empty and there is no initial value, return an error
    if (argsLength === 1 && this.length === 0) {
      throw new Error();
    }
  
    let index = argsLength === 1 ? 1 : 0;
    let resultValue = argsLength === 1 ? this[0] : initialValue;
  
    //Call the callback function for every element and replace the resultValue
    for (let i = index; i < this.length; i += 1) {
      resultValue = callback(resultValue, this[i], i, this);
    }
  
    return resultValue;
  };
  const numbers = [1, 2, 3, 4, 5];
const sumCallback = (accumulator, currentValue) => accumulator + currentValue;

// Using myReduce to sum all elements
const sum = numbers.myReduce(sumCallback, 0);
console.log(sum); // Output: 15
