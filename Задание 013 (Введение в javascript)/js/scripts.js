function task_1(){
    let name = "";

    name = prompt("Как Вас зовут?");
    alert("Привет, "+name+"!");
}

function task_2(){
    let year = 2019,
        yob = 0,
        age = 0;

    yob = prompt("Каков Ваш год рождения?", 0);
    age = year - yob; 

    alert("Ваш возвраст " + age + " года (лет)!");
}

function task_3(){
    let len = 0,
        perim = 0;

    len = prompt("Укажите длину стороны квадрата", 0);
    perim = len*4; 

    alert("Периметр квадрата = " + perim + " !");
}

function task_4(){
    let radius = 0,
        s = 0;

    radius = prompt("Укажите радиус круга", 0);
    s = Math.PI*radius; 

    alert("Площадь круга = " + s.toFixed(2) + " !");
}

function task_5(){
    let km = 0,
        t = 0,
        s = 0;

    km = prompt("Укажите растояние между городами", 0);
    t = prompt("Укажите за сколько часов Вы бы хотели добраться до другого города", 0);
    s = km/t; 

    alert("Вам нужно двигаться со скоростью " + s.toFixed(0) + " км/ч");
}

function task_6(){
    let dol = 0,
        euro = 0,
        ex = 0.8977;

    dol = prompt("Введите количество доларов", 0);
    euro = dol*ex; 

    alert(dol + " USD = " + euro.toFixed(2) + " EUR");
}

function task_7(){
    let flash_s = 0,
        file_s = 820,
        q = 0;

    flash_s = prompt("Укажите размер флешки в Гб", 0);
    q = flash_s * 1000 / file_s; 

    alert("На флешку поместится " + Math.floor(q) + " файла(ов) размером 820 Мб");
}

function task_8(){
    let sum = 0,
        cost = 0,
        q = 0,
        n = 0;

    sum = prompt("Сколько денег у Вас в кармане?", 0);
    cost = prompt("Введите цену одной шоколадки", 0);
    q = sum / cost; 
    n = sum % cost;
    alert("Вы можете купить " + Math.floor(q) + " шоколадок и у Вас останется "+ n +" грн!");
}

function task_9(){
    let str = "",
        str1 = "",
        len = 0;
    
    str = prompt("Введите целое число любой длины!");
    len = str.length - 1;
    
    while (len >= 0){
        str1 = str1 + str[len];
        len--;
    }

    alert("Введенное Ваше число, только наоборот: " + str1);
}

function task_10(){
    let num = 0,
        res = "";
    
    num = prompt("Введите целое число, для проверки на четность!");
    
    res = (num % 2) ? "Не четное" : "Четное";
    alert(res);
}





