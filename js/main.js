// # Fizz Buzz results
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

// where to insert card

const where = document.getElementById("fizz-buzz");
console.log(where);

// loop

for (let i = 1; i <= 100; i++) {
  // create card
  const card = document.createElement("div");
  where.appendChild(card);
  //   find card
  const cardFinder = document.querySelector("#fizz-buzz > div:last-child");
  //   add box to card
  cardFinder.classList.add("box", "col-1", "m-4", "p-4");
  // Fizz Buzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(fizzBuzz);
    cardFinder.innerHTML = fizzBuzz;
    cardFinder.classList.add("fizzBuzz-box");
  }
  //   fizz
  else if (i % 3 == 0) {
    console.log(fizz);
    cardFinder.innerHTML = fizz;
    cardFinder.classList.add("fizz-box");
  }
  //   buzz
  else if (i % 5 == 0) {
    console.log(buzz);
    cardFinder.innerHTML = buzz;
    cardFinder.classList.add("buzz-box");
  }
  //   number
  else {
    console.log(i);
    cardFinder.innerHTML = i;
    cardFinder.classList.add("number-box");
  }
}
