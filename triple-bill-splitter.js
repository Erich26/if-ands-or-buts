const prompt = require('prompt-sync')();

const person1 = Number(prompt('How much did person one pay?: '));
const person2 = Number(prompt('How much did person two pay?: '));
const person3 = Number(prompt('How much did person three pay?: '));

const equation = (person1 + person2 + person3) / 3;


if (person1 & person2 < equation) {
    console.log('Person one and two owes $');
}

else if (person1 & person3 < equation) {
    console.log('Person one and three owes $');
}

else if (person2 & person3 < equation) {
    console.log('Person two and three owes $');
}


else if (person1 < equation) {
    console.log('Person one owes $');
} 

else if (person2 < equation) {
    console.log('Person two owes $');
} 

else if (person3 < equation) {
    console.log('Person three owes $');
} 

else {
    console.log('error');
}