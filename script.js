let userName = "John";
let userAge = 20;
let userCity = "Bergen";

if (userAge > 18) {
  console.log("Du er over 18, velkommen inn!");
} else if (userAge <= 18 || userCity !== userCity) {
  console.log("Du er ikke gammel nok, og du er fra feil by");
}
if (userName === "John" && userCity === "Bergen") {
  console.log(`Velkommen inn, ${userName} fra ${userCity}!`);
}

/**
 * The calculator takes in 3 parameters
 * @param {number} num1 - Number
 * @param {number} num2 - Number
 * @param {"+" | "-" | "*" | "/"} operator - String with `+` | `-` | `*` | `/`
 * @example calculator(30, 60, "+")
 * @returns {number|string} `90`, but in some cases if the user fails to provide a valid operator, or no operator at all, it will result in a error message.
 * @example "Please provide an operator..." or "Please provide a valid operator..."
 */
const calculator = (num1, num2, operator) => {
  console.log(num1, num2, operator);
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    case undefined:
      return "Please provide an operator...";
    default:
      return "Please provide a valid operator...";
  }
};

const calculatorResult = calculator(7, 7, "*");

console.log(calculatorResult);
