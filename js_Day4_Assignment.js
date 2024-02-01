
const constStrNum="10";
console.log(typeof constStrNum); //string
console.log(constStrNum); //10
console.log(typeof parseInt(constStrNum)); //number

const constStrDec="9.8";
console.log(typeof constStrDec); //string
console.log(parseInt(Math.round(constStrDec))); //10


function randomNumberGenerator(minNum, maxNum){
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}
console.log(randomNumberGenerator(0, 100)); //0 to 100 random number
console.log(randomNumberGenerator(50, 100)); // 50 to 100 random number

// console.log("1 1 1 1 1\n");
// console.log("2 1 2 4 8\n");
// console.log("3 1 3 9 27\n");
// console.log("4 1 4 16 64\n");
// console.log("5 1 5 25 125\n");



const numOfRows=5;
for(let iCounter=1; iCounter<=5; iCounter++){
    console.log(`${iCounter} 1 ${iCounter}   ${iCounter*iCounter}  ${iCounter*iCounter*iCounter}`);
    
}

function caluculateArea(numBreadth, numHeight){
    return (0.5 * numBreadth * numHeight);
    
}
console.log("Area is " , caluculateArea(10, 20));


