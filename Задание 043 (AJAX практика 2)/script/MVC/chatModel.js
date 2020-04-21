export class Model{
    constructor(getAllMsg){
        this.config = {
            url: 'http://so2niko.zzz.com.ua/examples/chat/api.php',
            getMethod: 'get',
            postMethod: 'post',
            async: true
        };
        this.getAllMsg = getAllMsg;
    }
    getMsgFromSrv(){
        const ajax = new XMLHttpRequest();
        ajax.open(this.config.getMethod, this.config.url, this.config.async);
        ajax.send();
        ajax.addEventListener('readystatechange', ()=> {
            if(ajax.status == 200 && ajax.readyState == 4){
                this.getAllMsg(JSON.parse(ajax.responseText));
            }
        });
    }
    postData(msg){
        const ajax = new XMLHttpRequest();
        ajax.open(this.config.postMethod, this.config.url, this.config.async);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send(`data=true&name=${msg.name}&color=${msg.color}&text=${msg.text}`);
        this.getMsgFromSrv();
    }
}