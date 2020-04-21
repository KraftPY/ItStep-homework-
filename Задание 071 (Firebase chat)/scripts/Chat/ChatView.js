import ChatTemplate from './ChatTemplate.js';

export default class ChatView {
  constructor(sendMsg) {
    this.dom = {
      msgList: document.querySelector('.msg_list'),
      inpName: document.querySelector('#name'),
      text: document.querySelector('#text'),
      btnSend: document.querySelector('.btn_send'),
    };
    this.dom.btnSend.addEventListener('click', sendMsg);
  }

  newMsg() {
    return {
      name: this.dom.inpName.value,
      text: this.dom.text.value
    };
  }

  clearFields() {
    this.dom.inpName.value = '';
    this.dom.text.value = '';
  }

  valid() {
    alert('Enter your name!');
  }

  clearMsgList() {
    this.dom.msgList.innerHTML = '';
  }

  renderMsg(msg) {
    const li = document.createElement('li');
    li.innerHTML = ChatTemplate.getMsgHTML(msg);
    this.dom.msgList.append(li);
    this.dom.msgList.scrollTop = this.dom.msgList.scrollHeight;
  }
}