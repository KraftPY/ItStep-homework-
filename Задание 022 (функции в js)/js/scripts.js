function task_1(){
    let a = parseInt(prompt("Введите первое число: "));
        b = parseInt(prompt("Введите второе число: "));

    alert(funcForTask_1(a, b));

}

function funcForTask_1(a, b) {
    if      (a < b)     {return -1;}
    else if (a > b)     {return 1;}
    else if (a == b)    {return 0;}
    else                {return "Вводить нужно только цифры!";}
}

function task_2(){
    let a = 0;
        
    do{
        a = parseInt(prompt("Введите натуральное, положительное число: "));
    }while (a < 0 || a == 0 || isNaN(a));
    alert(funcForTask_2(a));
}

function funcForTask_2(a){
    for (let i = a - 1; i > 0; i--){
        a *= i;
    }
    return a;
}

function task_3(){
    let arr = [],
        a = 0;

    for (let i = 1; i < 4; i++){
        do{
            a = parseInt(prompt("Введите "+(i)+"-ю, положительную цифру: "));
        }while (a < 0 || a > 10 || isNaN(a));
        arr.push(a);
    }
    alert(funcForTask_3(arr));
}

function funcForTask_3(arr){
    return String(arr[0]) + arr[1] + arr[2];
}

function task_4(){
    let a = 0,
        b = 0;
    
    do{
        a = parseInt(prompt("Введите ширину стороны квадрата или прямоугольника: "));
    }while (a < 0 || a == 0 || isNaN(a));

    if (confirm("Это прямоугольник?")){
        do{
            b = parseInt(prompt("Тогда введите длину прямоугольника: "));
        }while (b < 0 || b == 0 || isNaN(b));
    }

    (b == 0) ? alert(funcForTask_4(a)) : alert(funcForTask_4(a, b));
    
}

function funcForTask_4(a, b){
    return (b == undefined) ? a*a : a*b;
}

function task_5(){
    let a = 0;
        
    do{
        a = parseInt(prompt("Введите натуральное, положительное число: "));
    }while (a < 0 || a == 0 || isNaN(a));
    alert(funcForTask_5(a) == false ? "Введенное число НЕ совершенное!" : "Введенное число совершенное!"); 
}

function funcForTask_5(a){
    let arr = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128, 2658455991569831744654692615953842176];
    
    return (arr.indexOf(a) == -1 ? false : true);
}

function task_6(){
    let min = 0,
        max = 0,
        msg = "";
    do{
        min = parseInt(prompt("Введите начало диапазона чисел: "));
    }while (isNaN(min));
    do{
        max = parseInt(prompt("Введите начало диапазона чисел: "));
    }while (isNaN(max));  

    for (min; min < max; min++){
        funcForTask_5(min) == true ? msg += min+"\n" : msg = msg;
    }
    alert(msg);
}

function task_7(){
    let fullTime = {};

    fullTime = inputUserTime();
    alert(getNormalDateFormat(fullTime.hh, fullTime.mm, fullTime.ss));
}

function task_8(){
    let fullTime = {};

    fullTime = inputUserTime();
    alert(getSecondsInFullTime(fullTime.hh, fullTime.mm, fullTime.ss));
}

function task_9(){
    let kol_ss = 0;

    do{
        kol_ss = parseInt(prompt("Введите количество секунд (от 0 до 86399): "));
    }while (kol_ss < 0 || kol_ss > 86399 || isNaN(kol_ss));

    alert(secondsIntoFullTime(kol_ss));
}

function task_10(){
    let time1 = {},
        time2 = {};

    time1 = inputUserTime();
    time2 = inputUserTime();
    
    alert(timeDifference(time1.hh, time1.mm, time1.ss, time2.hh, time2.mm, time2.ss));
}

function inputUserTime(){
    let fullTime = {}; 

    // Input Hours
    do{
        fullTime.hh = parseInt(prompt("Введите часы (в формате от 0 до 23): "));
    }while(fullTime.hh < 0 || fullTime.hh > 23 || isNaN(fullTime.hh));
    
    // Input Minuts
    do{
        fullTime.mm = parseInt(prompt("Введите минуты (в формате от 0 до 59): "));
    }while(fullTime.mm < 0 || fullTime.mm > 59 || isNaN(fullTime.mm));
    
    // Input Seconds
    do{
        fullTime.ss = parseInt(prompt("Введите секунды (в формате от 0 до 59): "));
    }while(fullTime.ss < 0 || fullTime.ss > 59 || isNaN(fullTime.ss)); 
    
    return fullTime;
}

function getNormalDateFormat(hh, mm, ss){
    return (hh+":"+mm+":"+ss);
}

function getSecondsInFullTime(hh, mm, ss){
    return ((hh*60*60)+ (mm*60)+ss);
}

function secondsIntoFullTime(kol_ss){
    let hh = 0,
        mm = 0,
        ss = 0;

    hh = addZero(parseInt(kol_ss / 3600));
    mm = addZero(parseInt((kol_ss - hh * 3600) / 60));
    ss = addZero((parseInt(kol_ss - (hh * 3600 + mm * 60))));

    return getNormalDateFormat(hh, mm, ss);
}

function addZero(vv){
    return (vv < 10) ? "0" + vv : vv;
}

function timeDifference(hh1, mm1, ss1, hh2, mm2, ss2){
    let fullTime1 = getSecondsInFullTime(hh1, mm1, ss1),
        fullTime2 = getSecondsInFullTime(hh2, mm2, ss2);

    if (fullTime1 > fullTime2){
        return secondsIntoFullTime(fullTime1 - fullTime2);
    }else if (fullTime1 < fullTime2){
        return secondsIntoFullTime(fullTime2 - fullTime1);
    }else {
        return secondsIntoFullTime(0);
    }

}