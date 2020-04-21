const links = {
    btnRnd: getObject('.button_rnd'),
    divXY: getObject('.main_XY'),
    btnHideShow: getObject('.btn_hidden_show'),
    list: getObject('.left'),
    right: getObject('.right'),
    btnRemove: getObject('.remove', true),
    btnAddPercent: getObject('.btn_add_percent'),
    progressbar: getObject('.progressbar')
};

function getObject(cssClass, all = false) {
    if (all) {
        return document.querySelectorAll(cssClass);
    }else{
        return document.querySelector(cssClass);
    }
}

// -----------------------------------Task 1--------------------------------
links.btnRnd.addEventListener('click', () => {
    getObject('.number_rnd').innerHTML = Math.floor(Math.random() * 101);
})

// -----------------------------------Task 2--------------------------------
links.divXY.addEventListener('mousemove', (ev) => {
    ev.target.innerHTML = `X = ${ev.x}, Y = ${ev.y}`;
})

links.divXY.addEventListener('mousedown', (ev) => {
    ev.target.innerHTML = (ev.which == 1) ? `Left mouse button` : 
        (ev.which == 2) ? `Scroll mouse button` : `Right mouse button`;
})

// -----------------------------------Task 3--------------------------------
links.btnHideShow.addEventListener('click', () => {
    getObject('.hidden_text').classList.toggle('display_none');
});

// -----------------------------------Task 4--------------------------------
links.list.addEventListener('click', (ev) => {
    if(ev.target.tagName == 'LI'){
        [...links.list.children[0].children].forEach((el) => el.classList.remove('checked'));
        ev.target.classList.add('checked');
        [...links.right.children].forEach(el => {
            (el.dataset.tag == ev.target.dataset.tag) ? el.classList.remove('display_none') : el.classList.add('display_none');
        });
    }
});

// -----------------------------------Task 5--------------------------------
links.btnRemove.forEach((el) => {
    el.addEventListener('click', (ev) =>{
        ev.target.parentElement.parentElement.classList.add('display_none');
    });    
});

// -----------------------------------Task 6--------------------------------
let arrProgressbar = [...links.progressbar.children];
    len = arrProgressbar.length;

links.btnAddPercent.addEventListener('click', () => {
    for (let i = len - 2; i >= 0; i--) {
        if (arrProgressbar[len -1 ].classList.contains('percents')) {
            arrProgressbar.forEach((el) => el.classList.remove('percents'));
            break;
        }
        if (arrProgressbar[i].classList.contains('percents')) {
            arrProgressbar[i + 1].classList.add('percents');
            console.dir(arrProgressbar[i]);
            break;
        }else if (!arrProgressbar[0].classList.contains('percents')){
            arrProgressbar[0].classList.add('percents')
            break;
        }           
    }
});
