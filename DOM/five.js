let arra = [2,6,5,4,3,7]

// let a = arra.sort(function(a,b){
//     return a-b;
// })

// console.log(a);


// let a = arra.map(function(val){
//     return val*2;
// })

// console.log(a);

let students = [
{ name: "Alice", marks: 85 },
{ name: "Bob", marks: 72 },
{ name: "Carol", marks: 91 },
{ name: "David", marks: 58 }
];

let a = students.map(function(val)
{
    let grade = val.marks>=80 ? "A"
    :val.marks>= 70 ?"B"
    :"C"

    return {...val,grade};
})

// console.log(a);



// ==============================================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = numbers.filter(function(val){
    if(val % 2 === 0)
    return val;
})
// console.log(arr);



