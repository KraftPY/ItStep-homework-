// ------------------------------------------ Task 1 ----------------------------------------------
function printMarker() {
    const redMarker = new Marker(prompt('Введите цвет маркера (red, green, blue и тд.)'), parseInt(prompt('Введите кол-во чернил в процентах')));
    
    redMarker.print(prompt('Введите строку котурую нужно написать маркером'));    
}

function refillMarker() {
    const newMarker = new ZapMarker('green', 2);
    
    newMarker.refill(parseInt(prompt('Введите кол-во чернил в процентах, чтоб заправить маркер')));
    newMarker.print(prompt('Введите строку котурую нужно написать маркером'));
}

// ------------------------------------------ Task 2 ----------------------------------------------

function task_2() {
    const myDate = new ExtendedDate(2019, 8, 17);

    myDate.outputMonth();
    myDate.checkDate();
    myDate.checkYear();
    myDate.tomorrow();
}

// ------------------------------------------ Task 3 ----------------------------------------------

function printEmpl() {
    let arrEmpl = [],
        arrName = ['Кличко','Тимошенко','Порошенко','Ляшко','Аваков','Парубий','Гройсман','Яценюк'],
        arrDepart = ['Финансовый отдел','Бухгалтерия','Отдел продаж','Отдел снабжение','Транспортный отдел'];

    for (let i = 0; i < arrName.length; i++) {
        let employee = new Employee(arrName[i], getRandom(50, 20), arrDepart[getRandom(arrDepart.length - 1)]);
        arrEmpl.push(employee);
    }

    console.log(arrEmpl);

    const empTable = new EmpTable(arrEmpl);

    document.write(empTable.getHtml());
}

// ------------------------------------------ Task 4 ----------------------------------------------

function printStyleEmpl(){
    let arrEmpl = [],
        arrName = ['Кличко','Тимошенко','Порошенко','Ляшко','Аваков','Парубий','Гройсман','Яценюк'],
        arrDepart = ['Финансовый отдел','Бухгалтерия','Отдел продаж','Отдел снабжение','Транспортный отдел'],
        style = '';

    for (let i = 0; i < arrName.length; i++) {
        let employee = new Employee(arrName[i], getRandom(50, 20), arrDepart[getRandom(arrDepart.length - 1)]);
        arrEmpl.push(employee);
    }

    console.log(arrEmpl);

    const empStyleTable = new StyledEmpTable(arrEmpl);

    style = empStyleTable.getStyles('red', '1px solid', '#CCE5FF');
    document.write(empStyleTable.getHtml(style));
}

// ------------------------------------------------------------------------------------------------

function getRandom(max, min = 0, decimal = false){
    return (!decimal) ? 
        Math.floor(Math.random() * (max - min + 1) + min):
        Math.floor((Math.random() * (max - min) + min) * 100) / 100;
}