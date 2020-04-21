export class View {
    constructor(controller){
        this.controller = controller;
        this.links = {
            btnAdd: document.querySelector('.btnAdd'),
            btnClear: document.querySelector('.btnClear'),
            text: document.querySelector('#text'),
            container: document.querySelector('.container')
        };
        this.links.btnAdd.addEventListener('click', ()=> this.clickBtnAdd());
        this.links.btnClear.addEventListener('click', ()=> this.clickBtnClear());
    }

    render(data){
        this.links.container.innerHTML += `${data}<br>`;
    }

    clickBtnAdd(){
        if (this.links.text.value) {
            this.links.container.innerHTML += `${this.links.text.value}<br>`;
            this.controller.saveData(this.links.text.value);
            this.links.text.value = '';
        }
    }

    clickBtnClear(){
        this.links.container.innerHTML = '';
    }
}