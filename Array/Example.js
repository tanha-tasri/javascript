let students = [
{ name: "Alice", marks: 85 },
{ name: "Bob", marks: 72 },
{ name: "Carol", marks: 91 },
{ name: "David", marks: 40 }
];

let a = students.filter(function(val)
{
    if(val.marks >= 50)
        return val;

})

console.log(a);