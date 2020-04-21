
// -------------------------------------------------- Task 1 ----------------------------------------------------------------------------

class Marker {
    constructor(color = "black", ink = 0){
        this.color = color;
        this.ink = ink;
    }

    print(text){
        let pos = 0;

        if (this.ink) {
            pos = this.ink / 0.5; 
            for (let i = 0; i < pos; i++) {
                (text[i] == ' ') ? pos++ : false;            
            }
            console.log('%c%s', 'color:' +this.color+';' , text.slice(0, pos));
        } else {
            console.log(`В маркере нет чернил!`);
        }
    }
}

class ZapMarker extends Marker{
    refill(addInk){
        (addInk > 0) ? this.ink +=addInk : false;
    }
}

// -------------------------------------------------- Task 2 ----------------------------------------------------------------------------

class ExtendedDate extends Date{
    outputMonth(){
        let arrMonth = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'],
            arrNumMonth = ['Первое','Второе','Третье','Четвертое','Пятое','Шестое','Седьмое','Восьмое','Девятое','Десятое','Одинадцатое','Двенадцатое','Тринадцатое','Четырнадцатое',
                            'Пятнадцатое','Шестнадцатое','Семнадцатое','Восемнадцатое','Девятнадцатое','Двацотое','Двадцать первое','Двадцать второе','Двадцать третье','Двадцать четвертое',
                            'Двадцать пятое','Двадцать шестое','Двадцать седьмое','Двадцать восьмое','Двадцать девятое','Тридцатое','Тридцать первое'];
        console.log(arrNumMonth[this.getDate() - 1]+' '+arrMonth[this.getMonth()]);
    }

    checkDate(){
        let now = Date();
        (Date.parse(now) > Date.parse(this)) ? console.log('Прошедшая дата') : console.log('Будущая дата');
    }

    checkYear(y = this.getFullYear()){
        (((y % 4) != 0) || ((y % 100) == 0) && ((y % 400) != 0)) ? console.log('Год НЕ высокосный!') : console.log('Год высокосный!');
    }

    tomorrow(){
        console.log(`${this.getDate() + 1}.${this.getMonth() + 1}.${this.getFullYear()}`);
    }
}


// -------------------------------------------------- Task 3 ----------------------------------------------------------------------------

class Employee{
    constructor(name = '', age = '', department = ''){
        this.name = name;
        this.age = age;
        this.department = department;
    }
}

class EmpTable{
    constructor(arrEmpl = []){
        this.arrEmpl = arrEmpl;
    }

    getHtml(){
        let htmlCode = '';
        htmlCode = `<table border='1' style=''><tr><th>Сотрудник</th><th>Возвраст</th><th>Отдел</th></tr>`;
        this.arrEmpl.forEach(elem =>{htmlCode += `<tr><td>${elem.name}</td><td>${elem.age}</td><td>${elem.department}</td></tr>`;});
        htmlCode += `</table>`;
        htmlCode += `<br><a href="index.html">Вернуться назад</a>`;
        return htmlCode;
    }
}

// -------------------------------------------------- Task 4 ----------------------------------------------------------------------------

class StyledEmpTable extends EmpTable{

    getStyles(color = 'black', border = '0px', bgcolor = 'white'){
        return `color: ${color}; border: ${border}; background-color: ${bgcolor};`;
    }

    getHtml(style){
        let htmlCode = super.getHtml(),
            ind = 0,
            styleHtmlCode = '';

        ind = htmlCode.indexOf(`style='`);
        styleHtmlCode = htmlCode.slice(0, ind + 7) + style + htmlCode.slice(ind + 7);
        return styleHtmlCode;
    }
}