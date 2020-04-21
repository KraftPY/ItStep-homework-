export default class ChatModel {
  constructor(handlerUpdMsg) {
    this.config = {
      apiKey: "AIzaSyDRcMnpkuZeLcgeQULvv5TNwA0RZOUqAGE",
      authDomain: "test-frontend-ac6bd.firebaseapp.com",
      databaseURL: "https://test-frontend-ac6bd.firebaseio.com",
      projectId: "test-frontend-ac6bd",
      storageBucket: "test-frontend-ac6bd.appspot.com",
      messagingSenderId: "982413957424",
      appId: "1:982413957424:web:f7170ce6d553d71ad010f5"
    };
    this.initDB();
    this.arrayMsg = [];
    this.getRealtimeUpdate(handlerUpdMsg);
  }

  initDB() {
    firebase.initializeApp(this.config);
    this.db = firebase.firestore();
  }

  sendMsgToServer({ name, text }) {
    return this.db.collection('firebase_chat/messages/msg_list').add({
      name,
      text,
      date: new Date(),
    });
  }

  getRealtimeUpdate(handlerUpdMsg) {
    this.db.collection('firebase_chat/messages/msg_list').onSnapshot(arr => {
      this.arrayMsg = [];
      arr.docs.forEach(el => {
        const msg = {
          name: el.data().name,
          text: el.data().text,
          date: el.data().date.seconds * 1000,
        };
        this.arrayMsg.push(msg);
      });
      this.arrayMsg = this.arrayMsg.sort((a, b) => a.date - b.date);
      handlerUpdMsg(this.arrayMsg);
    });
  }
}