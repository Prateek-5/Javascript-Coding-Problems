/*
https://www.codingninjas.com/studio/guided-paths/basics-of-javascript/content/176384/offering/2409900?leftPanelTabValue=PROBLEM
Problem statement
Take an array with n elements with possibly duplicate elements as the input. The task is to find the index of the first occurrences of the element x in the array and, if it is not present, return -1.

Detailed explanation ( Input/output format, Notes, Images )
Constraints:
1 <= N <= 10^3
1 <= arr[i] <= 10^9
1 <= x < N
Sample Input 1 :
8
7 5 2 11 2 43 1 1
2
Sample Output 1 :
2
Explanation of Sample Input 1:
2 is present twice in the input array and the first time it appears is at index 2.
Sample Input 2 :
8
7 5 2 11 2 43 1 1
10
Sample Output 2 :
-1
Explanation of Sample Input 2:
10 is not present in the array so the output is -1.

*/

function first_index(arr ,  ele){

    /* Write your code here
   No need to specify return type 
   Input and output already taken care of, you have to just return the output variable */

   /*
       An important method which return the first index of the element 
   
   */

   return arr.indexOf(ele);

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
   
let n = parseInt(readLine());
const arr = readLine().replace(/\s+$/g, '').split(' ');

let array = [];

for(let i = 0 ; i<n ; i++){
   array.push((Number)(arr[i]));
}

let ele = parseInt(readLine());

let res = first_index(array , ele);
console.log(res);

}