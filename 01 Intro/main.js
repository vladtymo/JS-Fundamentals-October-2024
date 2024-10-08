console.log("JS code in separate file!");

// ----------- console -----------
console.log("Some information message!");
console.warn("Some waring message!");
console.error("Some error message!");
console.table([1, 2, 3, 4]);

// ----------- data types -----------
// create variable: let name = value;

let priceOfProduct = 3499.5;            // number
let count = 349999999999999n;           // BigInt

let emailOfUser = 'vlad@gmail.com';     // string
let password = "Qwerty";                // string
let letter = 'A';                       // string
let emptyLine = '';                     // string

let isValid = true;                     // boolean

let coord = {                           // object
    x: 10,
    y: -44
}

let user = {
    name: "Vlad",
    passport: null
}

console.log(user.name);
console.log(user.passport);
console.log(user.driverLicence);

let emptyObject = null;                 // null (object)
let undefObject = undefined;            // undefined

// -------- typeof --------
console.log("typeof...");

console.log(typeof (user.name));
console.log(typeof (user.passport));
console.log(typeof (user.driverLicence));

console.log(priceOfProduct + priceOfProduct);   // 1 + 1 = 2
console.log(priceOfProduct * priceOfProduct);

console.log(emailOfUser + emailOfUser);         // "1" + "1" = "11"
console.log(emailOfUser * emailOfUser);

// ----- constants
const koef = 2.97;      // number
//koef = 100; // error

// ----- JS has weak/dynamic/duck typing
console.log(typeof (priceOfProduct));
priceOfProduct = "5600$";
console.log(typeof (priceOfProduct));

// ------ browser dialogs ------
alert("Some alert message!");

let email = prompt("Enter your email: ");

// string concatenation: str + str
console.log("Hello, dear " + email + "!");
// string interpolation: `...${str}...`
console.log(`Hello, dear ${email}!`);

// convert to number: Number(str) +str
let year = +prompt("Enter current year: ", 2024);

console.log(`Current year: ${year}`);
console.log(`Next year: ${year + 1}`); // number + number = string

let like = confirm("Do you like JS?");

if (like)
    console.log("You are crazy man!");
else
    console.log("Please try again!");

// ternary operator: condition ? value_true : value_false
console.log(like ? "You are crazy man!" : "Please try again!");
