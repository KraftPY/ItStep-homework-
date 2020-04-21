import React from 'react';
import './App.css';

class ListJoke extends React.Component {
  render() {
    return (
      <ol className="list">
        {this.props.arrJokes.map((el, i) => {
          return <li key={el.id} value={this.props.arrJokes.length - i} dangerouslySetInnerHTML={{ __html: el.joke }}></li>
        })
        }
      </ol >
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrJokes: []
    };
    this.addNewJoke = this.addNewJoke.bind(this);
  }

  checkNewJoke(id) {
    if (this.state.arrJokes.find(el => el.id === id)) {
      return true;
    }
    return false;
  }

  async addNewJoke(ev) {
    ev.preventDefault();
    let data = {};
    do {
      data = await fetch('https://api.icndb.com/jokes/random/').then(res => res.json());
    } while (this.checkNewJoke(data.value.id))

    const newJoke = { id: data.value.id, joke: data.value.joke };
    this.state.arrJokes.unshift(newJoke);
    this.setState(state => ({
      arrJokes: state.arrJokes.concat()
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Шутки от Чака</h1>
        <button onClick={this.addNewJoke}>Найти шутку</button>
        <hr />
        <ListJoke arrJokes={this.state.arrJokes} />
      </div >
    );
  }
}

export default App;