function task_1(){
    let arr = [],
        messg = "",
        elem, index,
        inp = 0;

    // Заполнение массива и проверка введенных данных
    for(let k =0; k < 10; k++){
        inp = parseInt(prompt("Введите "+ (k+1) +"-ю оценку:"));
        if (inp < 0 || inp > 100 || isNaN(inp)){
            alert("Ошибка в веденных данных");
            return;
        }else{
            arr.push(inp);
        }
    }

    // Поиск 3-х максимальных значений в массиве
    for (let i = 0; i < 3; i++){
        elem = 0;
        index = -1;
        for (let j = 0; j < arr.length; j++){
                if (elem < arr[j]){
                    elem = arr[j];
                    index = j;
                }
	    }
        messg += index+": "+elem+" очков, ";
        arr[index] = 0;
    }

    // Ввывод результата
    messg = "Победители: "+messg.slice(0, messg.length - 2);
    console.log(messg);

}

function task_1_1(){
    let arr = [],
        messg = "",
        inp = 0;

    // Заполнение массива и проверка введенных данных
    for(let k =0; k < 10; k++){
        inp = parseInt(prompt("Введите "+ (k+1) +"-ю оценку:"));
        if (inp < 0 || inp > 100 || isNaN(inp)){
            alert("Ошибка в веденных данных");
            return;
        }else{
            arr.push(inp);
        }
    }

    // Поиск 3-х максимальных значений в массиве
    for (let i = 0; i < 3; i++){
        messg += arr.indexOf(Math.max.apply(null, arr)) +": "+Math.max.apply(null, arr)+" очков, ";
        arr[arr.indexOf(Math.max.apply(null, arr))] = 0;
    }

    // Ввывод результата
    messg = "Победители: "+messg.slice(0, messg.length - 2);
    console.log(messg);

}

function task_2(){
    let arr = [];

    // Заполняем двумерный массив картами
    for (let i = 0; i < 4; i++){
        arr[i] = [];
        for (let j = 0; j < 13; j++){
            switch (i){
                case 0:
                    switch (j){
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            arr[i][j] = "Червовая "+(j+2);
                            break;
                        case 9:
                            arr[i][j] = "Червовый Валет";
                            break;
                        case 10:
                            arr[i][j] = "Червовая Дама";
                            break;
                        case 11:
                            arr[i][j] = "Червовый Король";
                            break;
                        case 12:
                            arr[i][j] = "Червовый Туз";
                            break;
                    }
                    break;
                case 1:
                    switch (j){
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            arr[i][j] = "Бубновая "+(j+2);
                            break;
                        case 9:
                            arr[i][j] = "Бубновый Валет";
                            break;
                        case 10:
                            arr[i][j] = "Бубновая Дама";
                            break;
                        case 11:
                            arr[i][j] = "Бубновый Король";
                            break;
                        case 12:
                            arr[i][j] = "Бубновый Туз";
                            break;
                    }
                    break;
                case 2:
                    switch (j){
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            arr[i][j] = "Крестовая "+(j+2);
                            break;
                        case 9:
                            arr[i][j] = "Крестовый Валет";
                            break;
                        case 10:
                            arr[i][j] = "Крестовая Дама";
                            break;
                        case 11:
                            arr[i][j] = "Крестовый Король";
                            break;
                        case 12:
                            arr[i][j] = "Крестовый Туз";
                            break;
                    }
                    break;
                case 3:
                    switch (j){
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            arr[i][j] = "Пиковая "+(j+2);
                            break;
                        case 9:
                            arr[i][j] = "Пиковый Валет";
                            break;
                        case 10:
                            arr[i][j] = "Пиковая Дама";
                            break;
                        case 11:
                            arr[i][j] = "Пиковый Король";
                            break;
                        case 12:
                            arr[i][j] = "Пиковый Туз";
                            break;
                    }
                    break;
                
            }
        }
    }

    // Выводим рандомную карту в консоль
    console.log(arr[parseInt(Math.random() * 4)][parseInt(Math.random() * 13)]);

}

function task_3(){
    let name = prompt('Введи свое имя, странник'),
        letters = ["ш", "щ", "ч", "ж"],
        
        // Лишняя переменная, только запутывает)
        // nameLen = name.length;
        isBadName = false,
        
        // Первый элемент массива разделен на две строки в коде
        replics = ['Подозрительное у тебя имя, странник. Дам-ка я тебе задание на убийство крыс в канализации.', 
                    'Отличное имя, странник. Вот тебе квест на убийство дракона.'];

    // Цикл начинается с i = 3, а должен с i = 0
    for(let i = 0; i < name.length; i++){
        if(letters.indexOf(name[i].toLowerCase()) > -1){
            
            // Присваивали строку "true", а не boolean - true
            isBadName = true;
            break;
        }
    }

    if(isBadName === true){
        console.log(replics[0]);
    }else{
        console.log(replics[1]);
    }

}

