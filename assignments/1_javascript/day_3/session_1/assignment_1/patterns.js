// # Pattern questions

// ### Question 33
// Print pattern
//```
// 1
// 11
// 111
// 1111
// 11111
//```

function pattern_1() {
    console.log();
    console.log("Question 33");
    for (let i = 0; i <= 4; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + "1";
        }
        console.log(row)
    }
}

pattern_1();

// ### Question 34
// Print Pattern
// ```
// ---
// ---
// ---
// ```

console.log();
console.log("Question 34");
for (let i = 0; i <= 2; i++) {
    console.log("---")
}

// ### Question 35
// Print pattern
// ```
// ***
// ***
// ***
// ***
// ```

console.log();
console.log("Question 35");
for (let i = 1; i <= 4; i++) {
    console.log("***")
}

// ### Question 36
// Print Pattern
// ```
// 12345
// 1234
// 123
// 12
// 1
// ```

console.log();
console.log("Question 36");
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j;
    }
    console.log(row)
}

// ### Question 37
// Print pattern
// ```
// 54321
// 5432
// 543
// 54
// 5
// ```

console.log();
console.log("Question 37");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 5; j >= i; j--) {
        row = row + j;
    }
    console.log(row)
}

// ### Question 38
// Print pattern
// ```
// 54321
// 4321
// 321
// 21
// 1
// ```

console.log();
console.log("Question 38");
let length = 5;
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = length; j >= 1; j--) {
        row = row + j;
    }
    length--;
    console.log(row)
}

// ### Question 39
// Print pattern
// ```
// $$
// $$
// $$
// $$
// $$
// $$
// ```

console.log()
console.log('Question 39')
let rows = 6;
for (i = 1; i <= rows; i++) {
    console.log('$$');
}

// ### Question 40
// Print pattern
// ```
// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****
// ```

console.log();
console.log('Question 40');

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }
    console.log(row)
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }
    console.log(row)
}

// ### Question 41
// Print pattern
// ```
// 10987654321
// 987654321
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1
// ```

console.log();
console.log("Question 41");
let length2 = 10;
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = length2; j >= 1; j--) {
        row = row + j;
    }
    length2--;
    console.log(row)
}

// ### Question 42
// Print pattern
// ```
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// ```

console.log();
console.log('Question 42');

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }
    console.log(row)
}

for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }
    console.log(row)
}

// ### Question 43
// Print pattern
// ```
// *********
//  *******
//   *****
//    ***
//     *
// ```

console.log();
console.log('Question 43');
let r = 5;
for (let i = r; i >= 1; i--) {
    let row = "";
    for (let j = r - i; j >= 1; j--) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

// ### Question 44
// Print Pattern
// ```
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ```
// has context menu


// has context menu

function pyramid() {
    console.log();
    console.log('Question 44');
    let r = 5;
    for (let i = 1; i <= r; i++) {
        let row = "";
        for (let j = r - i; j >= 1; j--) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
}
pyramid();