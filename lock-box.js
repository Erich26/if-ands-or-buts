const prompt = require('prompt-sync')();

const pinCode = 1994;
const enter = Number(prompt('Enter your 4 digit pin now: '));

if (enter === 1994) {
    console.log('Success');
} else {
    console.log('Failure');
}