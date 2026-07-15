let sentence = "The price is 250 taka and delivery costs 80 taka.";

// console.log(/\d+/ .test(sentence));
// console.log(/The/ .test(sentence));


// let numbers = sentence.match(/\d+/g);
// console.log(numbers);
let double = sentence.replace(/\d+/g , n => n*2);
// console.log(double);


function practice(phone)
{
    return /^01[1-9]\d{8}$/.test(phone)
}

// console.log(practice("01935646822"));

let nums = [3, 1, 4, 1, 5, 9];
let sorted = nums.sort((a,b) => a-b);
// console.log(sorted);

let maped = nums.map(n => n*2);
// console.log(maped);

let a = nums.filter(n => n %2 === 0)
// console.log(a);

console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.pow(2,5));




