const   dom = {
            blcJsonString : document.querySelector('.jsonString'),
            blcJsonParse : document.querySelector('.jsonParse'),
            btn : document.querySelector('.btn'),
            error : document.querySelector('.error')
        },
        errorMsg  = `[format error]`;

let test = [{
        id : 1,
        name : 'Pavel',
        age : 33
        },
        {
            id: 2,
            name: 'Alex',
            age: 30
        }];

dom.blcJsonString.addEventListener('click', ()=> dom.error.innerHTML = '')

dom.btn.addEventListener('click', ()=>{
    try {
        let jsonText = JSON.parse(dom.blcJsonString.value);
        dom.blcJsonParse.value = JSON.stringify(jsonText, null, 4);
        dom.error.innerHTML = '';
    } catch (error) {
        dom.error.innerHTML = errorMsg;
        dom.blcJsonParse.value = '';     
    }
});