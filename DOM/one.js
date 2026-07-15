let mark = 70;

let grade = mark >= 80 ? "A"
           : mark >=70 ? "B"
           : mark >=60 ? "C"
           :  "F"

        //    console.log(grade);

        let day = 3;

        switch(day){
            case 1 :
                console.log("sunday");
                break;
            case 2:
                console.log("Monday");
                    break;
            case 3:
                console.log("Tuesday");
                    break;
            case 4:
                console.log("wednesday)");
                    break;
            case 5:
                console.log("thusday");
                    break;
            case 6:
                console.log("friday");
                    break;
            case 7:
                console.log("saturday");
                    break;
                    
        }

        // console.log(day);


        for(let i =0;i<10;i++)
        {
        //    console.log(`7 x ${i} = ${7*i}`);
        }


        for(let row = 1; row<=5;row++)
        {
            let star = " ";
            for(let col = 1; col<row;col++)
            {
                star += ("*");
            }

            // console.log(star);
            
        }


// for of use in array and string 

let fruits =["Mango","Banana","Orange","cocunat"];

let copyfruits = [...fruits]

// console.log(fruits);

// console.log(copyfruits);


for(let fruit of fruits)
{
    // console.log(fruit);
    
}



// for in use in object 

let student = {
    name : "Tanha",
    Id : 242034040,
    Dept : "SWE"
}
// console.log(student.Id);

for(let key in student){
    // console.log(key + " :" + student[key]);
    
}


//  String 

let str = "Hello, Bangladesh! ";
// console.log(str.trim());

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);

// console.log(str.includes("Bangladesh"));
// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("Hello"));
// console.log(str.indexOf("Hello"));


// console.log(str.slice(7,18));



// class 

class rectangle {
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
    }

    getarea = ()=>{
        return this.width*this.height;
    }
}

let a = new rectangle(12,3);
// console.log(a.getarea());



// Array

let students = ["Alice","Bob","Carol"];

console.log(students.push("Tanha"));






