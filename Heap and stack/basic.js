// stack(primitive) , Heap(Non-primitive)

// primitive (number, boolean , string , undifine , null , symbol, bigInt) -> stack -> copy
// non primitive (function , array , object) -> Heap -> referance 


let myYoutubeName = 'tanhaYoutubecom'

let anotherName = myYoutubeName;
anotherName = 'tasriyoutube';

console.log(myYoutubeName);
console.log(anotherName);


// heap

let userOne = {
    email : 'tanha@google.com',
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "tasri@google.com";

console.log(userOne);
console.log(userTwo);

