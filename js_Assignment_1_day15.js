/*
Iterate 0 to 10 using for loop, do the same using while and do while loop
Iterate 0 to n using for loop
*/
let iCounter1;
for ( iCounter = 0; iCounter <= 10; iCounter++) {
    console.log(iCounter);
}

let iCounter2 = 0;
while (iCounter2 <= 10) {
    console.log(iCounter2);
    iCounter2++;
}

 let iCounter3 = 0;
do {
    console.log(iCounter3);
    iCounter3++;
} while (iCounter3 <= 10);


// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let iCounter = 10; iCounter >= 0; iCounter--) {
    console.log(iCounter);
}

iCounter2 = 10;
while (iCounter2 >=0) {
    console.log(iCounter2);
    iCounter2--;
}

 iCounter3 = 10;
do {
    console.log(iCounter3);
    iCounter3--;
} while (iCounter3 >= 0);

/*
4. Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
    */
    for(let iCounter1=1; iCounter1<=7; iCounter1++){
        let hasContainer='';
        for(let iCounter2=1; iCounter2<=iCounter1; iCounter2++){
            hasContainer=hasContainer+'#';
        }
        console.log(hasContainer);
    }

/*
    5. Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

    for(iCounter1=0; iCounter1<=10; iCounter1++){
        console.log(`${iCounter1}  ${iCounter1*iCounter1}  ${iCounter1*3}`);
    }


    /*
*/

// 5. Use for loop to iterate from 0 to 100 and print only even numbers


for(iCounter1=0; iCounter1<=100; iCounter1++){
    if(!(iCounter1%2)){
        console.log(iCounter1);
    }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers

for(iCounter1=0; iCounter1<=100; iCounter1++){
    if(iCounter1%2){
        console.log(iCounter1);
    }
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers


// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfAllNumbers=0;
for(iCounter1=0; iCounter1<=100; iCounter1++){
    sumOfAllNumbers=sumOfAllNumbers+iCounter1;
    
}
console.log("Sum of All numbers is", sumOfAllNumbers);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]

let sumOfAllEvenNumbers=0;
for(iCounter1=0; iCounter1<=100; iCounter1++){
    if(!(iCounter1%2)){
        sumOfAllEvenNumbers=sumOfAllEvenNumbers+iCounter1;
    }
}
console.log("Sum of All Even Numbers", sumOfAllEvenNumbers);

let sumOfAllOddNumbers=0;
for(iCounter1=0; iCounter1<=100; iCounter1++){
    sumOfAllOddNumbers=sumOfAllOddNumbers+iCounter1;
}
console.log("Sum of All Odd Numbers", sumOfAllOddNumbers);

/*
*/

// 11. Develop a small script which generate array of 5 random numbers

const randomArray=()=>{
    let randomNumberArray=[];
    for(iCounter1=0; iCounter1<5; iCounter1++){
       randomNumberArray[iCounter1]= Math.floor(Math.random() * 100);

    }
    return randomNumberArray;
}

console.log(randomArray());

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique

const uniqueRandomArray=()=>{
    let uniqueRandomNumberArray=[];
    for(iCounter1=0; iCounter1<5; iCounter1++){
        let randomNumber= uniqueRandomNumberArray[iCounter1]= Math.floor(Math.random() * 100);
      if((uniqueRandomNumberArray.includes(randomNumber))){
        uniqueRandomNumberArray[iCounter1]=randomNumber;
      }

    }
    return uniqueRandomNumberArray;
}

console.log(uniqueRandomArray());

// 13. Develop a small script which generate a six characters random id: //iuyt56
const sixDigitId=()=>{
    let charString = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for(iCounter1=0; iCounter1<5; iCounter1++){
        randomId=randomId+charString.charAt(Math.floor(Math.random()*charString.length));
        
    }
    
    return randomId;

}

console.log("Random id is ",sixDigitId());

// 14. Develop a small script which generate any number of characters random id.
const randomDigitId=(requiredLength)=>{
    let charString = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for(iCounter1=0; iCounter1<requiredLength; iCounter1++){
        randomId=randomId+charString.charAt(Math.floor(Math.random()*charString.length));
        
    }
    return randomId;
}

console.log("Any characters random id is ", randomDigitId(20));

// 15. Write a script which generates a random hexadecimal number.
const hexadecimalRandomNumber=()=>{
    let charString = 'abcdef0123456789';
    let randomId = '';
    for(iCounter1=0; iCounter1<6; iCounter1++){
        randomId=randomId+charString.charAt(Math.floor(Math.random()*charString.length));
        
    }
    return randomId;
}

console.log("Random hexadecimal number is ", hexadecimalRandomNumber());

/*
16. Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countryArray=["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
let uppercaseCountries = countryArray.map(country => country.toUpperCase());
console.log(uppercaseCountries);


/*
17. Using the above countries array, create an array for countries length
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/

let countriesLength = countryArray.map(country => country.length);
console.log(countriesLength);

/*
18. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
/*
19. In above countries array, check if there is a country or countries containing the word 'land'. If there 
are countries containing 'land', print it as array. If there is no country containing the word 'land', print 
'All these countries are without land'.
['Finland','Ireland', 'Iceland']
*/

let countriesEndsWithLand = countryArray.filter(country => country.toLowerCase().includes('land'));

if (countriesEndsWithLand.length > 0) {
    console.log(countriesEndsWithLand);
} else {
    console.log("All these countries are without land");
}


console.log(countriesEndsWithLand);


/*

*/

// 20. Using the above countries array, find the country containing the biggest number of characters.****************

console.log("Max number from array is ", countryArray[countriesLength.indexOf(Math.max(countriesLength))]);

// 21. Using the above countries array, find the country containing only 5 characters.
console.log("country containing only 5 characters " ,countryArray[countriesLength.indexOf(5)]);

// 22. Find the longest word in the webTechs array.
let webTechs=[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]];
let longestWord = "";

for (let iCounter1 = 0; iCounter1 < webTechs.length; iCounter1++) {
    let word = webTechs[iCounter1][0]; // Accessing the word (first element of each inner array)
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log("Longest word from array is",longestWord);
// let flatWebTechArray=webTechs.flat();
// console.log(webTechs);

// let webTechString=[];
// let webTechNumber=[];

// for(const tech of flatWebTechArray){
//     if(typeof tech === 'string'){
//         webTechString.push(tech);
//     }
//     else if(typeof tech === 'number'){
//         webTechNumber.push(tech);
//     }

// }
// console.log(webTechString);
// console.log(webTechNumber);
// console.log("country containing only 5 characters " ,countryArray[countriesLength.indexOf(5)]);




// 23. Use the webTechs array to create the following array of arrays:*******


// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. 
// Create the acronym MERN by using the array mernStack

let mernStack = ["MongoDB", "Express", "React", "Node"];
let mernAcroName=mernStack.map(tech=>tech.charAt(0)).join('');
console.log(mernAcroName);

// 25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// using a for loop or for of loop and print out the items.
const techArray=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(const tech of techArray){
    console.log(tech);
}


// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitsArray=['banana', 'orange', 'mango', 'lemon']
let reversedArray = fruitsArray.map((element, index, arr) => arr[arr.length - 1 - index]);
console.log(reversedArray);

/*
27. Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

OUTPUT: 

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
  */
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const flatTechArray=fullStack.flat();
  for(const tech of flatTechArray){
    console.log(tech);
  }