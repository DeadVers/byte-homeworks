// // task1

const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userPassword;
  let userLogin;
  let isAuthSuccess = false;


  do {
      for(i = 3; i > 0; i--){
        userLogin = prompt("Логин:");
        if (!userLogin) {
        alert("Введите логин");
        continue;
        }

        userPassword = prompt("Пароль:");
        if (!userPassword) {
        alert("Введите пароль");
        continue;
        }

        if (userPassword === PASSWORD && userLogin === LOGIN) {
            isAuthSuccess = true;
            break;
        } else {
        alert("Данные неверны!");
        alert(`Осталось попыток: ${i - 1}`);
        }
      }
    break;

  } while (!isAuthSuccess);

  if (isAuthSuccess) {
      alert("Welcome")
    };
};

authorize();




// task 2

function primes(){
    const beg = Number(prompt('В промежутке от какого числа?'));
    const end = Number(prompt('В промежутке до какого числа?'));

    if(beg > 1){
        nextPrime:
        for(let i = beg;  i <= end; i++){
            for(let j = 2; j < i; j++){
                if ( i % j === 0){
                    continue nextPrime;
                }
            }
            console.log(i);
        }
    }else{
        nextPrime:
        for(let i = 2;  i <= end; i++){
            for(let j = 2; j < i; j++){
                if ( i % j === 0){
                    continue nextPrime;
                }
            }
            console.log(i);
        }
    }
}

primes();