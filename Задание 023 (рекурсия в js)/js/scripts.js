function task_1(){
    let num = 0,
        n = 0;

    do{
        num = parseInt(prompt("Введите число которое нужно возвести в степень: "));
    }while (num < 1 || isNaN(num) || num > 100);
    do{
        n = parseInt(prompt("Введите степень: "));
    }while (n < 0 || isNaN(n) || n > 100);

    alert(numRaise(num, n));
}

function numRaise(num, n){
    if (n == 0){
        return 1;
    }else if (n != 1){
        return num * numRaise(num, n - 1);
    }else{
        return num;
    }
}


function task_2(){
    let a = 0,
        b = 0;

    do{
        a = parseInt(prompt("Введите первое положительное число: "));
    }while (a < 0 || isNaN(a));
    do{
        b = parseInt(prompt("Введите второе положительное число: "));
    }while (b < 0 || isNaN(b));

    alert(commonDivider(a, b));


}

function commonDivider(a, b){
    if (a != b && a > b){
        return commonDivider(a - b, b);
    } else if (a != b && a < b){
        return commonDivider(a, b - a);
    }else{
        return a;
    }
}
function task_3(){
    let a = "";

    do{
        a += parseInt(prompt("Введите натуральное, положительное число: "));
    }while (a < 0 || isNaN(a));

    alert(maxDigit(a, a.length - 1));
}

function maxDigit(a, n){
    if (n != 0){
        return a[n] = (maxDigit(a, n - 1) > a[n]) ? maxDigit(a, n - 1) : a[n];
    }else{
        return a[n];
    }
}


function task_4(){
    let num = 0,
        msg = "";

    do{
        num = parseInt(prompt("Введите натуральное, положительное число: "));
    }while (num < 2 || isNaN(num));

    msg = (findPrimeNum(num, parseInt(Math.sqrt(num)))) != true ? "Простое число" : "Составное число";
    alert(msg);
}

function findPrimeNum(num, n){
    if (n < 2){
        return false;
    }else if (n != 2){
        return findPrimeNum(num, n - 1) || ((num % n) == 0 ? true : false);
    }else{
        return (num % n) == 0 ? true : false;
    }
}

function task_5(){
    let num = 0;

    do{
        num = parseInt(prompt("Введите натуральное, положительное число: "));
    }while (num < 2 || isNaN(num));

    if (findPrimeNum(num, parseInt(Math.sqrt(num))) == false) {
        alert("Это простое число, у него нет множителей!");
    }else{
        alert("Число "+num+"\n"+numberMultipliers(num, 2, msg = ""));
    }
}

function numberMultipliers(num, n, msg){
    if ((num % n) == 0) {
        msg += num+" | "+n+"\n";
        return numberMultipliers(num / n, n, msg);
    }else{
        if (findPrimeNum(num, parseInt(Math.sqrt(num))) == true) {
            return numberMultipliers(num, n + 1, msg);
        }else{
            if (num == 1){
                return msg;
            }else{
                return msg += num+" | "+ num;
            }
        }
    }
}


function task_6(){
    let num = 0;

    do{
        num = parseInt(prompt("Введите порядковый номер числа Фибоначчи (от 1 до 40): "));
    }while (num < 1 || isNaN(num) || num > 1000);

    alert("Порядковый номер - "+num+"\nЧисло - "+findFibonacci(0, 1, num));
}

function findFibonacci(f, s, num){
    if (num == 1){return f;}
    else{return findFibonacci(s, f + s, num - 1);}
}