const   dom = {
            task1AllBlock : document.querySelectorAll('.block'),
            btnStart : document.querySelector('.btn_start'),
            titleEnd : document.querySelector('.title_end'),
            example : document.querySelector('.example'),
            answ : document.querySelector('.answ'),
            btnMath : document.querySelector('.btn_math'),
            result : document.querySelector('.result')
        };
let     timerId = null;


// Task 1
dom.btnStart.addEventListener('click', () =>{
    if (dom.titleEnd.classList.contains('none') && timerId == null) {
        timerId = setInterval(() => selectRndBlock(timerId), 1000);
    } else if (dom.titleEnd.classList.contains('none') && timerId !== null){
        clearInterval(timerId);
        dom.task1AllBlock.forEach((el) => {
            el.classList.remove('no_color');
            el.style.backgroundColor = '';
        });
        timerId = setInterval(() => selectRndBlock(timerId), 1000);
    }else if(!dom.titleEnd.classList.contains('none')){
        dom.titleEnd.classList.add('none');
        dom.task1AllBlock.forEach((el) => {
            el.classList.remove('no_color');
            el.style.backgroundColor = '';
        });
        timerId = setInterval(() => selectRndBlock(timerId), 1000);
    }
});

function selectRndBlock(id) {
    const   arrNoColorBlock = [...dom.task1AllBlock].filter((el) => !el.classList.contains('no_color'));
            
    if (arrNoColorBlock.length) {
        const numBlock = Math.floor(Math.random() * (arrNoColorBlock.length));
        arrNoColorBlock[numBlock].style.backgroundColor = rndColor();
        arrNoColorBlock[numBlock].classList.add('no_color');
    } else {
        clearInterval(id);
        timerId = null;
        dom.titleEnd.classList.remove('none');
    }
}

function rndColor() {
    const   r = Math.floor(Math.random() * (255 + 1)),
            g = Math.floor(Math.random() * (255 + 1)),
            b = Math.floor(Math.random() * (255 + 1));
    return `rgb(${r}, ${g}, ${b})`;
}

// Task2
let res = 0;

function mathGenerator() {
    const   arrMathSymbols = ['+','-','/','*'];
    let     mathSymbol = arrMathSymbols[random(3)],
            num1 = (mathSymbol == '*') ? random(30, 2) : random(100, 10),
            num2 = (mathSymbol == '*') ? random(30, 2) : random(100, 10);
            
    res = mathFunc(mathSymbol, num1, num2);
    dom.example.innerHTML = `Пример: ${num1} ${mathSymbol} ${num2} =`;
}

dom.btnMath.addEventListener('click', ()=>{
    if (dom.answ.value == res)  {
        dom.result.innerHTML = 'Все верно!';
        setTimeout(() => {
            dom.result.innerHTML = '';
            dom.answ.value = '';
        }, 2000);
        mathGenerator();
    }else{
        dom.result.innerHTML = 'Подумай еще...';
        setTimeout(() => {
            dom.result.innerHTML = '';
            dom.answ.value = '';
        }, 2000);
    }
});

function random(max, min = 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function mathFunc(sym, num1, num2) {
    res = 0;
    switch (sym) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        default:
            break;
    }
    return Math.round(res * 100) / 100;
}

mathGenerator();