let arra = [1,2,3,4,5,6];

let a = arra.reduce(function(accumulator,val){
    return accumulator + val;
},0)

console.log(a);
