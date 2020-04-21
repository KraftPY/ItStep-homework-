export class Model{
    constructor(getUser){
        this.config = {
            method: 'get',
            url: 'https://randomuser.me/api/'
        };
        this.getUser = getUser;

    }

    getDataUser(){
        const ajax = new XMLHttpRequest();
        let user;
        ajax.open(this.config.method, this.config.url);
        ajax.responseType = 'json';
        ajax.send();
        ajax.addEventListener('readystatechange', ()=> {
            if(ajax.status == 200 && ajax.readyState == 4){
                this.getUser(ajax.response.results[0]);
            }
        });
    }
}