/*
https://www.codingninjas.com/studio/guided-paths/basics-of-javascript/content/176384/offering/2409899?leftPanelTabValue=PROBLEM
Problem statement
Write a program to find the total number of a primes number in a given interval.

Given two integers S and E, count all primes between S and E.

Detailed explanation ( Input/output format, Notes, Images )
Constraints
1 <= N <= 100
Sample Input 1 :
2 10
Sample Output 1 :
4
Explanation of Sample Input 1:
The prime numbers between 2 and 10
are 2,3,5 and 7
Sample Input 2 :
2 5
Sample Output 2 :
3
.

*/
function prime(s, e) {
		
    /* Write your code here
     No need to specify return type 
     Input and output already taken care of, you have to just return the output variable */
     /*
         This is how we declare a function  expression in javascript
     */
     var checkPrime = (n) => {
         for (let i = 2; i * i <= n; i++)
         {
             if(n%i==0)  return false
         }
         return true;
     }
     var count = 0;
     for (var i = s; i <= e; i++)
     {
         //this is how we call the functionla expression
         if (checkPrime(i)) {
 
             //console.log(i);
             count++;
         }    
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
 const arr = readLine().replace(/\s+$/g, '').split(' ');
 
 let s = (Number)(arr[0]);
 let e = (Number)(arr[1]);
 
 let res = prime(s , e);
 console.log(res);
 
 }



