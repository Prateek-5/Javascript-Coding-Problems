/*
Problem statement
For a given string(str) and a character X, write a function to remove all the occurrences of X from the given string and return it.

The input string will remain unchanged if the given character(X) doesn't exist in the input string.

Detailed explanation ( Input/output format, Notes, Images )
Constraints:
0 <= N <= 10^6
Where N is the length of the input string.

Time Limit: 1 second
Sample Input 1:
aabccbaa
a
Sample Output 1:
bccb
Sample Input 2:
xxyyzxx
y
Sample Output 2:
xxzxx


*/

function remove_character(input , c){ 
    
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output String */
    let result = "";
    /*
        Only add those char in the string which are not equal to the given char
    
    
    */
    
    for (var i = 0; i < input.length; i++)
    {
        if (input[i] !== c) result += input[i];
    }
    // console.log("This is the output from function" + result);
    return result;


    
  }
  





































  
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  
  var input_stdin = "";
  var input_stdin_array = "";
  var input_currentline = 0;
  
  process.stdin.on('data', function (data) {
  input_stdin += data;
  });
  
  process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
  });
  
  function readLine() {
  return input_stdin_array[input_currentline++];
  }
  
  
  function main() {
      let str = String(readLine());
      let c = String(readLine());
      
      let res = remove_character(str , c);
      console.log(res);
  
  }