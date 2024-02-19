
// Explain the difference between forEach, map, filter, and reduce.

// forEach
// forEach() is used to execute the same code on every element in an array but does not 
// change the array and it returns undefined.
// It executes a provided function once for each array element.
// It iterates over each element in the array and applies a function to each element.
// It doesn't return anything.
// It's primarily used when you want to perform some operation on each element of the array without altering the array itself.

// map()
// map() executes the same code on every element in an array and returns a new array with the updated elements.
// creates a new array populated with the results of calling a provided function on every element in the calling array.
// It iterates over each element in the array and applies a function to each element, then returns a new array with the results.
// It doesn't mutate the original array; instead, it returns a new array.
// It's commonly used when you want to transform each element of an array and get a new array with the transformed elements.

// filter():
// filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements 
// that return truthy for the criteria.
// creates a new array with all elements that pass the test implemented by the provided function.
// It iterates over each element in the array and applies a function that returns true or false. Elements for which the function returns true are included in the new array.
// It doesn't mutate the original array; instead, it returns a new array.
// It's commonly used when you want to select elements from an array based on a condition.

// Reduce
// executes a reducer function on each element of the array, resulting in a single output value.
// It iterates over each element in the array and applies a function to accumulate a single result.
// It takes an accumulator and the current element as arguments and returns a single value.
// It can be used for various purposes like summing up values, flattening arrays, or any operation that involves 
// reducing an array to a single value.


// Define a callback function before you use it in forEach, map, filter or reduce.



// Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
console.log("Names in country array ");
countries.forEach((country)=>console.log(country));
/*Finland
Sweden
Denmark
Norway
IceLand*/

// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log("Names in names array ");
names.forEach((name)=>console.log(name));
/*
Names in names array 
Asabeneh
Mathias
Elias
Brook
*/

// Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
numbers.forEach((number)=>console.log(number)); // 1 2 3 4 5 6 7 8 9 10

// Use map to create a new array by changing each country to uppercase in the countries array.
const countryNamesInUpperCase=countries.map(country=>country.toUpperCase());
console.log(countryNamesInUpperCase); //[ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]


// Use map to create an array of countries length from countries array.
const countriesLength=countries.map(country=>country.length); 
console.log(countriesLength); //[ 7, 6, 7, 6, 7 ]

// Use map to create a new array by changing each number to square in the numbers array
const numbersArraySquare=numbers.map(number=>number*number); 
console.log(numbersArraySquare);
/*
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
*/

// Use map to change to each name to uppercase in the names array
const namesToUpperCase=names.map(name=>name.toUpperCase());
console.log(namesToUpperCase); //[ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]


// Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  const productToPrice=products.map(product=>console.log(product.price));
  /*
  3
6
 
8
10
*/

//   Use filter to filter out countries containing land.
const countriesEndsWithLand=countries.filter(country=>country.endsWith("land"));
console.log(countriesEndsWithLand); //[ 'Finland' ]

// Use filter to filter out countries having six character.
const countriesHavingSixLength=countries.filter(country=>country.length===6);
console.log(countriesHavingSixLength); //[ 'Sweden', 'Norway' ]

// Use filter to filter out countries containing six letters and more in the country array.
const countriesMoreThanSixChar=countries.filter(country=>country.length>=6);
console.log(countriesHavingSixLength);  //[ 'Sweden', 'Norway' ]
                             

// Use filter to filter out country start with 'E';
const countryNameStartsWith=countries.filter(
  country=>country.startsWith("E") //[]
);
console.log(countryNameStartsWith); //[]

// Use filter to filter out only prices with values.
  const pricesWithValues=products.filter(
    product=>typeof product.price==='number' && !isNaN(product.price)
  );
  console.log(pricesWithValues);    //   [
                                    //     { product: 'banana', price: 3 },
                                    //     { product: 'mango', price: 6 },
                                    //     { product: 'avocado', price: 8 },
                                    //     { product: 'coffee', price: 10 }
                                    //   ]
//   Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let array=["Sidd", "Nilange", 1, null, 2, undefined, "Siddhant"];
const onlyStringArray=array.filter(string=>typeof string==='string');
  console.log(onlyStringArray); //[ 'Sidd', 'Nilange', 'Siddhant' ]

// Use reduce to sum all the numbers in the numbers array.
const reducedNumber=numbers.reduce((Accumulator, currentValue)=>Accumulator+currentValue);
console.log(reducedNumber); //55

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const reducedCountryArray=countries.reduce((Accumulator, currentString)=>Accumulator+", "+currentString);
console.log(reducedCountryArray); //Finland, Sweden, Denmark, Norway, IceLand

// Explain the difference between some and every



// Use some to check if some names' length greater than seven in names array
const lengthGreaterThanSeven=names.some(number=>number.length>7);
console.log(lengthGreaterThanSeven); //true

// Use every to check if all the countries contain the word land
const isStringContainsTheLand=countries.some(country=>country.endsWith("land"));
console.log(isStringContainsTheLand); //true

// Explain the difference between find and findIndex.

// Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters=countries.find(country=>country.length===6);
console.log(firstCountryWithSixLetters); //true

// Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOfCountryWithSixLetters=countries.findIndex(country=>country.length===6);
console.log(indexOfCountryWithSixLetters); //Sweden

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexOfCountry=countries.findIndex(country=> country==='Norway');
console.log(indexOfCountry); //1

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indexOfCountryRussia=countries.findIndex(country=> country==='Russia');
console.log(indexOfCountryRussia); //3

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPriceOfProduct=products.map(
  product=>product.price).filter(price=>typeof price==='number').reduce((Accumulator, currentString)=>Accumulator+currentString
);
console.log(totalPriceOfProduct); //-1

// Find the sum of price of products using only reduce reduce(callback))
const sumOfAllPrices = products.reduce((accumulator, currentPrice) => {
  if (!isNaN(currentPrice.price) && currentPrice.price !== ' ') {
    return accumulator + parseFloat(currentPrice.price);
  } else {
    return accumulator;
  }
}, 0);

console.log(sumOfAllPrices); //27

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you 
// find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countriesArray = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Georgia',
  'Hungary',
  'Iceland',
  'Japan',
  'Kazakhstan',
  'Laos',
  'Mongolia',
  'Nepal',
  'Poland',
  'Romania',
  'Solomon Islands',
  'Sweden',
  'Turkey',
  'Ukraine',
  'Venezuela'
];

const categorizeCountries=(countriesArray, pattern)=>{
  return countriesArray.filter(
    country=>country.toLowerCase().includes(pattern)).sort();
}

const countriesEndsWithLandPatterns=categorizeCountries(countriesArray, 'land');
console.log(countriesEndsWithLandPatterns); //[ 'Finland', 'Iceland', 'Poland', 'Solomon Islands' ]

const countriesWithiaPatterns=categorizeCountries(countriesArray, 'ia');
console.log(countriesWithiaPatterns); //[ 'Albania', 'Bolivia', 'Ethiopia', 'Georgia', 'Mongolia', 'Romania' ]

const countriesWithisLandPatterns=categorizeCountries(countriesArray, 'island');
console.log(countriesWithisLandPatterns); //[ 'Solomon Islands' ]

const countriesWithstanLandPatterns=categorizeCountries(countriesArray, 'stan');
console.log(countriesWithstanLandPatterns); //[ 'Kazakhstan' ]

// Create a function which return an array of objects, which is the letter and the number of times the 
// letter use to start with a name of a country.


const arrayOfObjects = (countries)=>{
  const letters={};

  for(const country of countries){
    const firstLetter=country[0].toLowerCase();

    if(letters[firstLetter]){
      letters[firstLetter]++;

    }
    else{
      letters[firstLetter]=1;

    }
  }
  const letterArray=[];
  for(const char in letters){
    letterArray.push({char, count: letters[char]});
  }
  return letterArray;
}

const charCountObject=arrayOfObjects(countriesArray);
console.log(charCountObject);
/*
 [
    { letter: 'a', count: 3 },
    { letter: 'b', count: 1 },
    { letter: 'c', count: 2 },
    { letter: 'd', count: 2 },
    { letter: 'e', count: 2 },
    { letter: 'f', count: 1 },
    { letter: 'g', count: 1 },
    { letter: 'h', count: 1 },
    { letter: 'i', count: 2 },
    { letter: 'j', count: 1 },
    { letter: 'k', count: 1 },
    { letter: 'l', count: 1 },
    { letter: 'm', count: 1 },
    { letter: 'n', count: 1 },
    { letter: 'p', count: 2 },
    { letter: 'r', count: 1 },
    { letter: 's', count: 2 },
    { letter: 't', count: 1 },
    { letter: 'u', count: 1 },
    { letter: 'v', count: 1 }
  ]
  */

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = (countries) => {

  const takeFirstN = (arr, n) => arr.slice(0, n);
  const toUpperCase = (str) => str.toUpperCase();
  return takeFirstN(countries.map(toUpperCase), 10);
};


console.log(getFirstTenCountries(countriesArray));
/*
[
  'ALBANIA',  'BOLIVIA',
  'CANADA',   'DENMARK',
  'ETHIOPIA', 'FINLAND',
  'GEORGIA',  'HUNGARY',
  'ICELAND',  'JAPAN'
]
*/

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = (countries) => {

  const takeFirstN = (arr) => arr.slice(-10);
  const toUpperCase = (str) => str.toUpperCase();
  return takeFirstN(countries.map(toUpperCase));
};

console.log(getLastTenCountries(countriesArray));
/*
[
  'LAOS',
  'MONGOLIA',
  'NEPAL',
  'POLAND',
  'ROMANIA',
  'SOLOMON ISLANDS',
  'SWEDEN',
  'TURKEY',
  'UKRAINE',
  'VENEZUELA'
]
*/
// Find out which letter is used many times as initial for a country name from the countries 
// array (eg. Finland, Fiji, France etc)
let result={};
const charMap = new Map();

for(const country of countriesArray){
  let char=country[0].toLowerCase();

  if(charMap.has(char)){
   charMap.set(char, charMap.get(char)+1);
  }
  else{
    charMap.set(char, 1);
  }
}
let mostCommonLetter;
let maxCount = 0;
for (const [letter, count] of charMap) {
  if (count > maxCount) {
    mostCommonLetter = letter;
    maxCount = count;
  }
}
console.log(`Most common letter used is   ${mostCommonLetter} ${maxCount}`); //Most common letter used is   s 2

