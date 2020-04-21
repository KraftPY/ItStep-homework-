function task_1() {
    let car = {
            manufacturer: prompt("Производитель атомобиля:"),
            model: prompt("Модель атомобиля:"),
            year: prompt("Год выпуска атомобиля:"),
            speed: prompt("Средняя скорость атомобиля:")
        };
    outCarInfo(car);
    timeRequired(car.speed);
}

function outCarInfo(car){
    alert("Производитель: "+car.manufacturer+"\nМодель: "+car.model+"\nГод выпуска: "+car.year+"\nСредняя скорость: "+car.speed);
}

function timeRequired(speed){
    let distance = parseInt(prompt("Введите расстояние в км., которое необходимо проехать:")),
        hh = 0,
        mm = 0,
        relax;

    hh = parseInt(distance / speed);
    relax = ((hh / 4) > 1) ? parseInt(hh / 4) : 0;
    mm = parseInt( 60 * (distance / speed - hh));
    mm = (mm < 10) ? "0" + mm : mm;
    alert("Чтоб преоделеть "+distance+" км, вы затратите "+(hh + relax)+" час(а/ов) "+mm+" минут. Из которых "+relax+" час(а/ов) отдыха.");
}

function task_2(){
    let fraction_1 = {
            chis: parseInt(prompt("Введите числитель первой правильной дроби:")),
            znam: parseInt(prompt("Введите знаменатель первой правильной дроби:"))
        },
        fraction_2 = {
            chis: parseInt(prompt("Введите числитель второй правильной дроби:")),
            znam: parseInt(prompt("Введите знаменатель второй правильной дроби:"))
        };

    if ((fraction_1.chis >= fraction_1.znam) || (fraction_2.chis >= fraction_2.znam)){
        alert("Дроби должни быть правильными, числитель < знаменателя!!!")
        return; 
    }

    switch(parseInt(prompt(`Введите номер -->\n1. Функция сложения 2-х объектов-дробей.\n2. Функция вычитания 2-х объектов-дробей.\n3. Функция умножения 2-х объектов-дробей.\n4. Функция деления 2-х объектов-дробей.\n5. Функция сокращения объекта-дроби.`))){
        case 1:
            addFraction(fraction_1, fraction_2);
            break;
        case 2:
            subFraction(fraction_1, fraction_2);
            break;
        case 3:
            mulFraction(fraction_1, fraction_2);
            break;
        case 4:
            divFraction(fraction_1, fraction_2);
            break;
        case 5:
            alert(fraction_1.chis+"/"+fraction_1.znam+" = "+reductionFraction(fraction_1).chis+"/"+reductionFraction(fraction_1).znam+"\n"+fraction_2.chis+"/"+fraction_2.znam+" = "+reductionFraction(fraction_2).chis+"/"+reductionFraction(fraction_2).znam);
            break;
    }
}

function addFraction(f_1, f_2){
    let i = 0,
        sum = {
            i: 0,
            chis: 0,
            znam: 0
        };
    
    if (f_1.znam != f_2.znam){
        sum.chis = (f_1.chis * f_2.znam) + (f_2.chis * f_1.znam);
        sum.znam = f_1.znam * f_2.znam;
        sum = reductionFraction(sum);

        if (sum.chis > sum.znam){
            sum.i = parseInt(sum.chis / sum.znam);
            sum.chis -= sum.znam * sum.i;
            alert(f_1.chis+"/"+f_1.znam+" + "+f_2.chis+"/"+f_2.znam+" = "+sum.i+" "+sum.chis+"/"+sum.znam);
        }else{
            alert(f_1.chis+"/"+f_1.znam+" + "+f_2.chis+"/"+f_2.znam+" = "+sum.chis+"/"+sum.znam);
        }
    }else{
        sum.chis = f_1.chis + f_2.chis;
        sum.znam = f_1.znam;
        sum = reductionFraction(sum);

        if (sum.chis > sum.znam){
            sum.i = parseInt(sum.chis / sum.znam);
            sum.chis -= sum.znam * sum.i;
            alert(f_1.chis+"/"+f_1.znam+" + "+f_2.chis+"/"+f_2.znam+" = "+sum.i+" "+sum.chis+"/"+sum.znam);
        }else{
            alert(f_1.chis+"/"+f_1.znam+" + "+f_2.chis+"/"+f_2.znam+" = "+sum.chis+"/"+sum.znam);
        }
    }
}

function subFraction(f_1, f_2){
    let sub = {
            i: 0,
            chis: 0,
            znam: 0,
            neg: false
        };
    
    if (f_1.znam != f_2.znam){
        sub.chis = (f_1.chis * f_2.znam) - (f_2.chis * f_1.znam);
        sub.znam = f_1.znam * f_2.znam;
        sub.neg =  sub.chis < 0;

        sub = reductionFraction(sub);

        if (Math.abs(sub.chis) > sub.znam){
            sub.i = parseInt(sub.chis / sub.znam);
            sub.chis = Math.abs(sub.chis) - sub.znam * sub.i;
            (sub.neg) ? 
                alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = -"+sub.i+" "+sub.chis+"/"+sub.znam):
                alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = "+sub.i+" "+sub.chis+"/"+sub.znam);
        }else{
            alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = "+sub.chis+"/"+sub.znam);
        }
    }else{
        sub.chis = f_1.chis - f_2.chis;
        sub.znam = f_1.znam;
        sub.neg =  sub.chis < 0;

        sub = reductionFraction(sub);

        if (Math.abs(sub.chis) > sub.znam){
            sub.i = parseInt(sub.chis / sub.znam);
            sub.chis = Math.abs(sub.chis) - sub.znam * sub.i;
            (sub.neg) ? 
                alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = -"+sub.i+" "+sub.chis+"/"+sub.znam):
                alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = "+sub.i+" "+sub.chis+"/"+sub.znam);
        }else{
            alert(f_1.chis+"/"+f_1.znam+" - "+f_2.chis+"/"+f_2.znam+" = "+sub.chis+"/"+sub.znam);
        }
    }
}

function mulFraction(f_1, f_2){
    let mul = {};

    mul.chis = f_1.chis * f_2.chis;
    mul.znam = f_1.znam * f_2.znam;
    mul = reductionFraction(mul);
    alert(f_1.chis+"/"+f_1.znam+" * "+f_2.chis+"/"+f_2.znam+" = "+mul.chis+"/"+mul.znam);
}

function divFraction(f_1, f_2){
    let dev = {};

    dev.chis = f_1.chis * f_2.znam;
    dev.znam = f_1.znam * f_2.chis;
    dev = reductionFraction(dev);

    if (dev.znam == 1){
        alert(f_1.chis+"/"+f_1.znam+" : "+f_2.chis+"/"+f_2.znam+" = "+dev.chis);
    }else if (dev.chis > dev.znam){
        dev.i = parseInt(dev.chis / dev.znam);
        dev.chis -= dev.znam * dev.i;
        alert(f_1.chis+"/"+f_1.znam+" : "+f_2.chis+"/"+f_2.znam+" = "+dev.i+" "+dev.chis+"/"+dev.znam);
    }else{
        alert(f_1.chis+"/"+f_1.znam+" : "+f_2.chis+"/"+f_2.znam+" = "+dev.chis+"/"+dev.znam);
    }
}

function reductionFraction(fraction){
    let chis = (fraction.chis < 0) ? Math.abs(fraction.chis) : fraction.chis,
        znam = fraction.znam;

    while (chis != znam){
        if (chis > znam){
            chis -= znam;
        }else{
            znam -= chis;
        }
    }
    fraction.chis /= znam;
    fraction.znam /= znam;
    return fraction;
}

function task_3(){
    let time = {};

    do{
        time.hh = parseInt(prompt("Введите часы (от 0 до 23):"));
    }while(time.hh < 0 || isNaN(time.hh) || time.hh > 23);
    do{
        time.mm = parseInt(prompt("Введите минуты (от 0 до 59):"));
    }while(time.mm < 0 || isNaN(time.mm) || time.mm > 59);
    do{
        time.ss = parseInt(prompt("Введите секунды (от 0 до 59):"));
    }while(time.ss < 0 || isNaN(time.ss) || time.ss > 59);

    switch(parseInt(prompt(`Введите номер -->\n1. Функция вывода времени на экран.\n2. Функция изменения времени на переданное количество секунд.\n3. Функция изменения времени на переданное количество минут.\n4. Функция изменения времени на переданное количество часов.`))){
        case 1:
            printTime(time);
            break;
        case 2:
            addSeconds(time);
            break;
        case 3:
            addMinuts(time);
            break;
        case 4:
            addHours(time);
            break;
    }

}

function printTime(time){
    alert(addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss));
}

function addZero(time){
    if (time < 10) {
        return ("0"+time);
   }else{
       return time;
   }
}

function addSeconds(time){
    let ss = 0,
        allSeconds = 0;
    do{
        ss = parseInt(prompt("Введите на сколько секунд увеличить время:"));
    }while(ss < 0 || isNaN(ss));

    allSeconds = timeToAllSeconds(time);
    time = allSecondsToTime(allSeconds + ss); 
    (time.days != 0) ? alert("Дней "+time.days+" "+addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss)) : alert(addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss));
}

function addMinuts(time){
    let mm = 0,
        allSeconds = 0;
    do{
        mm = parseInt(prompt("Введите на сколько минут увеличить время:"));
    }while(mm < 0 || isNaN(mm));

    allSeconds = timeToAllSeconds(time);
    time = allSecondsToTime(allSeconds + mm * 60); 
    (time.days != 0) ? alert("Дней "+time.days+" "+addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss)) : alert(addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss));
}

function addHours(time){
    let hh = 0,
        allSeconds = 0;
    do{
        hh = parseInt(prompt("Введите на сколько минут увеличить время:"));
    }while(hh < 0 || isNaN(hh));

    allSeconds = timeToAllSeconds(time);
    time = allSecondsToTime(allSeconds + hh * 60 * 60); 
    (time.days != 0) ? alert("Дней "+time.days+" "+addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss)) : alert(addZero(time.hh)+":"+addZero(time.mm)+":"+addZero(time.ss));
}

function timeToAllSeconds(time){
    return (time.hh * 60 * 60) + (time.mm * 60) + time.ss;
}

function allSecondsToTime(allSeconds){
    let time = {};
        time.ss = allSeconds % 60;
        time.mm = ((allSeconds - time.ss) % 3600) / 60;
        time.hh = (allSeconds - time.ss - (time.mm * 60)) / 3600;
        if (time.hh > 23){
            time.days = parseInt(time.hh / 24);
            time.hh = time.hh % 24;
        }else{
            time.days = 0;
        }
        return time;
}



