let obj ={
    name : 'tanha',
    age : 99,
    Email : 'tanha224517@gmail.com',
    address :{
       city : "Narayangonj"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

obj2.address.city = "purbacha";

console.log(obj2);
console.log(obj);


