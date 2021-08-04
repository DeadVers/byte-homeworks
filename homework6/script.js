   // TASK 1


// const getFullName = () => {
//     let name;
//     let surname;
//     let password;
//     let editedFullName;

//     do{
//         name = prompt('name?');
//         if(name.length < 1){
//             alert('enter valid name')
//         }
//     }while(!name || name.length < 1)

//     do{
//         surname = prompt('surname?');
//         if(surname.length < 1){
//             alert('enter valid surname')
//         }
//     }while(!surname || surname.length < 1)

//     do{
//         password = prompt('password?');
//         if(  password.length < 6 
//           || password.localeCompare(password.toUpperCase()) === 0 
//           || password.localeCompare(password.toLowerCase()) === 0){
//               alert('enter valid password')
//           }
//     }while(!password 
//         || password.length < 6 
//         || password.localeCompare(password.toUpperCase()) === 0 
//         || password.localeCompare(password.toLowerCase()) === 0)
    
//     editedFullName = `${name.slice(0,1).toUpperCase()}${name.slice(1,).toLowerCase()} ${surname.slice(0,1).toUpperCase()}${surname.slice(1,).toLowerCase()}`
//     alert(editedFullName);

//     console.log(` Name: ${name}\n Surname: ${surname}\n Password: ${password} \n Editted Full Name: ${editedFullName} `);

//     return ` Name: ${name}\n Surname: ${surname}\n Password: ${password} \n Editted Full Name: ${editedFullName} `
// } 


// getFullName();

// проверочные значения:
// QwErTyS
// qwertys
// QWERTYS
// QwEr

   

    // TASK 2

// const a = Number(prompt('Введите начало промежутка:'));
// const b = Number(prompt('Введите конец промежутка:'));

// const numberGenerator = (num1, num2) =>{
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }

// result = numberGenerator(a, b);
// console.log(result);