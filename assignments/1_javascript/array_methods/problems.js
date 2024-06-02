// 1. Using includes with Strings:
console.log('\n1. Using includes with Strings:');

// Check Substring Presence:

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes('fox'));

// Case-Sensitive Check:

const phrase = "Hello World!";
console.log(phrase.includes('world'));

// Substring Check from Specific Position:

const text = "JavaScript is awesome!"
console.log(text.includes('awesome', 10));



// 2. Using includes with Arrays:
console.log('\n2. Using includes with Arrays:');

// Check Element Presence in Array:

const fruits = ["apple", "banana", "mango", "orange", "pineapple"];
console.log(fruits.includes('mango'));

// Check Non-Present Element:

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(6));

// Check Element Presence in Nested Array:

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const [a, b, c] = nestedArray
// console.log(nestedArray.includes(a))

const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.includes([3, 4]));



// 3. Splice Method:
console.log('\n3. Splice Method:')

// Remove Elements with Splice:

fruits.splice(2, 2);
console.log(fruits);


// Insert Elements with Splice:

const numbers2 = [1, 2, 5, 6];
numbers2.splice(2, 0, 3, 4);
console.log(numbers2)

// Replace Elements with Splice:

const letters = ["a", "b", "c", "d", "e"];
letters.splice(2, 2, 'x', 'y');
console.log(letters);



// 4. Slice Method:
console.log('\n4. Slice Method:')

// Extract Subarray with Slice:

colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors.slice(1, 3));

// Copy Entire Array with Slice:

const animals = ["cat", "dog", "elephant", "tiger"];
const animals2 = animals.slice(0, animals.length);
console.log(animals2);

// Extract Last Two Elements with Slice:

const numbers3 = [10, 20, 30, 40, 50];
console.log(numbers3.slice(numbers3.length - 2, numbers3.length));



// 5. Map Method:
console.log('\n5. Map Method:')

// Square Numbers with Map:

let nummbers4 = numbers.map((ele) => ele * ele);
console.log(nummbers4)

// Convert to Uppercase with Map:

const words = ["hello", "world"];
let words2 = words.map((ele) => ele.toUpperCase());
console.log(words2);

// Extract Property with Map:

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

let users2 = users.map((ele) => ele.name);
console.log(users2);

// 6. Filter Method:
console.log('\n6. Filter Method:');

// Filter Even Numbers:

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers6 = numbers5.filter((ele) => ele % 2 === 0);
console.log(numbers6)

// Filter Long Words:

const words3 = ["apple", "banana", "cherry", "date", "fig", "grape"];
let words4 = words3.filter((ele) => ele.length > 4);
console.log(words4);

// Filter Adults:

const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 21 },
    { name: "Jim", age: 15 },
    { name: "Jill", age: 25 },
];

const people2 = people.filter((ele) => ele.age >= 18);
console.log(people2);



//  7. Combined Problems with includes:
console.log('\n7. Combined Problems with includes:')

// Filter Array with Substring Check:

const phrases = ["I love JavaScript", "Python is great", "JavaScript is versatile", "I enjoy coding"];
let phrase2 = phrases.filter((ele) => ele.includes('JavaScript'));
console.log(phrase2);

// Check Substring in Array Elements:

const emails = ["user1@example.com", "admin@domain.com", "user2@example.com", "support@domain.com"];
let emails2 = emails.filter((ele) => ele.includes('domain.com'));
console.log(emails2);

// Find Index of Element Using Includes:

const colors2 = ["red", "green", "blue", "yellow"];
const colorToFind = "blue";
console.log(colors2.indexOf(colorToFind));



// 8. Combine Map and Filter methods:
console.log('\n8. Combine Map and Filter methods:');

// Filter and Transform Numbers:

let numbers7 = numbers5.filter((ele) => ele % 2 === 0).map((ele2) => ele2 * ele2);
console.log(numbers7);

// Filter and Capitalize Words:

let words5 = words3.filter((ele) => ele.length > 4).map((ele2) => ele2.toUpperCase());
console.log(words5);

// Filter and Extract Property:

const users3 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
];

let users4 = users3.filter((ele) => ele.age > 30).map((ele2) => ele2.name);
console.log(users4);

// Filter and Format Emails:

const emails3 = ["user1@example.com", "admin@domain.com", "user2@example.com", "support@domain.com", "test@another.com"];
let emails4 = emails3.filter((ele) => ele.includes('domain.com')).map((ele2) => 'Found: ' + ele2);
console.log(emails4);

// Filter and Calculate Prices:

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 },
    { name: "Jeans", price: 40 },
];

const products2 = products.filter((ele) => ele.price > 20).map((ele2) => ele2.price + ele2.price * 0.1);
console.log(products2)



// 9. Reduce Method:
console.log('\n9. Reduce Method:');

// Product of Numbers:

const initialValue = 1;
const pdtWithInitial = numbers.reduce((collector, currentitem) => collector * currentitem, initialValue);
console.log(pdtWithInitial);

// Calculate Total Price:

const products3 = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 },
];

const initialPrice = 0;
const calcPrice = products3.reduce((collector, currentitem) => collector + currentitem.price, initialPrice);
console.log(calcPrice);

// Count Occurrences:

const fruits2 = ["apple", "banana", "orange", "apple", "orange", "banana", "apple"];

function itrfn(collector, currentitem) {
    collector[currentitem] += 1;
    return collector;
}

const initialOccurences = { apple: 0, banana: 0, orange: 0 };
const calcOccurences = fruits2.reduce(itrfn, initialOccurences);
console.log(calcOccurences);

// Find Maximum Number:

const numbers8 = [5, 10, 15, 72, 20, 25];
// acc = 0, cur = 5

function itrfn2(collector, currentitem) {
    if (currentitem > collector) {
        collector = currentitem;
    }
    return collector;
}

const initialMax = 0;
const calcMax = numbers8.reduce(itrfn2, initialMax);
console.log(calcMax);

// Flatten Nested Arrays:

const nestedArray2 = [[1, 2], [3, 4], [5, 6]];

function itrfn3(collector, currentitem) {
    collector.push(...currentitem);
    return collector;
}

const initialFlatArray = [];
const flattenArrays = nestedArray2.reduce(itrfn3, initialFlatArray);
console.log(flattenArrays);

// Given an array of objects

const people3 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "Dave", age: 30 },
];

let objArray1 = [];
let objArray2 = [];
function itrfn4(collector, currentitem) {
    
    if(currentitem['age'] === 25) {
        objArray1.push(currentitem);
        collector['25'] = objArray1;
    }
    else if(currentitem['age'] === 30) {
        objArray2.push(currentitem);
        collector['30'] = objArray2;
    }
    return collector;
}

// let objArray = [];
// let currentAge = 0;
// function itrfn4(collector, currentitem) {

//     currentAge = currentitem['age'];
//     if(collector.hasOwnProperty(currentAge)) {
//         if(collector[currentAge] === currentitem['age']){
//         objArray.push(currentitem);
//         collector[currentAge] = objArray;
//         }
//     }
//     else {
//         collector[currentAge] = [];
//     }
//     return collector;
// }

const initialGroupedObj = {
    25: [],
    30: []
};
const groupObjs = people3.reduce(itrfn4, initialGroupedObj);
console.log(groupObjs);







