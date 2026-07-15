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

console.log(a);
