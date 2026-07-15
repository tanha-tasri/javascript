let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = numbers.filter(function(val){
    if(val % 2 === 0)
    return val;
})
console.log(arr);