/*
    Below are the list of few question which are good for the hands on practice of the 
        map
        reduce
        filter
    concepts

*/

//Q1. Given an array of objects users, print fullname.
/*
const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];


const fullname=users.map((details)=>{
    return details.firstName+" "+details.lastName;
})

console.log(fullname);

//O/P [ 'john Biden', 'jimmy cob', 'sam lewis', 'Ronald Mathew' ] 

*/
/*
// Q2. Given an array of objects users, print user of particular age along with their frequency.
const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const filteredUser=users.reduce((acc,items)=>{
    let currAge=items.age;
    let currName=items.firstName+" "+items.lastName;
    if(acc[currAge])
    {
        acc[currAge]++;
    }
    else
    {
        acc[currAge]=1;
    }
    return acc;
},{})

console.log(filteredUser);
//op { '26': 2, '50': 1, '75': 1 }
*/


//Q3.Print object having marks greater than 60 and rollNumber greater than 15.
/*
let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];

const filteredStudent=student.filter((students)=>{
    return students.marks > 60 && students.rollNumber > 15
})

console.log(filteredStudent);
// Output [ { name: 'Smith', rollNumber: 31, marks: 80 } ]

*/

/*
//Q4.Print sum of marks of all the student
let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];

//We are supposed to use the reduce method


    In reduce function we can pass 4 argument (2 are optional) 2 are mandatory
    the acc consider
    The accumulator parameter is the single value that will be returned by the reduce() method.
    It will contain the value returned by the callback function in each iteration.

    In the first iteration, the accumulator parameter will contain whatever 
    value you passed as the second argument of the reduce() method. In the above case, it’s 0.

    Note we have to return the acc after each iteration



const totalSum=student.reduce((acc,items)=>{
        let studentMarks=items.marks;
        acc+=studentMarks;
        return acc;
},0)

console.log(totalSum);
//OP 239
*/
/*


//Q5.List of all firstName from array whose age is more than 30
const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"Cob",age:75},
    {firstName:"Sam",lastName:"Lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const filteredUser=users.filter((items)=>items.age > 30).map((details)=>(details.firstName+" "+details.lastName));


console.log(filteredUser);

//op [ 'jimmy Cob', 'Sam Lewis' ]
*/

/*
//Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];



const after_adding_20=student.map((item)=>{
    if(item.marks < 60)
    {
        item.marks+=20;
    }
    return item;
});

//console.log(after_adding_20);

const postAdding=after_adding_20.filter((student)=>student.marks>60);


const totalSum=postAdding.reduce((acc,item)=>{
        acc+=item.marks;
        return acc;
},0)

console.log(totalSum);

*/