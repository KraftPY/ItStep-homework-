function task_1(){
    let year = 0;

    year = parseInt(prompt("Введите Ваш возвраст:"));
    
    if (isNaN(year) || year < 0){
        alert("Неправильный формат введенных данных!");
    }else if (year >= 0 && year <= 11){
        alert("Вы ребенок!");
    }else if (year >= 12 && year <= 17){
        alert("Вы подросток!");
    }else if (year >= 18 && year <= 59){
        alert("Вы взрослый!");
    }else if (year >= 60){
        alert("Вы пенсионер!");
    }
}

function task_2(){
    let num = 0;

    num = parseInt(prompt("Введите число от 0 до 9"));

    if (num > 9 || num < 0 || isNaN(num)){
        alert("Неправильный формат введенных данных!");
    }else{
        switch(num){
            case 0:
                alert(")");
                break;
            case 1:
                alert("!");
                break;
            case 2:
                alert("@");
                break;
           case 3:
                alert("#");
                break;
            case 4:
                alert("$");
                break;
            case 5:
                alert("%");
                break;
            case 6:
                alert("^");
                break;
            case 7:
                alert("&");
                break;
            case 8:
                alert("*");
                break;
           case 9:
                alert("(");
                break;
        }
    }
}

function task_3(){
    let a = "",
        int_a = 0;

    a = prompt("Введите трехзначное число");
    int_a = parseInt(a);

    if (isNaN(int_a) || int_a > 999 || int_a < -999){
        alert("Неправильный формат введенных данных!");
    }else if (int_a < 0){
        if (a[1] == a[2]){
            alert(a[1]+" - несколько в числе");
        }else if (a[2] == a[3]){
            alert(a[2]+" - несколько в числе");
        }else if (a[1] == a[3]){
            alert(a[3]+" - несколько в числе");
        }else{
            alert("В данном числе, нет одинаковых цифр!");
        }
    }else if (int_a > 0){
        if (a[0] == a[1]){
            alert(a[0]+" - несколько в числе");
        }else if (a[1] == a[2]){
            alert(a[1]+" - несколько в числе");
        }else if (a[0] == a[2]){
            alert(a[2]+" - несколько в числе");
        }else{
            alert("В данном числе, нет одинаковых цифр!");
        }
    }

    
}

function task_4(){
    let year = 0;

    year = parseInt(prompt("Введите год, для проверки на высокосность"));

    if (((year % 4) != 0) || ((year % 100) == 0) && ((year % 400) != 0)){
        alert("Обычный");
    }else{
        alert("Високосный");
    }
}

function task_5(){
    let num = "",
        num_int = 0;

    num = prompt("Введите пятизначное число");
    int_num = parseInt(num);

    if (isNaN(int_num) || int_num > 99999 || int_num < -99999){
        alert("Неправильный формат введенных данных!");
    }else if (int_num < 0){
        if (num[1] == num[5] && num[2] == num[4]){
            alert(num + " - Данное число палиндром!");
        }else{
            alert(num + " - Данное число НЕ палиндром!");
        }
    }else if (int_num > 0){
        if (num[0] == num[4] && num[1] == num[3]){
            alert(num + " - Данное число палиндром!");
        }else{
            alert(num + " - Данное число НЕ палиндром!");
        }
    }
   

}

function task_6(){
    if (document.getElementById('main').style.display == 'none'){
        document.getElementById('main').style.display = 'block';
    }else{
        document.getElementById('main').style.display = 'none';
    }
    document.getElementById("out").value = "";
    document.getElementById("sum").value = "";
}

function task_6_1(){
    let currency = "",
        sum = 0,
        answer = 0;

    currency = document.getElementById("curr").value;
    sum = document.getElementById("sum").value;

    switch (currency){
        case "EUR": 
            answer = sum * 0.8914;
            break;
        case "UAH":
            answer = sum * 26.52;
            break;
        case "RUB":
            answer = sum * 65.8065;
            break;
    }
    
    if (isNaN(answer)){
        document.getElementById("out").value = "Введите нормальную сумму!";
    }else{
        document.getElementById("out").value = answer.toFixed(2);
    }
    
}

function task_7(){
    let sum = 0,
        pay = 0;
    
    sum = parseInt(prompt("Введите сумму покупки"));

    if (isNaN(sum) || sum < 0){
        alert("Неправильный формат введенных данных!");
    }else if (sum >= 200 && sum <= 300){
        pay = sum / 100 * 97;
        alert("Сумма к оплате со скидкой: " + pay.toFixed(2));
    }else if (sum >= 301 && sum <= 500){
        pay = sum / 100 * 95;
        alert("Сумма к оплате со скидкой: " + pay.toFixed(2));
    }else if (sum > 501){
        pay = sum / 100 * 93;
        alert("Сумма к оплате со скидкой: " + pay.toFixed(2));
    }else{
        alert("Сумма к оплате (скидки не будет): " + sum);
    }

}

function task_8(){
    let len = 0,
        perim = 0,
        h = 0,
        d = 0;

    len = parseInt(prompt("Введите длину окружности"));
    perim = parseInt(prompt("Введите периметр квадрата"));

    h = perim / 4;
    d = len / Math.PI;

    alert(d < h ? "Окружность помещается в квадрат!" : "Окружность НЕ помещается в квадрат!");
}

function task_9(){

    if (document.getElementById('b1').style.display == 'none'){
        document.getElementById('b1').style.display = 'inline-block';
        document.getElementById('b2').style.display = 'inline-block';
        document.getElementById('b3').style.display = 'block';
    }else{
        document.getElementById('b1').style.display = 'none';
        document.getElementById('b2').style.display = 'none';
        document.getElementById('b3').style.display = 'none';
    }

}

function task_9_1(){
    let rad1,
        rad2,
        answer1 = 0,
        answer2 = 0;

    rad1 = document.getElementsByName('planets');
    rad2 = document.getElementsByName('mainland');
    
    for (let i = 0; i < rad1.length; i++) {
        if (rad1[i].checked) {
            answer1 = (rad1[i].value == 8 ? 2 : 0);
        }
    }
    for (let i = 0; i < rad2.length; i++) {
        if (rad2[i].checked) {
            answer2 = (rad2[i].value == 6 ? 2 : 0);
        }
    }

    document.getElementById("out_9").value = "Вы набрали " +(answer1 + answer2)+" балов";

}

function task_10(){
    let full_date,
        y_date,
        m_date,
        d_date;

    y_date = parseInt(prompt("Введите год"));
    m_date = parseInt(prompt("Введите месяц")) - 1;
    d_date = parseInt(prompt("Введите день"));

    full_date = new Date(y_date, m_date, d_date);
    full_date.setDate(full_date.getDate()+1);
    alert(full_date);

}





