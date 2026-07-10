const college = {
    name : 'amirjan',
    class : ['11','12'],
    events : ['science fair','bijoy dibosh','21 feb'],
    unique :{
        colour : 'black',
        result: {
            gpa : 5,
            merit : 'top'
        }
    }
}

college.events[1] = '16 December';

console.log(college.events);


console.log(college.unique.result.merit);
