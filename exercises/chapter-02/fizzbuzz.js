
const isDivisibleBy3 = (number) => number % 3 === 0;
const isDivisibleBy5 = (number) => number % 5 === 0;

for (let number = 1; number <= 100; number++) {
    if (isDivisibleBy5(number) && isDivisibleBy3(number)) {
        console.log('FizzBuzz');
    }
    if (isDivisibleBy3(number) && !isDivisibleBy5(number)) {
        console.log('Fizz');
        continue;
    } 
    if (isDivisibleBy5(number) && !isDivisibleBy3(number)) {
        console.log('Buzz');
        continue;
    }
    console.log(number)
}