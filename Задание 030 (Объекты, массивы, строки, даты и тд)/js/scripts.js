function task_1(){
    let text = prompt("Введите любое количество разных символов (на английской раскладке)!"),
        letters = 0,
        digits = 0,
        other = 0;

    for (let i = 0; i < text.length; i++){
        if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90){
            letters++;
        }else if (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
            letters++;
        }else if (text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57){
            digits++;
        }else{
            other++;
        }
    }
    console.log(`Количество букв: ${letters}`);
    console.log(`Количество цифр: ${digits}`);
    console.log(`Количество других знаков: ${other}`);
}

function task_2(){
    let num = "",
        answer = "";

    do {
        num = prompt("Введите двухзначное число!");
    } while (num.length != 2);

    switch (num[0]) {
        case "1":
            switch (num[1]) {
                case "0":
                    answer = "Десять";
                    break;
                case "1":
                    answer = "Одинадцать";
                    break;
                case "2":
                    answer = "Двенадцать";
                    break;
                case "3":
                    answer = "Тринадцать";
                    break;
                case "4":
                    answer = "Четырнадцать";
                    break;
                case "5":
                    answer = "Пятнадцать";
                    break;
                case "6":
                    answer = "Шестнадцать";
                    break;
                case "7":
                    answer = "Семнадцать";
                    break;
                case "8":
                    answer = "Восемнадцать";
                    break;
                case "9":
                    answer = "Девятнадцать";
                    break;
            }
            break;
        case "2":
            answer = "Двадцать ";
            break;
        case "3":
            answer = "Тридцать ";
            break;
        case "4":
            answer = "Сорок ";
            break;
        case "5":
            answer = "Пятьдесят ";
            break;
        case "6":
            answer = "Шестьдесят ";
            break;
        case "7":
            answer = "Семьдесят ";
            break;
        case "8":
            answer = "Восемьдесят ";
            break;
        case "9":
            answer = "Девяносто ";
            break;
    }
    if(num[0] != "1"){
        switch (num[1]) {
            case "1":
                answer += "один";
                break;
            case "2":
                answer += "два";
                break;
            case "3":
                answer += "три";
                break;
            case "4":
                answer += "четыре";
                break;
            case "5":
                answer += "пять";
                break;
            case "6":
                answer += "шесть";
                break;
            case "7":
                answer += "семь";
                break;
            case "8":
                answer += "восемь";
                break;
            case "9":
                answer += "девять";
                break;
        }
    }
    console.log(answer);
}

function task_3(){
    let text = prompt("Введите любое количество разных символов (на английской раскладке)!"),
        msg_text = "";
    
    for(let i = 0; i < text.length; i++){
        if(text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90){
            msg_text += String.fromCharCode(text[i].charCodeAt(0) + 32);
        }else if(text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
            msg_text += String.fromCharCode(text[i].charCodeAt(0) - 32);
        }else if(text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57){
            msg_text += "_";
        }else{
            msg_text += text[i];
        }
    }
    console.log(msg_text);
}

function task_4(){
    let style = prompt("Введите CSS стиль с дефисом"),
        cc_style = "",
        ind = 0;

    style = style.trim();
    ind = style.indexOf("-");
    cc_style = style.slice(0, ind) + style[ind + 1].toLocaleUpperCase() + style.slice(ind + 2);
    console.log(cc_style);
}

function task_5(){
    let text = prompt("Введите словосочетание"),
        abbr = "";

    abbr = (text[0] != " ") ? text[0].toLocaleUpperCase() : "";
    for(let i = 0; i < text.length - 1; i++){
        abbr += (text[i] == " " && text[i + 1] != " ") ? text[i + 1].toLocaleUpperCase() : "";
    }
    console.log(abbr);
}

function task_6(){
    let msg = "";

    do {
        msg += prompt("Введите строку символов!");
    } while (confirm("Хотите еще ввести одну строку?"));
    console.log(msg);
}

function task_7(){
    let pr = prompt("Введите строку с простым примером"),
        ind = 0,
        op1 = "",
        op2 = "",
        result = "";

    if(pr.includes("+") && !pr.includes("-") && !pr.includes("*") && !pr.includes("/")){
        ind = pr.indexOf("+");
        op1 = pr.slice(0, ind).trim();
        op2 = pr.slice(ind + 1).trim();
        result = `${op1} + ${op2} = ${Number(op1) + Number(op2)}`;
    }else if(pr.includes("-") && !pr.includes("+") && !pr.includes("*") && !pr.includes("/")){
        ind = pr.indexOf("-");
        op1 = pr.slice(0, ind).trim();
        op2 = pr.slice(ind + 1).trim();
        result = `${op1} - ${op2} = ${Number(op1) - Number(op2)}`;
    }else if(pr.includes("*") && !pr.includes("+") && !pr.includes("-") && !pr.includes("/")){
        ind = pr.indexOf("*");
        op1 = pr.slice(0, ind).trim();
        op2 = pr.slice(ind + 1).trim();
        result = `${op1} * ${op2} = ${Number(op1) * Number(op2)}`;
    }else if(pr.includes("/") && !pr.includes("+") && !pr.includes("-") && !pr.includes("*")){
        ind = pr.indexOf("/");
        op1 = pr.slice(0, ind).trim();
        op2 = pr.slice(ind + 1).trim();
        result = `${op1} / ${op2} = ${Number(op1) / Number(op2)}`;
    }
    console.log(result);
}

function task_8(){
    let url = prompt("Введите любой url"),
        ind = 0,
        ind1 = 0,
        prt = "",
        dom = "";

    ind = url.indexOf(":");
    prt = url.slice(0, ind);
    ind1 = url.indexOf("/", ind + 3);
    dom = url.slice(ind + 3, ind1);
    console.log(`Протокол: ${prt}, Домен: ${dom}, Путь: ${url.slice(ind1)}`);
}

function task_9(){
    let text = prompt("Введите строку"),
        len = text.length,
        sep = prompt("Введите разделитель"),
        arr = [],
        ind = 0;

    for (let i = 0; i < len; i++) {
        if (text[i] == sep) {
            arr.push(text.slice(ind, i));
            ind = i + 1;
        }else if(i == (len - 1)){
            arr.push(text.slice(ind));
        }        
    }
    console.log(arr);
}

function task_10(){
    let template = prompt("Введите шаблон в котором не больше 9-ти параметров!"),
        len = template.length,
        sep = "%",
        numOpt = 0,
        arrOptions = [],
        msg = "",
        ind = 0,
        ind1 = 0;

    // Определяем количество параметров
    for (let i = 0; i < len; i++) {
        (template[i] == sep) ? numOpt++ : false;       
    }
    
    // Заносим все параметры в массив
    for (let j = 1; j <= numOpt; j++) {
        arrOptions.push(prompt(`Введите ${j}-й параметр`));
    }
    
    // Заполняем шаблон параметрами
    for (let k = 0; k < numOpt; k++) {
        ind = template.indexOf(sep, ind1);
        msg += template.slice(ind1, ind) + arrOptions[Number(template[ind + 1]) - 1];
        ind1 = ind + 2;
    }
    console.log(msg);
}

