function task_1(){
    let start = 0,
        end = 0,
        sum = 0;

    start = parseInt(prompt("Введите начало диапазона:"));
    end = parseInt(prompt("Введите конец диапазона:"));

    if (end < start){
        alert("Конец диапазона должен быть больше начала!");
        return;
    }else if (isNaN(end) || isNaN(start)){
        alert("Нужно вводить числовые значения!");
        return;
    }

    for(let i = start; i != end + 1; i++){
        sum += i;
    }
    alert(sum);
}

function task_2(){
    let a = 0,
        b = 0;

    a = parseInt(prompt("Введите перове число:"));
    b = parseInt(prompt("Введите второе число:"));
    
    if (isNaN(a) || isNaN(b)){
        alert("Нужно вводить числовые значения!");
        return;
    }else if (a == 0 || b == 0){
        alert("У ноля нет делителей!");
        return;
    }else if (a < 0 || b < 0){
        alert("Числа должны быть положительными!");
        return;
    }

    while (a != b){
        if (a > b){
            a -= b;
        }else{
            b -= a;
        }
    }
    alert(a);
}

function task_3(){
    let n = 0,
        i = 0,
        arr = [];

    n = parseInt(prompt("Введите число:"));

    if (isNaN(n)){
        alert("Нужно вводить числовые значения!");
        return;
    }else if (n == 0){
        alert("У ноля нет делителей!");
        return;
    }else if (n < 0){
        alert("Число должно быть положительным!");
        return;
    }

    while (i++ <= n){
        if (n % i == 0){
            arr.push(i);
        }
    }
    alert(arr);
}

function task_4(){
    let n = 0,
        num = 1;

    n = parseInt(prompt("Введите число:"));
 
    if (isNaN(n)){
        alert("Нужно вводить число!");
        return;
    }else if (n < 0){
        alert("Число должно быть положительным!");
        return;
    }

    while (n > 10){
        n = parseInt(n / 10);
        num++;
    }
    alert("Количество цифр: "+num);
}

function task_5(){
    let n = 0,
        pos_n = 0,
        neg_n = 0,
        zero_n = 0,
        even_n = 0,
        odd_n = 0;

    for (let i = 1; i <= 10; i++){
        n = parseInt(prompt("Введите "+i+"-е число."));
        if (isNaN(n)){
            alert("Нужно вводить числовые значения!");
        }else{
            (n > 0) ? pos_n++ : pos_n;
            (n < 0) ? neg_n++ : neg_n;
            (n == 0) ? zero_n++ : zero_n;
            (n % 2 == 0)? even_n++ : odd_n++;
        }
    }
    alert("Положительных: "+pos_n+"\nОтрицательных: "+neg_n+"\nНулей: "+zero_n+"\nЧетных: "+even_n+"\nНечетных: "+odd_n);
}

function task_6(){
    let n1 = 0,
        n2 = 0,
        sym = "",
        q = false;

    
    do {
        n1 = parseInt(prompt("Введите первое число:"));
        n2 = parseInt(prompt("Введите второе число:"));
        sym = prompt("Введите математический знак:");
        
        switch (sym){
            case "-": 
                alert(n1 - n2);
                break;
            case "+": 
                alert(n1 + n2);
                break;
            case "*": 
                alert(n1 * n2);
                break;
            case "/": 
                alert(n1 / n2);
                break;                        
        }
    }
    while (confirm("Хотите продолжить?"))
}

function task_7(){
    let num = "",
        move = 0;

    num = prompt("Введите число:");
    move = parseInt(prompt("Насколько цифр его сдвинуть?"));

    for (let i = 0; i < move; i++){
        num = num.slice(1, num.length) + num[0];
    }
    alert(num);
}

function task_8(){
    let date = new Date();

    while (confirm(getWeekDay(date.getDay())+". Хотите увидеть следующий день?")){
       date.setDate(date.getDay() + 1);
    }
}

function getWeekDay(date){
    switch (date){
        case 0:
            return "Воскресенье";
            break;
        case 1:
            return "Понедельник";
            break;
        case 2:
            return "Вторник";
            break;
        case 3:
            return "Среда";
            break;
        case 4:
            return "Четверг";
            break;
        case 5:
            return "Пятница";
            break;
        case 6:
            return "Суббота";
            break;
    }
}


function task_9(){
    let arr = [];

    for (let i = 2; i < 10; i++){
        arr[i] = [];
        for (let j = 1; j < 11; j++){
            console.log(i+" x "+j+" = "+(i*j));
        }
        console.log("-----------");
    }

}

function task_10(){
    let num = 0,
        num_str = 1,
        num_end = 100,
        answ = "";

    alert("Загадайте число от 1 до 100");
    
    do{
        num = num_end - Math.ceil((num_end - num_str)/2);
        answ = prompt("Ваше число > "+num+", < "+num+" или = "+num+"\nОтвечайте: >,< или =");
   
        if (answ == ">"){
            num_str += Math.ceil((num_end - num_str)/2);
        }else if (answ == "<"){
            num_end -= Math.ceil((num_end - num_str)/2);
        }
    }
    while (answ != "=");
    alert("Вы загадали число "+num);
}





