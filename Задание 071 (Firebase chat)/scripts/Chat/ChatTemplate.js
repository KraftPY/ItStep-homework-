export default class ChatTemplate {
  static getMsgHTML({ name, text, date }) {
    return `
    <div class="msg_block">
      <h3 class="name">${name}</h3>
      <p class="text">${text}</p>
      <p class="date">${new Date(date).toLocaleString()}</p>
      <hr>
    </div>`;
  }
}