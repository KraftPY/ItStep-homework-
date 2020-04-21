import React from 'react';
import './App.css';

class InputToDo extends React.Component {
  constructor(props) {
    super(props)

    this.input = React.createRef();
    this.sendValue = this.sendValue.bind(this)
  }

  sendValue(ev) {
    ev.preventDefault();
    const value = this.input.current.value.trim();
    if (value) {
      this.props.createNewTodo(value);
    }
    this.input.current.value = '';
  }

  render() {
    return (
      <form className="form" onSubmit={this.sendValue}>
        <input type="text" name='inp' placeholder="New todo" ref={this.input} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCheck: false
    }
    this.handlerCheck = props.handlerCheck
    this.deleteToDo = props.deleteToDo;
  }

  render() {
    return (
      <div>
        <ul className="list">
          {this.props.items.map((el) =>
            <li key={el.id} data-id={el.id} >
              <input type="checkbox" checked={el.isCheck} onChange={this.handlerCheck} />
              <div className={el.isCheck ? "text decor_text" : "text"}>{el.text}</div>
              <button className="btn_delete" onClick={this.deleteToDo}>X</button>
            </li>
          )}
        </ul>
      </div>)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { arr: [] }
    this.createNewTodo = this.createNewTodo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.handlerCheck = this.handlerCheck.bind(this)
  }


  createNewTodo(value) {

    const date = new Date()
    const toDo = {
      id: +date + '',
      text: value,
      isCheck: false
    }
    this.setState(state => ({
      arr: state.arr.concat(toDo),
    }));
  }

  deleteToDo(ev) {
    const id = ev.target.parentNode.dataset.id;
    this.setState(state => ({
      arr: state.arr.filter(el => el.id !== id)
    }));
  }

  handlerCheck(ev) {
    const isCheck = ev.target.checked;
    const id = ev.target.parentNode.dataset.id;
    this.setState(state => ({
      arr: state.arr.map(el => {
        if (el.id === id) {
          el.isCheck = isCheck;
        }
        return el;
      })
    }));
  }

  render() {
    return (
      <div className="App">
        <InputToDo createNewTodo={this.createNewTodo} />
        <hr />
        <ToDoList items={this.state.arr} deleteToDo={this.deleteToDo} handlerCheck={this.handlerCheck} />
      </div>
    )
  };
}

export default App;
