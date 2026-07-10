/* but let er jonno 
let a = undefined;
a = 12;
ei vabe kaj kore na ei jonno error dey 
can't access before initilization 

var-> hoist -> undefine 
let -> hoist ->x 
const -> hoist -> x
*/

console.log(a);

let a = 12;


// let a = 20 ; // respect block scope  / golbal 
// {
//     let a = 10;
//     console.log("inside " , a);
    
// }

// console.log("outside : ",a);
