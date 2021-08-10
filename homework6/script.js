   // TASK 1
const isValidPassword = () =>{
        if( password.length < 6 
            || password.localeCompare(password.toUpperCase()) === 0 
            || password.localeCompare(password.toLowerCase()) === 0){
                return false
            }
    }
    
const formattedText = (word) => {
    return word[0].toUpperCase() + word.slice(1,).toLowerCase();
}

const getFullName = () => {
    let name;
    let surname;
    let password;

    do{
        name = prompt('name?');
        if(name.length < 1){
            alert('enter valid name')
        }
    }while(!name)

    do{
        surname = prompt('surname?');
        if(surname.length < 1){
            alert('enter valid surname')
        }
    }while(!surname)

    

    do{
        password = prompt('password?');
        if(isValidPassword() === false){
              alert('enter valid password')
          }
    }while(!password 
        || isValidPassword() === false)

   

    const editedFullName = formattedText(name)+ ' ' + formattedText(surname);
    alert(editedFullName);

    console.log(` Name: ${name}\n Surname: ${surname}\n Password: ${password} \n Editted Full Name: ${editedFullName} `);
    return ` Name: ${name}\n Surname: ${surname}\n Password: ${password} \n Editted Full Name: ${editedFullName} `
} 


getFullName();

// проверочные значения:
// QwErTyS - ок
// qwertys - !ок
// QWERTYS - !ок
// QwEr -  !ок

   

    // TASK 2

// const a = Number(prompt('Введите начало промежутка:'));
// const b = Number(prompt('Введите конец промежутка:'));

// const numberGenerator = (num1, num2) =>{
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }

// result = numberGenerator(a, b);
// console.log(result);