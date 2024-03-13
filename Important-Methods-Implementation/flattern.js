//The following file contain all the important method of javascript and their implementation

/*
array = [1, [2], [3, [4]]];
flat(array, 1)
// [1, 2, 3, [4]] flattens on depth level 1
flat(arr, 2)
// [1, 2, 3, 4] flattens on depth level 2


Below is the implemantation of the flat function in javascript
    Intution
    Basic Recursion the basic idea for the following is we iterate over the whole array
    and if we encouner a element which is an array
        Array.isArray ->true / false
    The following method is used to check if a particular element is an array or not 
    If this is true and the depth is greater than 0 that means we have scope to go futher deep
        we make the recursive all for that element 
        like [1, [2], [3, [4]]]
        now [3,[4]] is a Array.isArray ->true we will call the flat function for this particulat 
    and using the spread operator to add all the elements received from the flat we we got multiple

    see result.push(...flat(element,depth-1))




*/


// function flat(array, depthLevel = 1) {
//     let result = [];
//     // your implementation here
//     array.forEach((element)=>{
//         if(Array.isArray(element) && depthLevel >0)
//         {
//             result.push(...flat(element,depthLevel-1));
//         }
//         else
//         {
//             result.push(element);
//         }
//     })



//     return result;
// }


// console.log(flat([1, [2], [3, [4]]],1)); // op [ 1, 2, 3, [ 4 ] ]

// console.log(flat([1, [2], [3, [4]]],2)); //op [ 1, 2, 3, 4 ]


/*
//remove the depth factor

function flatten(arr)
{
    var result=[];
    arr.forEach((item)=>{
        if(Array.isArray(item))
        {
            result.push(...flatten(item));
        }
        else{
            result.push(item);
        }
    })
    return result;
}

var result=JSON.stringify(flatten([1,2,3,4,[5,6,7,[8,9,10,[11,12,13,[14,15,16,17]]]]]));


console.log(flatten([1,2,3,4,[5,6,7,[8,9,10,[11,12,13,[14,15,16,17]]]]]));
//[
//     1,  2,  3,  4,  5,  6,  7,
//     8,  9, 10, 11, 12, 13, 14,
//    15, 16, 17
//  ]


console.log(result);

//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
*/

