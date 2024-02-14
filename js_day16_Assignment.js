
const modifiedReduce = (numbersArray,reduceFunction,accumulatorInitialValue=0) =>
{
    let resultAccumulator = 0;
    if(accumulatorInitialValue)
    resultAccumulator =accumulatorInitialValue;
    for(const number of numbersArray)
    {
        resultAccumulator=reduceFunction(resultAccumulator,number);
    }
    return resultAccumulator;
}

const numbersArray =[5,4,10,15,50];

console.log(modifiedReduce(numbersArray,(accumulator,number) => accumulator+number,0));
console.log(modifiedReduce(numbersArray,(accumulator,number) => accumulator+number,20));
console.log(modifiedReduce(numbersArray,(accumulator,number) => accumulator+number,10));
console.log(modifiedReduce(numbersArray,(accumulator,number) => accumulator+number));
