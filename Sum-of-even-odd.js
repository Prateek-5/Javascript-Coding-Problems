/*
https://www.codingninjas.com/studio/guided-paths/basics-of-javascript/content/170957/offering/2409893?leftPanelTabValue=PROBLEM&customSource=studio_nav
Problem statement
Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.



Digits mean numbers, not places! That is, if the given integer is "132456", even digits are 2, 4, and 6, and odd digits are 1, 3, and 5.

Constraints
0<= 'n' <=10000


Example :
Input: 'n' = 132456

Output: 12 9

Explanation:
The sum of even digits = 2 + 4 + 6 = 12
The sum of odd digits = 1 + 3 + 5 = 9
Constraints
0<= 'n' <=10000


Example :
Input: 'n' = 132456

Output: 12 9

Explanation:
The sum of even digits = 2 + 4 + 6 = 12
The sum of odd digits = 1 + 3 + 5 = 9
Input format :
 The first line contains an integer 'n'.
Output format :
In a single line, print two space-separated integers, first the sum of even digits and then the sum of odd digits.
Sample Input 1:
132456


Sample Output 1:
12 9


Explanation of sample input 1 :
The sum of even digits = 2 + 4 + 6 = 12
The sum of odd digits = 1 + 3 + 5 = 9


Sample Input 2:
552245


Sample Output 2:
8 15

*/
function even_odd_sum(num){
		
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

    //Return an array of evensum & oddsum like {evensum , oddsum};
    var odd = 0;
    var even = 0;
    /*
        Points to Note:
            We have to use the strict equality operator to terminate the condition at zero as it will 
            run into an infinite loop as the value will approch 0 but will never be less than zero
            unlike the int in c++

            The Math.floor is been used to store the value in this formate
                159 / 10 ->15 /10 ->1 /10 ->0
                else
                159 /10 ->15.9 /10 ->1.59/10
            Keep in mind the following things
            also var result=[]
        This is how we define an array in javascript    
    
    */
    while (num !== 0)
    {
        let curr = num % 10;
        // console.log(curr);
        curr % 2 == 0 ? even += curr : odd += curr; 

        num = Math.floor(num / 10);
    }

    var result = [even, odd];
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


var num =  parseInt(readLine());

let res = even_odd_sum(num);
console.log(res[0] , res[1]);

}