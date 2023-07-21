// # Fizz Buzz results
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

// loop

for (let i = 1; i <= 100; i++) {
  // Fizz Buzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(fizzBuzz);
  } else if (i % 3 == 0) {
    console.log(fizz);
  } else if (i % 5 == 0) {
    console.log(buzz);
  } else {
    console.log(i);
  }
}
