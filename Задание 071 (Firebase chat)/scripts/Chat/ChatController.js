import ChatView from './ChatView.js';
import ChatModel from './ChatModel.js';


export default class ChatController {
  constructor() {
    this.view = new ChatView(this.sendMsg.bind(this));
    this.model = new ChatModel(this.handlerUpdMsg.bind(this));
  }

  sendMsg(ev) {
    ev.preventDefault();
    const msg = this.view.newMsg();
    if (msg.name) {
      this.model.sendMsgToServer(msg).catch(console.error());
    } else {
      this.view.valid();
    }
    this.view.clearFields();
  }

  handlerUpdMsg(arr) {
    this.view.clearMsgList();
    arr.forEach(msg => this.view.renderMsg(msg));
  }
}