// Write your code below
const input = Number(process.argv[2]);

if (!isNaN(input) && input > 0) {
    fizzBuzz(input);
} else {
}

function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
