// -=-=-=-=-=-=-=- Regular Expressions -=-=-=-=-=-=-=-

// const pattern = new RegExp('[A-Z]+');
// const pattern = /[A-Z]+/;

/* Anchors
    ^ - start of the string
    $ - end of the string
*/
let pattern = /^\w[\w.]{2,}\w\@[a-z]+\.[a-z]+$/;

// TASK: validate client email address
let email = prompt("Enter your email address:", 'vladtm@gmail.com');

// --------- RegExp.test(text) - return true/false
console.log("Test email: ", pattern.test(email));

while (!pattern.test(email)) {

    console.warn("Invalid email address! Please, try again.");
    email = prompt("Enter email address again:");
}

// test() - returns true/false
// exec() - returns next match or null

/* Falgs: 
    g - global (return all matches)
    i - case insensetive
    m - multiline
*/

// TASK: validate group name: GF-45 HH-12
pattern = /(([a-z])[A-Z]{2})-\d{2}/g;

const text = "Hello! Group gPS-44 has 12 students! rRJ-45, YY-10 also.";

// --------- RegExp.exec(text) - returns next match or null
let match = null;
while ((match = pattern.exec(text)) != null) {
    console.log("Match:", match);
}

console.log("First match:", pattern.exec(text));  // PS-44
console.log("Second match:", pattern.exec(text)); // RJ-45
console.log("Third match:", pattern.exec(text));  // YY-10
console.log("Fourth match:", pattern.exec(text)); // null

pattern.lastIndex = 0; // reset index

// --------- string.matchAll(pattern) - returns all mathers
console.log("Others matches:", Array.from(text.matchAll(pattern)));

// --------- string.replace(pattern, new_value)
// group value: $group_number ($1 $2...)
console.log("Replaced string:", text.replace(pattern, "[$1-**]"));

// const res = text.replace(pattern, (match, outerGroup, innerGroup) => {
//     console.log("Outer Group:", outerGroup); // Output: "aBC"
//     console.log("Inner Group:", innerGroup); // Output: "a"

//     // Here you could return any modified version of the match
//     return `${innerGroup}-**`;
// });

// console.log(res);


// -------------- flag [m] - multiline mode
// TASK: validate car number in each line
const carNumbers = "AA3434GG\n|777|\nBK1010KJ";

pattern = /^([A-Z]{2}\d{4}[A-Z]{2}|\|\d{3}\|)$/gm;

console.log("Car numbers:", Array.from(carNumbers.matchAll(pattern)));

// TASK: get all words from the line
const line = "?Hello, Vlad! How are you? Fine.";

// Quantificators: * + ?

// --------- string.split(pattern) - split string by separator pattern
// words: Hello Vlad...fre   How...
const words = line.split(/[,.\s!?]+/).filter(x => x !== '');

console.log("Words:", words);
