// task 1

function countSum(a, b){
    const sum = a + b;
    return sum
}

const getSum = (a, b) => a + b;

const res1 = countSum(12, 12);
const res2 = countSum(true, true);

const result1 = getSum(3, 6);
const result2 = getSum('Cyber', 'Punk');

console.log(res1);
console.log(res2);
console.log(result1);
console.log(result2);

// task 2


greeting();

function greeting() {
    const userName = prompt('Как Вас зовут?');
    const userAge = Number(prompt('Сколько Вам лет?'));

    if (userAge > 30){
        const olderGreeting = 'Здравствуйте, '+ userName;
        alert(olderGreeting);
    } else {
        const youngerGreeting = 'Привет, ' + userName;
        alert(youngerGreeting);
    } 
}

// task 3

function toPower(a, b = 2){
    const expon = a ** b;
    return expon;
}

const result = toPower();
console.log(result);



