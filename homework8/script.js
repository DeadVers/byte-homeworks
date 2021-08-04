//           TASK 1
// const trueQuantity = (arr) => {
//     let numberOfTrue = 0;
//     for (let value of arr){
//         if(value === true){
//             numberOfTrue++
//         }
//     }
//     return numberOfTrue;
// }


// res = trueQuantity([])
// console.log(res)


//           TASK 2

// const getOccurrencesCount = (arr) => {
//     let elementsAndOccurences = {};

//     for( let string of arr){
//         // console.log(string)
//         if((string in elementsAndOccurences) === false){
//             elementsAndOccurences[string] = 1;
//         }else{
//             elementsAndOccurences[string]++;
//         }
//     }

//     return elementsAndOccurences;
// }

// res = getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ])
// console.log(res);
// res2 = getOccurrencesCount(["a", "v", "a", "b", "b"])
// console.log(res2);

        //    TASK 3

const findExcess = (arr) =>{
    if (arr.length < 3){
        alert('Too short array ;(')
    }

    let evenNumbers = 0;
    let oddNumbers = 0;

    for(let number of arr){
        if((number % 2)=== 0){
            evenNumbers++
        }else{
            oddNumbers++
        }
    }

    if(evenNumbers > oddNumbers){
        for(let number of arr){ 
            if((number % 2)!== 0){
            console.log(number)
            }
        }
    }else{
        for(let number of arr){ 
            if((number % 2) === 0){
              console.log(number)
            }
        }
    }
}

const res = findExcess([1,2,6,4,8]);
const res2 = findExcess([1,3,5,6,9]);
const res3 = findExcess([0, 1, 2]);
const res4 = findExcess([1, 2, 3]);
const res5 = findExcess([2, 6, 8, 10, 3]);
const res6 = findExcess([2, 6, 8, 10, 3]);
const res7 = findExcess([1, 1, 0, 1, 1]); 


