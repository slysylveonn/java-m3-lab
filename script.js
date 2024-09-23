let number = 7

if (number > 0) {
    console.log('Number is positive!');
} else if (number < 0) {
    console.log('Number is negative!');
} else {
    console.log('Number is 0!');
    }
let day = 2
switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Undefined');
        break;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


let c = 1;
while (c <= 5) {
    console.log(c);
    c++;
 if (c === 3) 
        break;   
    c++;
    if (c === 4)
        continue;
}

let globalVar = 'Access me at any time!';

function scopeExample() {
    let localVar = 'Access me within the scope of the function!';

    console.log(localVar);
}

console.log(globalVar);
