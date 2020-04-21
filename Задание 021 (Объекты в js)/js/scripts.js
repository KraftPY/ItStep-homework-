function task_1(){
    let arrDragons = [],
        genders = ["мужская особь", "женская особь"],
        maleName = ["Иван","Петр","Максим","Павел","Григорий","Александр","Виталий","Тарас","Евгений","Артем","Никита","Владлен","Андрей"],
        femaleName = ["Василиса","Оксана","Екатерина","Виктория","Валентина","Ольга","Альбина","Светлана","Лиля","Наталья","Линда","Жанна","Карина"],
        location = ["Южная Америка", "Северная Америка", "Европа", "Азия", "Австралия", "Африка"],
        color = ["красный","зеленый","синий","черный","белый","желтый", "розовый"],
        sumHeads = 0,
        kolMale = 0,
        kolFemale = 0,
        youngDragon = 0,
        oldDragon = 0,
        young = 3001,
        old = 0;
    
    do{
        kolDragons = parseInt(prompt("Введите количество драконов в стае:"));
    }while(kolDragons < 0 || isNaN(kolDragons) || kolDragons == 0 || kolDragons > 100);


    for (let i = 0; i < kolDragons; i++){
        let dragons = {};
        dragons.num = i;
        dragons.genders = genders[getRandom(0, 1)];
        dragons.name = dragons.genders == "мужская особь" ? maleName[getRandom(0, 12)] : femaleName[getRandom(0, 12)];
        dragons.location = location[getRandom(0, 5)];
        dragons.color = color[getRandom(0, 6)];
        dragons.age = getRandom(100, 3000);
        dragons.heads = getRandom(1, 20);
        arrDragons.push(dragons);
    }
    
    for (let i = 0; i < kolDragons; i++){
        console.log("Дракон № "+(arrDragons[i].num + 1)+":"+" Имя - "+arrDragons[i].name+", Пол - "+arrDragons[i].genders+", Локация - "+arrDragons[i].location+", Цвет - "+arrDragons[i].color+", Возвраст - "+arrDragons[i].age+", Кол-во голов - "+arrDragons[i].heads);
        sumHeads += arrDragons[i].heads;
        arrDragons[i].genders == "мужская особь" ? kolMale++ : kolFemale++;
        if (arrDragons[i].age < young){
            young = arrDragons[i].age;
            youngDragon = i;
        }else if (arrDragons[i].age > old){
            old = arrDragons[i].age;
            oldDragon = i;
        }
    }

    console.log("Суммарная сумма голов драконов: "+sumHeads);
    console.log("Количество драконов мужского пола: "+kolMale);
    console.log("Количество драконов женского пола: "+kolFemale);
    console.log("Среднее количество голов у драконов: "+Math.floor(sumHeads / kolDragons));
    console.log("Самый молодой Дракон № "+(arrDragons[youngDragon].num + 1)+":"+" Имя - "+arrDragons[youngDragon].name+", Пол - "+arrDragons[youngDragon].genders+", Локация - "+arrDragons[youngDragon].location+", Цвет - "+arrDragons[youngDragon].color+", Возвраст - "+arrDragons[youngDragon].age+", Кол-во голов - "+arrDragons[youngDragon].heads);
    console.log("Самый старый Дракон № "+(arrDragons[oldDragon].num + 1)+":"+" Имя - "+arrDragons[oldDragon].name+", Пол - "+arrDragons[oldDragon].genders+", Локация - "+arrDragons[oldDragon].location+", Цвет - "+arrDragons[oldDragon].color+", Возвраст - "+arrDragons[oldDragon].age+", Кол-во голов - "+arrDragons[oldDragon].heads);
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task_2(){
    let arr = [],
        arrXO = ["X","O"];

    for (let i = 0; i < 3; i++){
        arr[i] = [];
        for (let j = 0; j < 3; j++){
            arr[i][j] = arrXO[getRandom(0, 1)];
        }
    }
    for (let i = 0; i < 3; i++){
        let str = "";
        for (let j = 0; j < 3; j++){
            str += arr[i][j];
        }
        console.log(str);
    }
}

function task_3(){
    let organs = 'abcdefghijklmnopqrstuvwxyz0123456789_-!@#$%^&*()',
        // длина строки не len, а lenght
        orgLen = organs.length, 
        len = parseInt(prompt('Enter a len of string')),
        answ = '',
        char = '';

    for(let i = 0; i < len; i++){
        char = organs[Math.floor(Math.random() * orgLen)];
      
        // Бессмысленный if
        // if(Math.random() > 0,5){
        //     char = char.toLowerCase();
        // }
        answ += char;
    }
    console.log("Random string with length " + len + " is: " + answ);
}

