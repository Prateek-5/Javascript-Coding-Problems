/*
Problem statement
For a given input string(str), find and return the total number of words present in it.

It is assumed that two words will have only a single space in between. Also, there wouldn't be any leading and trailing spaces in the given input string.

Detailed explanation ( Input/output format, Notes, Images )
Constraints:
0 <= N <= 10^3
Where N is the length of the input string.

Time Limit: 1 sec
Sample Input 1:
Coding Ninjas!
Sample Output 1:
2
Sample Input 2:
this is a sample string
Sample Output 2:
*/
function count_words(str){
    
    /* Write your code here
     No need to specify return type 
     Input and output already taken care of, you have to just return the output variable */
     /*
        An important method which return the array of the string where each element is added after
        spliting the string if there is a spece in between
     
     */
     
     var count= str.split(" ");
     return count.length;
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
     let res = count_words(str);
     console.log(res);
    
 
 }
