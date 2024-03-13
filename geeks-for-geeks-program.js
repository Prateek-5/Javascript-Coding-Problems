/*
How to serialize a Map in JavaScript ?

*/

const map1 = new Map([
    [1, 2],
    [2, 3],
    [4, 5]
]);

const arr=Array.from(map1);



console.log(map1);
console.log( arr);
console.log(typeof JSON.stringify(arr));