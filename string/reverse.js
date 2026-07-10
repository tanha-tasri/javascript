const sentence = 'I am learing web dev';

let reverse = ''

for(const letter of sentence){
    reverse = letter + reverse;
}

console.log(reverse);