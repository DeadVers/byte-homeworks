    // TASK 1

// const makeSchedule = () => {
//     const schedule = {};
//     do{
//        const askTime = prompt('Когда?');

//        if(askTime === null ){
//            break;
//        }
//        const askTask = prompt('Какая задача?');

//        if( askTask === null){
//             break;
//        }

       
//        schedule[`${askTime}`] = askTask;
       
//        console.log(schedule);
//     }while(true)
// }

// makeSchedule();

    // TASK 2

    const salaries = {
        John: "4300.00",
        Ann: "5700.40",
        Pete: "4900.95",
    };

    const salarySum = (object) => {
        let sum = 0;
        for (let key in object){
            // console.log(Number(object[key]));
            
            sum += Number(Math.round(object[key]));
        }
        console.log(sum);
        return sum;
        
    }

    salarySum(salaries);