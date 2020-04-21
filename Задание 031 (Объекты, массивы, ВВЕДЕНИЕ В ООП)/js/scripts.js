let arrPurch = [],
    arrReceipt = [],
    purchName = ["Хлеб","Молоко","Сметана","Масло","Подсол. масло","Колбаса","Мясо","Яйца","Консерва"],
    arrStyle = [
        {cssStyle: "color:", cssValue: "red;"},
        {cssStyle: "font-size:", cssValue: "25px;"},
        {cssStyle: "font-family:", cssValue: "cursive;"},
        {cssStyle: "text-decoration:", cssValue: "underline;"},
        {cssStyle: "text-align:", cssValue: "center;"}
    ],
    arrClassroom = [];

function newArrPunch() {
    let purchStatus = ["Куплено","НЕ куплено"],
        minCount = 1,
        maxCount = 10;

    arrPurch = [];
    for (let i = 0; i < purchName.length; i++) {
        let purch = {};
        purch.name = purchName[i];
        purch.count = getRandom(minCount, maxCount);
        purch.status = purchStatus[getRandom(1)];
        arrPurch.push(purch);
    }
    console.log(arrPurch);
}

function addPurch(){
    let purch = newPurch(),
        new_purch = true;

    arrPurch.forEach(elem => {
        if (elem.name == purch.name){
            elem.count += purch.count;
            new_purch = false;
        }
    });
    
    if (new_purch){
        purch.status = "НЕ куплено";
        arrPurch.push(purch);
    }
    console.log(arrPurch);
}

function newPurch() {
    let purch = {};

    purch.name = prompt("Введите наименование продукта");
    do {
        purch.count = parseInt(prompt("Введите количество от 1 до 10"));
    } while (purch.count < 1 || purch.count > 10);
    
    return purch;
}

function sortPurch() {
    arrPurch.sort((a, b) => a.status < b.status ? 1 : -1);
    arrPurch.forEach(elem => {
        console.log(`Покупка: ${elem.name} | кол-во: ${elem.count} | статус: ${elem.status}`);
    });
}

function buyPurch() {
    let purch = {};

    purch.name = prompt("Введите наименование покупаемого продукта");
    
    arrPurch.forEach(elem => {
        if (elem.name == purch.name && elem.status == "НЕ куплено"){
            elem.status = "Куплено";
        }else if (elem.name == purch.name && elem.status == "Куплено"){
            console.log("Продукт уже куплен!");
        }
    });
    console.log(arrPurch);
}

// ==================== Task 2 ============================================================================================

function newRec() {
    let minPrice = 10, maxPrice = 100,
        minCount = 1, maxCount = 10;

    arrReceipt = [];
    for (let i = 0; i < purchName.length; i++) {
        let purch = {};
        purch.name = purchName[i];
        purch.count = getRandom(maxCount, minCount);
        purch.price = getRandom(maxPrice, minPrice, true);
        arrReceipt.push(purch);
    }
    console.log(arrReceipt);
}

function printRec(){
    console.log(`|--------------- Товарный чек -------------------|`);
    arrReceipt.forEach(elem =>{
        console.log(`| Товар: ${elem.name} | кол-во: ${elem.count} | цена: ${elem.price}|`);
    });
    console.log(`|------------------------------------------------|`);
}

function sum(){
    let sum = 0;
    
    arrReceipt.forEach((elem) => sum += elem.count * elem.price);
    
    console.log(`Общая сумма по чеку: ${sum}`);
}

function mostExp() {
    let purch = {
            name: "",
            price: 0};    
    arrReceipt.forEach(elem => {
        if (purch.price < elem.count * elem.price) {
            purch.name = elem.name;
            purch.price = elem.count * elem.price;
        }
    });
    console.log(`Самая дорогая покупка: ${purch.name} - ${purch.price} грн.`);
}

function averPrice() {
    let count = 0,
        sum = 0;

    arrReceipt.forEach(elem =>{
        count += elem.count;
        sum += elem.count * elem.price;
    });
    console.log(`Средняя стоимость товара в чеке: ${Math.floor(sum / count * 100) / 100}`);
}


// ==================== Task 3 ============================================================================================

function printText() {
    let text = prompt('Введите любой текст!'),
        allStyle = "";
    
    arrStyle.forEach(elem => allStyle += elem.cssStyle + elem.cssValue);

    document.write(`<p style="${allStyle}">${text}</p>`);
    document.write(`<a href="index.html">Вернуться назад</a>`);
}

// ==================== Task 4 ============================================================================================

function newArrClassroom() {
    let faculty = ['Экономический','Исторический','Химический','Юридический'];

    arrClassroom = [];
    for (let i = 0; i < 10; i++) {
        let classroom = {};
        classroom.room = 201 + i;
        classroom.place = getRandom(20, 10);
        classroom.faculty = faculty[getRandom(3)];
        arrClassroom.push(classroom);
    }
    console.log(arrClassroom);
}

function printArrClassroom(arr = arrClassroom) {
    arr.forEach(elem => {console.log(`| Номер аудиторий: ${elem.room} | кол-во мест: ${elem.place} | Факультет: ${elem.faculty} |`);});
}

function printFacultyClassroom() {
    let faculty = prompt("Укажите факультет"),
        filterArr = [];

    filterArr = arrClassroom.filter(elem => elem.faculty == faculty);

    console.log(`Все аудитории ${faculty} факультета`);
    printArrClassroom(filterArr);
}

function selectClassroom() {
    let studGroupe = {
            name: prompt('Введите наименование группы'),
            students: prompt('Введите кол-во студентов в группе'),
            faculty: prompt('Введите наименование факультета')
        },
        filterArr = [];
    
    filterArr = arrClassroom.filter(elem => (elem.faculty == studGroupe.faculty) && (elem.place > studGroupe.students));
    console.log(`Для группы "${studGroupe.name}" подойдут аудитории:`);
    printArrClassroom(filterArr);
}

function sortPlaceClassroom() {
    let sortArr = [];

    sortArr = arrClassroom.sort((a, b) => (a.place > b.place) ? 1 : -1);
    console.log(`Отсортированно по кол-ву мест в аудитории`);
    printArrClassroom(sortArr);
}

function sortNameClassroom() {
    let sortArr = [];

    sortArr = arrClassroom.sort((a, b) => (a.room > b.room) ? 1 : -1);
    console.log(`Отсортированно по номеру аудитории`);
    printArrClassroom(sortArr);
}

// ---------------------------------------------------------------------------------------------
function getRandom(max, min = 0, decimal = false){
    return (!decimal) ? 
        Math.floor(Math.random() * (max - min + 1) + min):
        Math.floor((Math.random() * (max - min) + min) * 100) / 100;
}

