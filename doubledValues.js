// // Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled


// const doubledValues = function (arr) {

//     let doubled = [];

//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         doubled.push(value * 2)
//     }
//     return doubled;
// }


//Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// const onlyEvenValues = function (arr) {

//     let evens = [];

//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];

//         if (value % 2 === 0) {
//             evens.push(value);
//         }
//     };
//     return evens;
// }

// console.log(onlyEvenValues([1, 2, 3])) // [2]
// console.log(onlyEvenValues([5, 1, 2, 3, 10])) // [2,10]



// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.


// const showFirstAndLast = function (arr) {
//     let beginEnd = [];

//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         beginEnd.push(word[0] + word[word.length - 1])

//     }

//     return beginEnd;

// }


// console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])) // ["ct", "mt", "tm", "tt"]
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']


// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object


// const addKeyAndValue = function (arr, key, value) {


//     arr.forEach(function (val) {
//         val[key] = value;
//     });
//     return arr;
// }


// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.This function should be case insensitive so a lowercase letter and uppercase letter should count


// const vowelCount = function (str) {

//     let word = str.split("")
//     let vowels = 'aeiouAEIOU'

//     let obj = {};
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         let char = word[i]
//         if (vowels.includes(char)) {
//             if (obj[char]) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }

//         }

//     }
//     return obj;
// }


// console.log(vowelCount('Elie')) // {e:2,i:1};
// console.log(vowelCount('Tim')) // {i:1};
// console.log(vowelCount('Matt')) // {a:1})
// console.log(vowelCount('hmmm')) // {};
// console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1}

// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

// const doubleValuesWithMap = function (arr) {

//     return arr.map(function (value) {
//         return value * 2;

//     })
// }


// console.log(doubleValuesWithMap([1, 2, 3])) // [2,4,6]
// console.log(doubleValuesWithMap([1, -2, -3])) // [2,-4,-6]


// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

// const extractKey = function (arr, key) {

//     let valueKey = [];

//     arr.forEach(function (val) {
//         valueKey.push(val[key])
//     })
//     return valueKey;
// }



// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of ???first??? and the value of a key with the name of ???last??? in each object, concatenated together with a space.



// const extractFullName = function (arr) {


//     arr.map(function (val) {
//         return val.first + " " + val.last;
//     })


// };


// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.


// const filterByValue = function (arr, key) {

//     return arr.filter(function (value) {
//         return value[key] !== undefined;


//     });
// }


// console.log(filterByValue(
//     [
//         { first: 'Elie', last: "Schoppik" },
//         { first: 'Tim', last: "Garcia", isCatOwner: true },
//         { first: 'Matt', last: "Lane" },
//         { first: 'Colt', last: "Steele", isCatOwner: true }
//     ],
// //     'isCatOwner'
// // ))

// const filterByValue = function (arr, key) {

//     return arr.filter(function (val) {

//         return val[key] !== undefined;


//     });
// }


// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

// // const find = function (arr, val) {

// //     return arr.filter(function (el) {
// //         return el === val
// //     })[0];

// // }

// // console.log(find([1, 2, 3, 4, 5], 3)) // 3
// // console.log(find([1, 2, 3, 4, 5], 10)) // undefined



// // Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

// const findInObj = function (arr, key, value) {

//     return arr.filter(function (el) {
//         return el[key] === value;
//     })
// }

// findInObj(
//     [
//         { first: 'Elie', last: "Schoppik" },
//         { first: 'Tim', last: "Garcia", isCatOwner: true },
//         { first: 'att', last: "Lane" },
//         { first: 'Colt', last: "Steele", isCatOwner: true }
//     ],
//     'isCatOwner',


// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels(both uppercased and lowercased) removed.Every character in the new string should be lowercased.

// const removeVowels = function (str) {

//     let newStr = str.split("");

//     let vowels = 'aeiouAEIOU'

//     let noVowels = [];

//     for (let i = 0; i < newStr.length; i++) {
//         let char = newStr[i];

//         if (!vowels.includes(char)) {
//             noVowels.push(char.toLowerCase())



//         }



//     }
//     return noVowels;


// }


// console.log(removeVowels('Elie')) // ('l')
// console.log(removeVowels('TIM')) // ('tm')
// console.log(removeVowels('ZZZZZZ')) // ('zzzzzz')


// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled(HINT - you can use map and fitler to double and then filter the odd numbers).

const doubleOddNumbers = function (arr) {


    return arr.filter(function (val) {
        return val % 2 !== 0;
    })
        .map(function (val) {
            return val * 2;
        })
}


console.log(doubleOddNumbers([1, 2, 3, 4, 5])) // [2,6,10]
console.log(doubleOddNumbers([4, 4, 4, 4, 4])) // []
