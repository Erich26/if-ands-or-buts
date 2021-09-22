const prompt = require('prompt-sync')();

const person1 = Number(prompt('How much did person one pay?: '));
const person2 = Number(prompt('How much did person two pay?: '));

if (person1 > person2) {
    console.log('Person two owes $');
} else if (person1 < person2) {
    console.log('Person one owes $');
} else {
    console.log('Error')
}