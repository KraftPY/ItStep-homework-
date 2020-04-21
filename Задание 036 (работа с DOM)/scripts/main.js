const links = {
    inp: getObject('#inp'),
    openBtn: getObject('.openModal'),
    closeBtn: getObject('.closeModal'),
    modal: getObject('.main_modal'),
    field: getObject('.field'),
    ball: getObject('.ball'),
    btnLight: getObject('.btn_light'),
    circleLight: getObject('.circle_light', true),
    list: getObject('.list'),
    listItems: getObject('.list_items', true),
    mainBtnHelp: getObject('.main_btnHelp')
};

function getObject(cssClass, all = false) {
    if (all) {
        return document.querySelectorAll(cssClass);
    }else{
        return document.querySelector(cssClass);
    }
}

// ---------------------------- Task 1 --------------------------------

links.inp.addEventListener('input', (e) =>{
    let text = e.target.value,
        lng = text.length;
    if (!e.data){
        return;
    }else if (e.data.charCodeAt(0) > 64 && e.data.charCodeAt(0) < 91){
        return;
    }else if (e.data.charCodeAt(0) > 96 && e.data.charCodeAt(0) < 123){
        return;
    }else if (e.data.charCodeAt(0) > 1039 && e.data.charCodeAt(0) < 1103){
        return;
    }else if (e.data.charCodeAt(0) != 32){
        e.target.value = text.slice(0, lng - 1);
    }
});

// ---------------------------- Task 2 --------------------------------

links.openBtn.addEventListener('click', () => links.modal.style.display = 'block');
links.closeBtn.addEventListener('click', () => links.modal.style.display = 'none');

// ---------------------------- Task 3 --------------------------------

links.field.addEventListener('click', (e) => {
    if(e.clientX < 50){links.ball.style.left = '10px';}
    else if (e.clientX > 1059){links.ball.style.left = '1016px';}
    else{links.ball.style.left = e.clientX - 50 + 'px';}
    
    if(e.clientY < 272){links.ball.style.top = '222px';}
    else if (e.clientY > 895){links.ball.style.top = '845px';}
    else{links.ball.style.top = e.clientY - 50 + 'px';}
});

// ---------------------------- Task 4 --------------------------------

links.btnLight.addEventListener('click', ()=>{
    [...links.circleLight].some(elem => {
        if (!elem.classList.contains('gray')) {
            if(elem.nextElementSibling){
                elem.classList.add('gray');
                elem.nextElementSibling.classList.remove('gray');
                return true;
            }else{
                elem.classList.add('gray');
                elem.previousElementSibling.previousElementSibling.classList.remove('gray');
                return true;
            }
        }
    });
});

// ---------------------------- Task 5 --------------------------------

links.list.addEventListener('click', (ev) => {
    if(ev.target.tagName == 'LI'){
        links.listItems.forEach((el) => (el.textContent != ev.target.textContent) ? el.classList.remove('selected') : el.classList.toggle('selected'));
    }
});

// ---------------------------- Task 6 --------------------------------
let helpNote = null;

links.mainBtnHelp.addEventListener('mouseover', (ev) => {
    if (ev.target.tagName == 'BUTTON') {
        helpNote = document.createElement('div');
        helpNote.classList.add('note_bottom', 'note_top');
        helpNote.innerHTML = ev.target.dataset.help;
        links.mainBtnHelp.append(helpNote);
        calcXY(ev.target);
    }
});

links.mainBtnHelp.addEventListener('mouseout', () => {
    if (helpNote) {
        helpNote.remove();
        helpNote = null;
    }
});

function calcXY(elem) {
    let btn = elem.getBoundingClientRect(),
        parentDiv = elem.parentElement.getBoundingClientRect();

    if ((btn.top - parentDiv.top) > (helpNote.clientHeight + 24)) {
        helpNote.classList.remove('note_bottom');
        helpNote.style.top = (btn.top - helpNote.clientHeight - 22) + 'px';
        helpNote.style.left = btn.left + 'px';
    }else{
        helpNote.classList.remove('note_top');
        helpNote.style.top = (btn.bottom + 22) + 'px';
        helpNote.style.left = btn.left + 'px';
    }
}
