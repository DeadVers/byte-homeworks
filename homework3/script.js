// task 1

let num1 = Number(prompt('Введите первое число:'));
let num2 = Number(prompt('Введите второе число:'));

if (num1 > num2){
    alert('Число ' + num1 + ' больше, чем число ' + num2);
}else if (num1 < num2){
    alert('Число ' + num1 + ' меньше, чем число ' + num2);
} else {
    alert('Числа равны');
}


// task 2

let num1 = Number(prompt('Введите первое число:'));
let action = prompt('Укажите действие:');
let num2 = Number(prompt('Введите второе число:'));
let result;

switch (action) {
    case '+':
        result = num1 + num2;
        alert(result);
        break;
    case '-':
        result = num1 - num2;
        alert(result);
        break;
    case '*':
        result = num1 * num2;
        alert(result);
        break;
    case '/':
        result = num1 / num2;
        alert(result);
        break;
    default:
    alert('Неизветсная операция');
        break;
}


// task 3  

let visitorAge = Number(prompt('Введите свой возраст: '));



if( visitorAge >= 18 && visitorAge < 60){
    alert('Доступ разрешён');
}else if((visitorAge >= 60 && visitorAge <= 80) || (visitorAge >= 12 && visitorAge < 18)){
    let isAllowed = confirm('Есть разрешение от взрослых?');
    if (isAllowed){
        alert('Доступ разрешён');
    }else{
        alert('Доступ запрещён.')
    }
}else{
    alert('Доступ запрещен.')
}

