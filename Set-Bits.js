/*
https://www.codingninjas.com/studio/guided-paths/basics-of-javascript/content/176384/offering/2409898?leftPanelTabValue=PROBLEM

Problem statement
Write a program to count the number of 1's in the binary representation of an integer.

Detailed explanation ( Input/output format, Notes, Images )
Constraints
1 <= N <= 100
Sample Input 1:
9
Sample Output 1:
2
Explanation of Sample Input 1:
Binary Representation of 9 is 1001.
Sample Input 2:
13
Sample Output 2:

*/

function set_bits(n){

    /* Write your code here
  No need to specify return type 
  Input and output already taken care of, you have to just return the output variable */

/*
  This is how the number is converted into bit using javascript
    The folllwing approch to using the internal lib to convert the number into a string of it's bit 
    representation

    and then iterating over the string to count for 1


*/
/*
var curr = n.toString(2);
//console.log(curr);
var count = 0;
for (var i = 0; i < curr.length; i++)
{
  if (curr[i] == 1) count++;
}


return count;
*/

/*
  This following menthod is for to tridition manner in which we will approch the bit manipulation
  probem

  Taking the & of the given number with 1
  like
    9 =>  1001 & 1 =>1(this will be the result of the following)
    We will store the follwing in a variable and it it is 1 increment the count
    else not
  return the count varibale



*/


var count = 0;
while (n !== 0)
{
  var curr = n & 1;
  if (curr == 1) count++;
  n = n >> 1;
}

return count;








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


var num =  parseInt(readLine());

let res = set_bits(num);
console.log(res);

}