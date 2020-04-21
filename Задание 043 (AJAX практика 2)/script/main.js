import {Controller} from '../script/MVC/chatController.js';


const controller = new Controller();


// const ajax = new XMLHttpRequest();

// ajax.open('get', 'http://so2niko.zzz.com.ua/examples/chat/api.php', true);
// ajax.send();
// ajax.addEventListener('readystatechange', ()=> {
//     if(ajax.status == 200 && ajax.readyState == 4){
//         outMess(JSON.parse(ajax.responseText));
//     }
// });

// function outMess(arr) {
// arr.forEach((el, i) => {
//     dom.messegeBoard.innerHTML += `${arr[i].time} ${arr[i].name} <br> &nbsp;&nbsp;&nbsp;&nbsp;${arr[i].text}<br><br>`;
// });
// }

// dom.btnSend.addEventListener('click', ()=> sendMsg());

// function sendMsg() {
//     const ajax = new XMLHttpRequest();
//     let form = new FormData();

//     form.append('data',true);
//     form.append('name',dom.inputName.value);
//     form.append('text',dom.textArea.value);
//     ajax.open('post', 'http://so2niko.zzz.com.ua/examples/chat/api.php', true);
//     ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     // ajax.send(`data=true&name=${dom.inputName.value}&color=#0000ff&text=${dom.textArea.value}`);
//     ajax.send(form);
        
// }