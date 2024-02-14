// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle=(length, width)=> length*width;
console.log(areaOfRectangle(10, 20));

function checkSeason(inputMonth) {
    inputMonth = inputMonth.toLowerCase();

    switch (inputMonth) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Wrong month';
    }
}
console.log(checkSeason('January'));// Winter
console.log(checkSeason('September')); //Autumn

/*
Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

const findMax=(intpuNum1, inputNum2, inputNum3)=>{
    if(intpuNum1>inputNum2){
        if(intpuNum1>inputNum3){
            return intpuNum1;
        }
        else{
            return inputNum3
        }
    }
    return inputNum2;
}

console.log(findMax(0, -10, -2));//0
console.log(findMax(0, 10, 5));//10

// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues= (x, y)=> {
    let temp = x; // Store the value of x in a temporary variable
    x = y; // Assign the value of y to x
    y = temp; // Assign the value stored in the temporary variable to y
    return [x, y]; // Return an array containing the swapped values
}
const x=10,y=20;
console.log(swapValues(x,  y));



// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
const generateColors = (colorType, numberOfColors) => {
    switch (colorType.toLowerCase()) {
      case "rgb":
        const colorInArray = Array.from({ length: numberOfColors }, () => [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ]);
  
        return numberOfColors === 1
          ? colorInArray.map((rgbColor) => `rgb(${rgbColor.join(", ")})`)[0]
          : colorInArray.map((rgbColor) => `rgb(${rgbColor.join(", ")})`);
  
      case "hexa":
        const characters = "0123456789abcdef";
        const result = [];
  
        while (result.length < numberOfColors) {
          const color = "#".concat(
            Array.from(
              {
                length: 6,
              },
              () => characters[Math.floor(Math.random() * 16)]
            ).join("")
          );
          result.push(color);
        }
        return numberOfColors === 1 ? result[0] : result;
      default:
        break;
    }
  };
  
  console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b'];
  console.log(generateColors("hexa", 1)); // '#b334ef';
  console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)'];
  console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)';
  
  // 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and
// return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
const modifyArray = (array) => {
    if (array.length < 5) {
      return "item not found";
    }
  
    array[4] = array[4].toUpperCase();
    return array;
  };
  console.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]));  


  // 7. Write a functions which checks if all items are unique in the array.
const checkForUnique = (arrayToCheck) => {
    const trackDuplicate = [];
    for (const element of arrayToCheck) {
      if (trackDuplicate.includes(element)) {
        return false;
      } else {
        trackDuplicate.push(element);
      }
    }
  
    return true;
  };
  console.log(
    checkForUnique(["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"])
  );
  console.log(checkForUnique(["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot", "Carrot"]));

  
  // 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = () => {
    const result = [];
    while (result.length < 7) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }
    return result;
  };
  
  console.log(`Generated random array is : ${sevenRandomNumbers().join(" ")}`);