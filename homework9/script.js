// TASK 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

const filteredData = (array, desiredObject) => {
        const desiredKeys = Object.keys(desiredObject);     // desiredKeys[0] - age
        // console.log(`desired keys`, desiredKeys.length)         // desiredKeys[1] - position
        const res = [];                                     // desiredKeys.length = 2
        

        for(let object of array){
          let numberOfTruth = 0;
          for(i = 0; i < desiredKeys.length; i++){
            // console.log(object)
              let isCoincide = true;
              
            if(object[desiredKeys[i]] !== desiredObject[desiredKeys[i]]){
              isCoincide = false;
            }else{
              numberOfTruth += 1
            }

            if(numberOfTruth === desiredKeys.length){
              res.push(object);
            }
          }
        }
        console.log(res)

}

filteredData(data, { isActive: true, age: 29 });


// TASK 2

// First

// const ownMap = (arr, callback) =>{
//     const res = [];

//     for(let number of arr){
//         newNum = callback(number, arr);
//         res.push(newNum);
//     }
//     console.log(res);
//     return res;
// }

// const increment = (number) => number + 1;
// ownMap([1, 2, 3], increment); // [2, 3, 4]

// Second

// const ownForEach = (arr, callback) => {

//     for( i = 0; j = arr[i]; i < arr.length, i++){
//         callback(j, i, arr)
//     }
// }

// const logger = (element, index, array) => {
//     console.log(`In array [${array}] on position ${index}: ${element}`);
//   };
// ownForEach([1,2,3], logger);

// Third

// const ownFilter = (arr, callback) => {
//   const res = [];
//   for (let elem of arr) {
//     if (callback(elem, arr)) {
//       res.push(elem);
//     }
//   }
//   console.log(res);
//   return res;
// };

// const isNegative = (number) => number < 0;
// ownFilter([-2, 4, -1], isNegative); // [-2, -1]
